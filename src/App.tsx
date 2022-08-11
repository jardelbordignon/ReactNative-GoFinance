import React from 'react'
import { ThemeProvider } from 'styled-components/native'

import { Register } from './screens/Register'
import { theme } from './styles/theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Register />
    </ThemeProvider>
  )
}

export default App
