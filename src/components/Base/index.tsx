import React from 'react'

import * as S from './styles'

type Props = {
  title: string
}

export function Base({ title }: Props) {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
    </S.Wrapper>
  )
}
