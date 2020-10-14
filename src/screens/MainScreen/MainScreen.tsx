import React from 'react'
import { Text } from 'react-native'
import { Button } from 'react-native-paper'

import { usePersistedAuthContext } from 'providers/PersistedAuthProvider'

const MainScreen: React.FC = () => {
  const { signOut } = usePersistedAuthContext()

  return (
    <>
      <Text>Main</Text>
      <Button
        mode="contained"
        onPress={signOut}
      >
        Wyloguj
      </Button>
    </>
  )
}

export { MainScreen }
