import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, HelperText, Title, TextInput } from 'react-native-paper'
import { FormikProps, FormikErrors } from 'formik'


const styles = StyleSheet.create({
  container: {
    padding: 16
  },
  title: {
    marginVertical: 40,
    fontSize: 24
  },
  button: {
    marginTop: 8
  }
})

export type SignInFormValues = {
  email: string
  password: string
}

export type SignInFormStatus = {
  errors?: FormikErrors<SignInFormValues>
}

type SignInFormProps = FormikProps<SignInFormValues> & {
  status?: SignInFormStatus
}

const SignInForm: React.FC<SignInFormProps> = ({
  values: {
    email,
    password,
  },
  errors,
  touched,
  isSubmitting,
  handleChange,
  handleBlur,
  handleSubmit
}) => {

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Zaloguj się do aplikacji</Title>
      <TextInput
        label="Email"
        value={email}
        autoCapitalize="none"
        onChangeText={handleChange('email')}
        onBlur={handleBlur('email')}
      />
      <HelperText type="error">
        {!!errors.email && touched.email ? errors.email : ''}
      </HelperText>
      <TextInput
        label="Hasło"
        value={password}
        secureTextEntry
        onChangeText={handleChange('password')}
        onBlur={handleBlur('password')}
      />
      <HelperText type="error">
        {!!errors.password && touched.password ? errors.password : ''}
      </HelperText>
      <Button
        mode="contained"
        style={styles.button}
        loading={isSubmitting}
        onPress={handleSubmit}
      >
        Zaloguj
      </Button>
    </View>
  )
}

export { SignInForm }
