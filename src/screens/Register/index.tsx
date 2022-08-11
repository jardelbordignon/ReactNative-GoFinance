import React from 'react'

import { Button, Input } from 'src/components/form'

import * as S from './styles'

export function Register() {
  return (
    <S.Wrapper>
      <S.Header>
        <S.Title>Cadastro</S.Title>
      </S.Header>

      <S.Form>
        <S.Fields>
          <Input placeholder="Nome" />
          <Input placeholder="Preço" />
        </S.Fields>
        <Button title="Enviar" />
      </S.Form>
    </S.Wrapper>
  )
}
