import React from 'react'

import { CategoryType } from 'src/screens/CategorySelect'
import { Icon } from 'src/styles/commons'

import * as S from './styles'

type CategoryWithoutKey = Omit<CategoryType, 'key'>

type DataType = {
  title: string
  amount: string
  category: CategoryWithoutKey
  date: string
}

type Props = {
  data: DataType
}

export function TransactionCard({ data }: Props) {
  const { title, amount, category, date } = data

  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.Amount>{amount}</S.Amount>
      <S.Footer>
        <S.Category>
          <Icon name="dollar-sign" size={20} color="text" />
          <S.FooterText>{category.name}</S.FooterText>
        </S.Category>
        <S.FooterText>{date}</S.FooterText>
      </S.Footer>
    </S.Wrapper>
  )
}
