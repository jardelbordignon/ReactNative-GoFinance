import { RFValue } from 'react-native-responsive-fontsize'
import Feather from 'react-native-vector-icons/Feather'
import styled from 'styled-components/native'

import { ThemeType } from './theme'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`

export const Box = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

type TxtType = {
  font?: keyof ThemeType['fonts']
  color?: keyof ThemeType['colors']
  size?: number
}

export const Txt = styled.Text<TxtType>`
  font-family: ${props => props.theme.fonts[props.font || 'regular']};
  font-size: ${props => RFValue(props.size || 18)}px;
  color: ${props => props.theme.colors[props.color || 'shape']};
`

type IconType = {
  //name: keyof typeof Feather
  color?: keyof ThemeType['colors']
  size?: number
}

export const Icon = styled(Feather)<IconType>`
  color: ${props => props.theme.colors[props.color || 'shape']};
  font-size: ${RFValue(24)}px;
`
