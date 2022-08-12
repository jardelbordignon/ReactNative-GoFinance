import React from 'react'

import { Icon } from 'src/styles/commons'

import * as S from './styles'

export function TransactionCard() {
  return (
    <S.Wrapper>
      <S.Title>Desenvolvimento de site</S.Title>
      <S.Amount>R$ 12.000,00</S.Amount>
      <S.Footer>
        <S.Category>
          <Icon name="dollar-sign" size={20} color="text" />
          <S.FooterText>Vendas</S.FooterText>
        </S.Category>
        <S.FooterText>12/08/2022</S.FooterText>
      </S.Footer>
    </S.Wrapper>
  )
}
