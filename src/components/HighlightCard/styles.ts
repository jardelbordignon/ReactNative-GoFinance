import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

import { Txt } from 'src/styles/commons'

export type TypeProps = {
  type: 'up' | 'down' | 'total'
}

export const Wrapper = styled.View<TypeProps>`
  background-color: ${({ theme, type }) =>
    theme.colors[type === 'total' ? 'secondary' : 'shape']};
  border-radius: 5px;
  padding: 19px 24px ${RFValue(42)}px;
  margin-right: 16px;
`

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const Title = styled(Txt).attrs({
  font: 'medium',
  size: 14,
})<TypeProps>`
  color: ${({ theme, type }) =>
    theme.colors[type === 'total' ? 'shape' : 'text_dark']};
`

export const Content = styled.View``

export const Amount = styled(Txt).attrs({
  color: 'title',
  font: 'medium',
  size: 32,
})<TypeProps>`
  margin-top: 32px;
  color: ${({ theme, type }) =>
    theme.colors[type === 'total' ? 'shape' : 'text_dark']};
`

export const Message = styled(Txt).attrs({ size: 12 })<TypeProps>`
  color: ${({ theme, type }) =>
    theme.colors[type === 'total' ? 'shape' : 'text']};
`
