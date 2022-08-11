import { TouchableOpacity } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import Feather from 'react-native-vector-icons/Feather'
import styled, { css } from 'styled-components/native'

export type WrapperProps = IconProps & {
  isActive: boolean
}

type IconProps = {
  type: 'up' | 'down'
}

export const Wrapper = styled(TouchableOpacity)<WrapperProps>`
  width: 48%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 16px;
  margin-bottom: 8px;

  border: 1.5px solid ${({ theme }) => theme.colors.text};
  border-radius: 5px;

  ${({ theme, isActive, type }) =>
    isActive &&
    css`
      background-color: ${theme.colors[
        type === 'up' ? 'success_light' : 'attention_light'
      ]};
      border: none;
    `}
`

export const Icon = styled(Feather)<IconProps>`
  font-size: ${RFValue(24)}px;
  margin-right: 12px;
  color: ${({ theme, type }) => theme.colors[type === 'up' ? 'success' : 'attention']};
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text_dark};
`
