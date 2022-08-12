import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

type TransactionCardStyleProps = {
  type: 'incoming' | 'withdrawal'
}

export const Wrapper = styled.View`
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 5px;
  padding: 16px 24px;
  margin-bottom: 16px;
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  margin-bottom: 16px;
`

export const Amount = styled.Text<TransactionCardStyleProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(20)}px;
  color: ${({ theme, type }) =>
    theme.colors[type === 'incoming' ? 'success' : 'attention']};
`

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 19px;
`

export const Category = styled.View`
  flex-direction: row;
  align-items: center;
`

export const FooterText = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text};
  margin-left: 8px;
`
