import { Box, Button, Center, Image, Text, useColorMode } from 'native-base'
import React from 'react'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import Faether from 'react-native-vector-icons/Feather'

export const Dashboard = () => {
  const { toggleColorMode } = useColorMode()

  return (
    <Box flex={1} w="100%">
      {/* Heander */}
      <Center height={RFPercentage(42)} bg="app.primary" p={17}>
        {/* User */}
        <Box w="100%" flexDir="row">
          <Image
            src={'https://github.com/jardelbordignon.png'}
            alt={'Jardel'}
            size={RFValue(48)}
            borderRadius={10}
          />
          <Box ml={17}>
            <Text color="app.shape" fontWeight={'medium'}>
              Olá,
            </Text>
            <Text color="app.shape" fontWeight={'bold'}>
              Jardel
            </Text>
          </Box>
        </Box>

        <Faether name="power" size={RFValue(48)} color="red" />
      </Center>

      <Button onPress={toggleColorMode}>Toggle</Button>
    </Box>
  )
}
