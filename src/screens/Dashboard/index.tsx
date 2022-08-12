import React, { useDeferredValue, useState, useTransition } from 'react'

import { HighlightCard } from 'src/components/HighlightCard'
import { TransactionCard } from 'src/components/TransactionCard'
import { Icon } from 'src/styles/commons'

import * as S from './styles'

// type DataListProps = TransactionCardProps

export function Dashboard() {
  // const [cartItems, setCartItems] = useState<CartItemType[]>([])
  // const countCartItems = useDeferredValue(cartItems.length)
  // const [isPending, startTransition] = useTransition()

  // useEffect(() => {
  //   startTransition(() => {
  //     const items = localStorage.getItem('cartItems')
  //     if (items) setCartItems(JSON.parse(items))
  //   })
  // }, [])

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
        <TransactionCard />
      </S.Transactions>
    </S.Container>
  )
}
