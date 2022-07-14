import { extendTheme } from 'native-base'

export const theme = extendTheme({
  colors: {
    app: {
      primary: '#5636D3',
      secondary: '#FF872C',
      secondary_light: '#FF872C30',
      success: '#12A454',
      success_light: '#12A45450',
      attention: '#E83F5B',
      attention_ligth: '#E83F5B50',
      shape: '#FFF',
      title: '#363F5F',
      text: '#969CB2',
      bg_light: '#F0F2F5',
      bg_dark: '#1c1917',
    },
  },
  config: {
    initialColorMode: 'dark',
  },
  fontConfig: {
    Poppins: {
      400: 'Poppins-Regular',
      500: 'Poppins-Medium',
      700: 'Poppins-Bold',
    },
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
    mono: 'Poppins',
  },
})
