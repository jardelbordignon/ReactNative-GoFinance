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

      <HighlightCard />
    </S.Container>
  )
}
