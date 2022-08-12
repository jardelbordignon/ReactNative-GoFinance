import React, { useEffect, useState } from 'react'
import { Alert, Keyboard, Modal, TouchableWithoutFeedback } from 'react-native'

import { CategorySelect, CategoryType } from '../CategorySelect'

import {
  Button,
  CategorySelectButton,
  InputForm,
  TransactionTypeButton,
} from 'src/components/form'
import useForm, { YupType } from 'src/hooks/useForm'

import * as S from './styles'

type FormData = {
  name: string
  amount: number
}

const yupSchema = (yup: YupType) =>
  yup.object().shape({
    name: yup.string().required(),
    amount: yup.number().positive().required(),
  })

export function Register() {
  const [transactionType, setTransactionType] = useState('')
  const [CategoryModalOpen, setCategoryModalOpen] = useState(false)
  const [category, setCategory] = useState<CategoryType>({
    key: 'category',
    name: 'Selecionar categoria',
  })

  const handleTransactionTypeSelect = (type: 'up' | 'down') => {
    setTransactionType(type)
  }

  useEffect(() => {
    setCategoryModalOpen(false)
  }, [category])

  const { register, handleSubmit, isSubmitting } = useForm<FormData>({ yupSchema })

  const onSubmit = handleSubmit(async ({ name, amount }: FormData) => {
    if (!transactionType) {
      return Alert.alert('Selecione o tipo de transação')
    }

    if (category.key === 'category') {
      return Alert.alert('Selecione a categoria')
    }

    const data = {
      name,
      amount,
      transactionType,
      category: category.key,
    }
    console.log(data)
  })

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <S.Wrapper>
        <S.Header>
          <S.Title>Cadastro</S.Title>
        </S.Header>

        <S.Form>
          <S.Fields>
            <InputForm
              {...register('name')}
              placeholder="Nome"
              autoCapitalize="sentences"
              autoCorrect={false}
            />

            <InputForm
              {...register('amount')}
              placeholder="Preço"
              keyboardType="numeric"
            />

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
          <Button title="Enviar" onPress={onSubmit} enabled={!isSubmitting} />
        </S.Form>

        <Modal visible={CategoryModalOpen} animationType="slide">
          <CategorySelect
            category={category}
            setCategory={setCategory}
            //setCategory={setCategory}
            //closeModal={() => handleSetCategoryModalOpen(false)}
          />
        </Modal>
      </S.Wrapper>
    </TouchableWithoutFeedback>
  )
}
