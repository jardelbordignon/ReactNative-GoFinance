import { Center, NativeBaseProvider, useColorModeValue } from 'native-base'
import React from 'react'

import { Dashboard } from './screens/Dashboard'

const ThemedContent = () => (
  <Center flex={1} bg={useColorModeValue('warmGray.50', 'coolGray.800')}>
    <Dashboard />
  </Center>
)

const App = () => {
  return (
    <NativeBaseProvider>
      <ThemedContent />
    </NativeBaseProvider>
  )
}

export default App
