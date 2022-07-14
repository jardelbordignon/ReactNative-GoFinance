import { Button, Center, Text, useColorMode } from 'native-base'
import React from 'react'

export const Dashboard = () => {
  const { toggleColorMode } = useColorMode()

  return (
    <Center>
      <Text fontSize={24} fontWeight="bold">
        Dashboard
      </Text>
      <Button onPress={toggleColorMode}>Toggle</Button>
    </Center>
  )
}
