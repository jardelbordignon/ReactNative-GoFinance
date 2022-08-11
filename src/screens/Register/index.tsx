import React, { useState } from 'react'

import {
  Button,
  CategorySelectButton,
  Input,
  TransactionTypeButton,
} from 'src/components/form'

import * as S from './styles'

export function Register() {
  const [transactionType, setTransactionType] = useState('')

  const handleTransactionTypeSelect = (type: 'up' | 'down') => {
    setTransactionType(type)
  }

  return (
    <S.Wrapper>
      <S.Header>
        <S.Title>Cadastro</S.Title>
      </S.Header>

      <S.Form>
        <S.Fields>
          <Input placeholder="Nome" />
          <Input placeholder="Preço" />
          <S.TransactionButtons>
            <TransactionTypeButton
              title="Entrada"
              type="up"
              onPress={() => handleTransactionTypeSelect('up')}
              isActive={transactionType === 'up'}
            />
            <TransactionTypeButton
              title="Saída"
              type="down"
              onPress={() => handleTransactionTypeSelect('down')}
              isActive={transactionType === 'down'}
            />
          </S.TransactionButtons>
          <CategorySelectButton title="Categorias" />
        </S.Fields>
        <Button title="Enviar" />
      </S.Form>
    </S.Wrapper>
  )
}
