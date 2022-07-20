import React from 'react'

import { HighlightCard } from 'src/components/HighlightCard'
import { Icon } from 'src/styles/commons'

import * as S from './styles'

export function Dashboard() {
  return (
    <S.Container>
      <S.Header>
        <S.UserWrapper>
          <S.UserBox>
            <S.Photo
              source={{ uri: 'https://github.com/jardelbordignon.png' }}
            />
            <S.UserInfo>
              <S.Greeting>Olá</S.Greeting>
              <S.UserName>Jardel</S.UserName>
            </S.UserInfo>
          </S.UserBox>

          <Icon name="power" color="secondary" />
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
    </S.Container>
  )
}
