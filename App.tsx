import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'

import { PersistedAuthProvider } from 'providers/PersistedAuthProvider'
import { StackNavigator } from 'navigation/StackNavigator'

export default function App() {
  return (
    <PersistedAuthProvider>
      <NavigationContainer>
        <StackNavigator />
        <StatusBar style="auto" />
      </NavigationContainer>
    </PersistedAuthProvider>
  )
}
