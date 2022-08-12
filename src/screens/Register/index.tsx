import React, { useEffect, useState } from 'react'
import { Modal } from 'react-native'

import { CategorySelect, CategoryType } from '../CategorySelect'

import {
  Button,
  CategorySelectButton,
  Input,
  TransactionTypeButton,
} from 'src/components/form'

import * as S from './styles'

export function Register() {
  const [transactionType, setTransactionType] = useState('')
  const [CategoryModalOpen, setCategoryModalOpen] = useState(false)
  const [category, setCategory] = useState<CategoryType>({
    key: 'category',
    name: 'Categoria',
  })

  const handleTransactionTypeSelect = (type: 'up' | 'down') => {
    setTransactionType(type)
  }

  useEffect(() => {
    setCategoryModalOpen(false)
  }, [category])

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
          <CategorySelectButton
            title={category.name}
            onPress={() => setCategoryModalOpen(true)}
          />
        </S.Fields>
        <Button title="Enviar" />
      </S.Form>

      <Modal visible={CategoryModalOpen}>
        <CategorySelect
          category={category}
          setCategory={setCategory}
          //setCategory={setCategory}
          //closeModal={() => handleSetCategoryModalOpen(false)}
        />
      </Modal>
    </S.Wrapper>
  )
}
