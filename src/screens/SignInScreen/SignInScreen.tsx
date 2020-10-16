import React, { useState } from 'react'
import { Snackbar } from 'react-native-paper'
import { useFormik } from 'formik'

import { usePersistedAuthContext } from 'providers/PersistedAuthProvider'
import { SignInForm, SignInFormValues } from './SignInForm'
import { signInSchema } from 'schemas/signInSchema'
import { Firebase } from 'config/firebase'

const SignInScreen: React.FC = () => {
  const [isSnackbarVisible, setIsSnackbarVisible] = useState(false)
  const { setTokens } = usePersistedAuthContext()

  const formikProps = useFormik<SignInFormValues>({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: signInSchema,
    onSubmit: async ({ email, password }, { setSubmitting }) => {
      try {
        const { user } = await Firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          setTokens({
            refreshToken: user?.refreshToken,
          })
        setSubmitting(false)
      } catch (err) {
        setSubmitting(false)
        setIsSnackbarVisible(true)
      }
    }
  })
  
  return (
    <>
      <SignInForm {...formikProps} />
      <Snackbar
        visible={isSnackbarVisible}
        onDismiss={() => setIsSnackbarVisible(false)}
        action={{
          label: 'OK',
          onPress: () => {},
        }}>
        Błędne dane logowania
      </Snackbar>
    </>
  )
}

export { SignInScreen }
