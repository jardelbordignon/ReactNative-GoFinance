import React from 'react'

import * as S from './styles'

type Props = {
  title: string
  onPress: () => void
}

export function CategorySelectButton({ title, onPress }: Props) {
  return (
    <S.Wrapper onPress={onPress}>
      <S.Title>{title}</S.Title>
      <S.Icon name="chevron-down" />
    </S.Wrapper>
  )
}
