import React from 'react'
import { Control, Controller } from 'react-hook-form'
import { TextInputProps } from 'react-native'

import { Input } from '../Input'

import * as S from './styles'

type Props = TextInputProps & {
  control: Control
  name: string
  error?: string
}

export function InputForm({ control, name, error, ...rest }: Props) {
  return (
    <S.Wrapper>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input onChangeText={onChange} onBlur={onBlur} value={value} {...rest} />
        )}
      />
      {error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  )
}
