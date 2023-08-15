export type FieldsRegisterNewUser =
  | 'name'
  | 'email'
  | 'password'
  | 'confirmPassword'
  | 'dateOfBirth'

export const validateInputs = (field: FieldsRegisterNewUser, inputs: any) => {
  const { name, email, password, confirmPassword, dateOfBirth } = inputs

  const fields = {
    name: name.length > 2 && name.length < 10,
    email: email.length > 10,
    password: password.length > 5 && password.length < 15,
    confirmPassword:
      confirmPassword.length > 5 &&
      confirmPassword.length < 15 &&
      confirmPassword === password,
    dateOfBirth: dateOfBirth.length === 10,
  }

  return fields[field]
}

export const onErrorInput = (field: String, error: FieldsRegisterNewUser[]) =>
  error.some((error) => error === field)
