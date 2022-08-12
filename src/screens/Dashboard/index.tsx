import { useFocusEffect } from '@react-navigation/native'
import React, { useCallback, useState, useTransition } from 'react'

import { HighlightCard } from 'src/components/HighlightCard'
import { TransactionCard, TransactionCardProps } from 'src/components/TransactionCard'
import { storage } from 'src/provider'
import { Icon } from 'src/styles/commons'
import { delay } from 'src/utils/helpers'

import * as S from './styles'

export type DataListProps = TransactionCardProps & {
  id: string
}

export function Dashboard() {
  const [data, setData] = useState<DataListProps[]>([])
  const [isPending, startTransition] = useTransition()

  const loadTransactions = async () => {
    await delay(1)
    //await storage.clear('transactions')
    const transactions = await storage.get<DataListProps[]>('transactions')
    if (!transactions) return

    console.log(transactions)
    const formattedTransactions = transactions.map(item => {
      const amount = Number(item.amount).toLocaleString('pr-BR', {
        style: 'currency',
        currency: 'BRL',
      })

      const date = Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit',
      }).format(new Date(item.date))

      return { ...item, amount, date }
    })

    setData(formattedTransactions)
  }

  // useEffect(() => {
  //   startTransition(() => {
  //     loadTransactions()
  //   })
  // }, [])

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
          amount="R$ 17.200,50"
          message="Última entrada em 20 de julho"
        />
        <HighlightCard
          type="down"
          title="Saídas"
          amount="R$ 10.000,00"
          message="Última retirada em 18 de julho"
        />
        <HighlightCard
          type="total"
          title="Total"
          amount="R$ 7.200,50"
          message="01 à 20 de julho"
        />
      </S.HighlightCards>

      <S.Transactions>
        <S.Title>Listagem</S.Title>
        <S.TransactionList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </S.Transactions>
    </S.Container>
  )
}
