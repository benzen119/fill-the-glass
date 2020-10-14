import React from 'react'
import { StatusBar } from 'expo-status-bar'

import { PersistedAuthProvider } from 'providers/PersistedAuthProvider'
import { App } from 'App'

const Root: React.FC = () => (
  <PersistedAuthProvider>
    <StatusBar style="dark" />
    <App />
  </PersistedAuthProvider>
)

export { Root }
