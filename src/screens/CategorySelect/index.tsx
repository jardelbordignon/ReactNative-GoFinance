import React from 'react'
import { FlatList } from 'react-native'

import { Button } from 'src/components/form'
import { categories } from 'src/utils/categories'

import * as S from './styles'

type CategoryType = {
  key: string
  name: string
}

type Props = {
  category?: string
  setCategory?: (category: CategoryType) => void
  closeModal?: () => void
}

export function CategorySelect({ category, setCategory, closeModal }: Props) {
  return (
    <S.Wrapper>
      <S.Header>
        <S.Name>Categoria</S.Name>
      </S.Header>
      <FlatList
        data={categories}
        style={{ flex: 1, width: '100%' }}
        keyExtractor={item => item.key}
        renderItem={({ item }) => (
          <S.CategoryItem>
            <S.Icon name={item.icon} />
            <S.Name>{item.name}</S.Name>
          </S.CategoryItem>
        )}
        ItemSeparatorComponent={S.Separator}
      />
      <S.Footer>
        <Button title="Selecionar" />
      </S.Footer>
    </S.Wrapper>
  )
}
