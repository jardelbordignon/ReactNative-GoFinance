import React from 'react'

import { Icon } from 'src/styles/commons'
import { categories } from 'src/utils/categories'

import * as S from './styles'

export type TransactionCardProps = {
  type: 'incoming' | 'withdrawal'
  name: string
  amount: string
  categoryKey: string
  date: string
}

type Props = {
  data: TransactionCardProps
}

export function TransactionCard({ data }: Props) {
  const { name, amount, categoryKey, date, type } = data
  const category = categories.find(item => item.key === categoryKey)
  if (!category) return

  return (
    <S.Wrapper>
      <S.Title>{name}</S.Title>
      <S.Amount type={type}>
        {type === 'withdrawal' && '- '}
        {amount}
      </S.Amount>
      <S.Footer>
        <S.Category>
          <Icon name={category.icon} size={20} color="text" />
          <S.FooterText>{category.name}</S.FooterText>
        </S.Category>
        <S.FooterText>{date}</S.FooterText>
      </S.Footer>
    </S.Wrapper>
  )
}
