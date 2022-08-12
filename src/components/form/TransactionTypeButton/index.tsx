import React from 'react'
import { RectButtonProps } from 'react-native-gesture-handler'

import * as S from './styles'

type Props = RectButtonProps &
  S.WrapperProps & {
    title: string
  }

const icons = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle',
}

export function TransactionTypeButton({ title, type, isActive, ...rest }: Props) {
  return (
    <S.Wrapper isActive={isActive} type={type}>
      <S.Button {...rest}>
        <S.Icon name={icons[type]} type={type} />
        <S.Title>{title}</S.Title>
      </S.Button>
    </S.Wrapper>
  )
}
