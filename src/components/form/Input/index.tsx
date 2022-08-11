import React from 'react'
import { TextInputProps } from 'react-native'

import { RNTextInput } from './styles'

export function Input({ ...rest }: TextInputProps) {
  return <RNTextInput {...rest} />
}
