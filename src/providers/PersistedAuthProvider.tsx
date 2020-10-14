import React, { useMemo, createContext, useRef, useCallback, useContext, useState, useEffect } from 'react'
import * as SecureStore from 'expo-secure-store'

type AuthTokens = {
  refreshToken: string | null | undefined
}

interface PersistedAuthContext {
  setTokens: (tokens: AuthTokens) => Promise<void>
  getTokens: () => Promise<AuthTokens>,
  signOut: () => Promise<void>
  authState: 'loading' | 'userSignedIn' | 'userSignedOut'
}

const PersistedAuthContext = createContext<PersistedAuthContext | null>(null)

const usePersistedAuthContext = (): PersistedAuthContext => {
  const contextValue = useContext(PersistedAuthContext)

  return contextValue
}

const PersistedAuthProvider: React.FC = ({ children }) => {
  const tokens = useRef<AuthTokens | null>(null)
  const [authState, setAuthState] = useState('loading' as 'loading' | 'userSignedIn' | 'userSignedOut')

  const getTokens = useCallback(
    async () => {
      if (tokens.current) {
        return tokens.current
      }

      const [ refreshToken] = await Promise.all([
        await SecureStore.getItemAsync('refresh_token')
      ])

      tokens.current = {
        refreshToken
      }

      return tokens.current
    },
    []
  )

  const setTokens = useCallback(
    async ({
      refreshToken
    }: AuthTokens) => {
      tokens.current = {
        refreshToken
      }

      await Promise.all([
        refreshToken
          ? await SecureStore.setItemAsync('refresh_token', refreshToken)
          : await SecureStore.deleteItemAsync('refresh_token'),
      ]).then(() => setAuthState('userSignedIn'))
    },
    []
  )

  const signOut = useCallback(
    async () => {
      await setTokens({
        refreshToken: null,
      })
      setAuthState('userSignedOut')
    },
    [setTokens]
  )

  const contextValue = useMemo(() => ({
    setTokens,
    getTokens,
    signOut,
    authState
  }), [setTokens, getTokens, signOut, authState])

  useEffect(() => {
    const getTokensAtStartAsync = async () => {
      const startTokens = await getTokens()
      if ( startTokens.refreshToken) {
        setAuthState('userSignedIn')
      }
    }
    getTokensAtStartAsync()
  }, [getTokens])

  return (
    <PersistedAuthContext.Provider value={contextValue}>
      {children}
    </PersistedAuthContext.Provider>
  )
}

export {
  PersistedAuthContext,
  PersistedAuthProvider,
  usePersistedAuthContext,
}
