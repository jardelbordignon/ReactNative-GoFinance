import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'

import { Dashboard } from 'src/screens/Dashboard'
import { Register } from 'src/screens/Register'

const { Navigator, Screen } = createBottomTabNavigator()

export function AppRoutes() {
  return (
    <Navigator>
      <Screen name="Listagem" component={Dashboard} />
      <Screen name="Cadastrar" component={Register} />
      <Screen name="Resumo" component={Register} />
    </Navigator>
  )
}
