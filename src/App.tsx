import { NativeBaseProvider } from 'native-base'
import React from 'react'

import { Dashboard } from './screens/Dashboard'

const App = () => {
  return (
    <NativeBaseProvider>
      <Dashboard />
    </NativeBaseProvider>
  )
}

export default App
