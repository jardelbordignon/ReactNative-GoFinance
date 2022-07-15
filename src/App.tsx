import React from 'react'
import { ThemeProvider } from 'styled-components/native'

import { Dashboard } from './screens/Dashboard'
import { theme } from './styles/theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
  )
}

export default App
