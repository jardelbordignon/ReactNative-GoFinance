import React from 'react'
import { FlatList } from 'react-native'

//import { Button } from 'src/components/form'
import { categories } from 'src/utils/categories'

import * as S from './styles'

export type CategoryType = {
  key: string
  name: string
}

type Props = {
  category: CategoryType
  setCategory: (category: CategoryType) => void
  //closeModal: () => void
}

export function CategorySelect({ category, setCategory }: Props) {
  return (
    <S.Wrapper>
      <S.Header>
        <S.Name>{category.name}</S.Name>
      </S.Header>
      <FlatList
        data={categories}
        style={{ flex: 1, width: '100%' }}
        keyExtractor={item => item.key}
        renderItem={({ item }) => (
          <S.CategoryItem
            onPress={() => setCategory(item)}
            isActive={category.key === item.key}>
            <S.Icon name={item.icon} />
            <S.Name>{item.name}</S.Name>
          </S.CategoryItem>
        )}
        ItemSeparatorComponent={S.Separator}
      />
      {/* <S.Footer>
        <Button title="Selecionar" onPress={closeModal} />
      </S.Footer> */}
    </S.Wrapper>
  )
}
