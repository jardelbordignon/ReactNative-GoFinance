import React from 'react'
import { ThemeProvider } from 'styled-components/native'

import { CategorySelect } from './screens/CategorySelect'
import { theme } from './styles/theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CategorySelect />
    </ThemeProvider>
  )
}

export default App
