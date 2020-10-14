import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { SIGN_IN_SCREEN, MAIN_SCREEN } from 'constants/screens'
import { usePersistedAuthContext } from 'providers/PersistedAuthProvider'
import { SignInScreen } from 'screens/SignInScreen/SignInScreen'
import { MainScreen } from 'screens/MainScreen/MainScreen'

const Stack = createStackNavigator()

const StackNavigator: React.FC = () => {
  const { authState } = usePersistedAuthContext()

  return (
    <Stack.Navigator>
      {authState === 'userSignedIn' ? (
        <Stack.Screen
          name={MAIN_SCREEN}
          component={MainScreen}
        />
      ) : (
        <Stack.Screen
          name={SIGN_IN_SCREEN}
          component={SignInScreen}
        />
      )}

    </Stack.Navigator>
  )
}

export { StackNavigator }
