import { Center, NativeBaseProvider } from 'native-base'
import React from 'react'

import { Dashboard } from './screens/Dashboard'
import { theme } from './styles/theme'

const ThemedContent = () => (
  <Center flex={1} _light={{ bg: 'primary.100' }} _dark={{ bg: 'primary.800' }}>
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
