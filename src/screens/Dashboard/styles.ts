import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

import { Txt } from 'src/styles/commons'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`

export const Header = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: ${RFPercentage(42)}px;
  background-color: ${({ theme }) => theme.colors.primary};
`

export const UserWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 24px;
`

export const UserBox = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Photo = styled.Image`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  border-radius: 10px;
`

export const UserInfo = styled.View`
  margin-left: 17px;
`

// export const Greeting = styled.Text`
//   color: ${({ theme }) => theme.colors.shape};
//   font-size: ${RFValue(18)}px;
//   font-family: ${({ theme }) => theme.fonts.bold};
// `

export const Greeting = styled(Txt).attrs({ color: 'shape' })``

export const UserName = styled(Txt).attrs({ color: 'shape', font: 'bold' })``
