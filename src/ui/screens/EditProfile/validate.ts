export type FieldsEditProfile = 'name' | 'email' | 'dateOfBirth'

export const validateInputs = (field: FieldsEditProfile, inputs: any) => {
  const { name, email, dateOfBirth } = inputs

  const fields = {
    characterName: true,
    name: name.length === 0 || (name.length > 2 && name.length < 10),
    email: email.length === 0 || email.length > 10,
    dateOfBirth: dateOfBirth.length === 0 || dateOfBirth.length === 10,
  }

  return fields[field]
}

export const onErrorInput = (field: String, error: FieldsEditProfile[]) =>
  error.some((error) => error === field)
