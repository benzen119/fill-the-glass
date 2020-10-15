import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { PersistedAuthProvider } from 'providers/PersistedAuthProvider'
import { App } from 'App'
import { store, persistor } from 'store'

const Root: React.FC = () => (
  <PersistedAuthProvider>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar style="dark" />
        <App />
      </PersistGate>
    </Provider>
  </PersistedAuthProvider>
)

export { Root }
