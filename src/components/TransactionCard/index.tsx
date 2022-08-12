import React from 'react'

import { CategoryType } from 'src/screens/CategorySelect'
import { Icon } from 'src/styles/commons'

import * as S from './styles'

type CategoryWithoutKey = Omit<CategoryType, 'key'>

export type TransactionCardProps = {
  type: 'incoming' | 'withdrawal'
  title: string
  amount: string
  category: CategoryWithoutKey
  date: string
}

type Props = {
  data: TransactionCardProps
}

export function TransactionCard({ data }: Props) {
  const { title, amount, category, date, type } = data

  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
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
