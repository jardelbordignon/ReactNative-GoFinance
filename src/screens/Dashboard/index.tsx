import React from 'react'

import { HighlightCard } from 'src/components/HighlightCard'
import { TransactionCard, TransactionCardProps } from 'src/components/TransactionCard'
import { Icon } from 'src/styles/commons'

import * as S from './styles'

export type DataListProps = TransactionCardProps & {
  id: string
}

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

  const data: DataListProps[] = [
    {
      id: '1',
      type: 'incoming',
      title: 'Desenvolvimento de site',
      amount: 'R$ 12.000,00',
      category: {
        icon: 'dollar-sign',
        name: 'Vendas',
      },
      date: '12/08/2022',
    },
    {
      id: '2',
      type: 'withdrawal',
      title: 'Pizzaria',
      amount: 'R$ 59,00',
      category: {
        icon: 'coffee',
        name: 'Alimentação',
      },
      date: '12/08/2022',
    },
    {
      id: '3',
      type: 'withdrawal',
      title: 'Aluguel do apartamento',
      amount: 'R$ 1.200,00',
      category: {
        icon: 'shopping-bag',
        name: 'Casa',
      },
      date: '12/08/2022',
    },
  ]

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
