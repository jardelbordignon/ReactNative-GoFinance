import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { ThemeProvider } from 'styled-components/native'

import { AppRoutes } from './routes/app.routes'
import { theme } from './styles/theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GestureHandlerRootView
        style={{
          flex: 1,
          backgroundColor: theme.colors.background,
        }}>
        <NavigationContainer>
          <AppRoutes />
        </NavigationContainer>
      </GestureHandlerRootView>
    </ThemeProvider>
  )
}

export default App
