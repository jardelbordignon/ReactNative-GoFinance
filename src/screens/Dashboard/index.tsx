import React from 'react'

import * as S from './styles'

export const Dashboard = () => {
  return (
    <S.Container>
      <S.Header>
        <S.UserWrapper>
          <S.UserBox>
            <S.Photo
              source={{ uri: 'https://github.com/jardelbordignon.png' }}
            />
            <S.UserInfo>
              <S.Txt>Olá</S.Txt>
              <S.TxtName>Jardel</S.TxtName>
            </S.UserInfo>
          </S.UserBox>
        </S.UserWrapper>
      </S.Header>
    </S.Container>
  )
}
