import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { AsyncStorage } from 'react-native'
import { combineReducers } from 'redux'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist'

import drinkReducer from './drink/index'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const reducers = combineReducers({
  drink: drinkReducer,
})

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  })
})

const persistor = persistStore(store)

export {
  store,
  persistor,
}
