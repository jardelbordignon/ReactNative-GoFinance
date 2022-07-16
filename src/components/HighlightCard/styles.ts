import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

import { Txt } from 'src/styles/commons'

export const Wrapper = styled.View`
  background-color: ${({ theme }) => theme.colors.shape};
  width: ${RFValue(300)}px;
  border-radius: 5px;
  padding: 19px 24px ${RFValue(42)}px;
  margin-right: 16px;
`

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const Title = styled(Txt).attrs({
  color: 'title',
  font: 'medium',
  size: 14,
})``

export const Content = styled.View``

export const Amount = styled(Txt).attrs({
  color: 'title',
  font: 'medium',
  size: 32,
})`
  margin-top: 32px;
`

export const Message = styled(Txt).attrs({ size: 12 })``
