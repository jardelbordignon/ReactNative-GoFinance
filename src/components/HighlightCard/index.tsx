import React from 'react'

import { Icon } from 'src/styles/commons'

import * as S from './styles'

type Props = S.TypeProps & {
  title: string
  amount: string
  message: string
}

const icon = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle',
  total: 'dollar-sign',
}

export function HighlightCard({ title, amount, message, type }: Props) {
  return (
    <S.Wrapper type={type}>
      <S.Header>
        <S.Title type={type}>{title}</S.Title>
        <Icon
          name={icon[type]}
          size={40}
          color={
            type === 'up' ? 'success' : type === 'down' ? 'attention' : 'shape'
          }
        />
      </S.Header>

      <S.Content>
        <S.Amount type={type}>{amount}</S.Amount>
        <S.Message type={type}>{message}</S.Message>
      </S.Content>
    </S.Wrapper>
  )
}
