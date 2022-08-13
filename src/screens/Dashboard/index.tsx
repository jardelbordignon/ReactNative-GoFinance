import { useFocusEffect } from '@react-navigation/native'
import React, { useCallback, useState, useTransition } from 'react'

import { HighlightCard } from 'src/components/HighlightCard'
import { TransactionCard, TransactionCardProps } from 'src/components/TransactionCard'
import { storage } from 'src/provider'
import { Icon } from 'src/styles/commons'
import { formatDate, formatPrice } from 'src/utils/formatters'
import { delay } from 'src/utils/helpers'

import * as S from './styles'

export type DataListProps = TransactionCardProps & {
  id: string
}

export function Dashboard() {
  const [transactions, setTransactions] = useState<DataListProps[]>([])
  const [isPending, startTransition] = useTransition()
  const [balanceData, setBalanceData] = useState({
    incoming: '',
    withdrawal: '',
    total: '',
  })

  const loadTransactions = async () => {
    let balance = { incoming: 0, withdrawal: 0, total: 0 }
    await delay(1)
    //await storage.clear('transactions')
    const data = await storage.get<DataListProps[]>('transactions')
    if (!data) return

    const formattedData = data.map(item => {
      balance[item.type] += +item.amount

      const amount = formatPrice(+item.amount)
      const date = formatDate(item.date)

      return { ...item, amount, date }
    })

    balance.total = balance.incoming - balance.withdrawal

    setBalanceData({
      incoming: formatPrice(balance.incoming),
      withdrawal: formatPrice(balance.withdrawal),
      total: formatPrice(balance.total),
    })
    setTransactions(formattedData)
  }

  useFocusEffect(
    useCallback(() => {
      startTransition(() => {
        loadTransactions()
      })
    }, [])
  )

  if (isPending) {
    return (
      <S.Container>
        <S.Title>Carregando...</S.Title>
      </S.Container>
    )
  }

  return (
    <S.Container>
      <S.Header>
        <S.UserWrapper>
          <S.UserBox>
            <S.Photo source={{ uri: 'https://github.com/jardelbordignon.png' }} />
            <S.UserInfo>
              <S.Greeting>Olá</S.Greeting>
              <S.UserName>Jardel</S.UserName>
            </S.UserInfo>
          </S.UserBox>

          <S.LogoutButton>
            <Icon name="power" color="secondary" />
          </S.LogoutButton>
        </S.UserWrapper>
      </S.Header>

      <S.HighlightCards>
        <HighlightCard
          type="up"
          title="Entradas"
          amount={balanceData.incoming}
          message="Última entrada em 20 de julho"
        />
        <HighlightCard
          type="down"
          title="Saídas"
          amount={balanceData.withdrawal}
          message="Última retirada em 18 de julho"
        />
        <HighlightCard
          type="total"
          title="Total"
          amount={balanceData.total}
          message="01 à 20 de julho"
        />
      </S.HighlightCards>

      <S.Transactions>
        <S.Title>Listagem</S.Title>
        <S.TransactionList
          data={transactions}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </S.Transactions>
    </S.Container>
  )
}
