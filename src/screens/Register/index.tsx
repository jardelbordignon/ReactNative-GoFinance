import { useNavigation } from '@react-navigation/native'
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
import { storage } from 'src/provider'

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

const initialCategory = {
  key: 'category',
  name: 'Selecionar categoria',
  icon: '',
}

export type TransactionType = {
  id: string
  name: string
  amount: number
  transactionType: string
  category: string
  createdAt: Date
}

export function Register() {
  const [transactionType, setTransactionType] = useState('')
  const [CategoryModalOpen, setCategoryModalOpen] = useState(false)
  const [category, setCategory] = useState<CategoryType>(initialCategory)
  const { navigate } = useNavigation()

  const handleTransactionTypeSelect = (type: 'incoming' | 'withdrawal') => {
    setTransactionType(type)
  }

  useEffect(() => {
    setCategoryModalOpen(false)
  }, [category])

  useEffect(() => {
    const loadData = async () => {
      const data = await storage.get('transactions')
      console.log(data)
    }

    loadData()
  }, [])

  const { register, handleSubmit, isSubmitting, reset } = useForm<FormData>({ yupSchema })

  const onSubmit = handleSubmit(async ({ name, amount }: FormData) => {
    if (!transactionType) {
      return Alert.alert('Selecione o tipo de transação')
    }

    if (category.key === 'category') {
      return Alert.alert('Selecione a categoria')
    }

    const newTransaction = {
      id: Date.now().toString(),
      name,
      amount,
      type: transactionType,
      categoryKey: category.key,
      date: new Date(),
    }

    try {
      const currentTransactions = await storage.get('transactions')
      const transactions = currentTransactions
        ? [...currentTransactions, newTransaction]
        : [newTransaction]

      await storage.set('transactions', transactions)

      reset()
      setTransactionType('')
      setCategory(initialCategory)
      navigate('Listagem' as never)
    } catch (error) {
      console.log(error)
      Alert.alert('Não foi possível salvar')
    }
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
                type="incoming"
                onPress={() => handleTransactionTypeSelect('incoming')}
                isActive={transactionType === 'incoming'}
              />
              <TransactionTypeButton
                title="Saída"
                type="withdrawal"
                onPress={() => handleTransactionTypeSelect('withdrawal')}
                isActive={transactionType === 'withdrawal'}
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
