import React from 'react'

import { Icon } from 'src/styles/commons'

import * as S from './styles'

export function HighlightCard() {
  return (
    <S.Wrapper>
      <S.Header>
        <S.Title>Entrada</S.Title>
        <Icon name="arrow-up-circle" />
      </S.Header>

      <S.Content>
        <S.Amount>R$ 17.400,00</S.Amount>
        <S.Message>Última entrada dia 13 de abril</S.Message>
      </S.Content>
    </S.Wrapper>
  )
}
