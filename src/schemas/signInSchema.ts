import * as yup from 'yup'

const signInSchema = yup.object().shape({
  email: yup
    .string()
    .email('Nieprawidłowy format adresu email')
    .required('Adres email jest wymagany'),
  password: yup
    .string()
    .min(8, 'Hasło jest za krótkie')
    .required('Hasło jest wymagane'),
})

export { signInSchema }
