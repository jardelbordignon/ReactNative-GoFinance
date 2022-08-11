import React from 'react'

import { Input } from 'src/components/form'

import * as S from './styles'

export function Register() {
  return (
    <S.Wrapper>
      <S.Header>
        <S.Title>Cadastro</S.Title>
      </S.Header>

      <S.Form>
        <Input placeholder="Nome" />
        <Input placeholder="Preço" />
      </S.Form>
    </S.Wrapper>
  )
}
