import React from 'react'
import { TouchableOpacityProps } from 'react-native'

import * as S from './styles'

type Props = TouchableOpacityProps & {
  title: string
}

export function Button({ title, ...rest }: Props) {
  return (
    <S.Wrapper {...rest}>
      <S.Title>{title}</S.Title>
    </S.Wrapper>
  )
}
