import React from 'react'
import * as SecureStore from 'expo-secure-store'
import { TouchableRipple } from 'react-native-paper'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { createStackNavigator } from '@react-navigation/stack'

import { SIGN_IN_SCREEN, MAIN_SCREEN } from 'constants/screens'
import { usePersistedAuthContext } from 'providers/PersistedAuthProvider'
import { SignInScreen } from 'screens/SignInScreen/SignInScreen'
import { MainScreen } from 'screens/MainScreen/MainScreen'

const Stack = createStackNavigator()

const StackNavigator: React.FC = () => {
  const { signOut } = usePersistedAuthContext()
  const isUserSignedIn = !!SecureStore.getItemAsync('refresh_token') // workaround becaouse of the bug in the latest expo version with crasing AppLoading component

  const renderLogoutButton = () => (
    isUserSignedIn ? (
      <TouchableRipple onPress={signOut}>
        <MaterialIcon
          size={30}
          name="power"
        />
      </TouchableRipple>
    ) : null
  )

  return (
    <Stack.Navigator
      screenOptions={{
        headerRight: renderLogoutButton,
        headerRightContainerStyle: {
          paddingHorizontal: 14,
        },
      }}
    >
      {isUserSignedIn ? (
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
