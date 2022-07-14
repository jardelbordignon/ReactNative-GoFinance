import { Center, NativeBaseProvider } from 'native-base'
import React from 'react'

import { Dashboard } from './screens/Dashboard'
import { theme } from './styles/theme'

const ThemedContent = () => (
  <Center
    flex={1}
    _light={{ bg: 'app.bg_light' }}
    _dark={{ bg: 'app.bg_dark' }}>
    <Dashboard />
  </Center>
)

const App = () => {
  return (
    <NativeBaseProvider theme={theme}>
      <ThemedContent />
    </NativeBaseProvider>
  )
}

export default App
