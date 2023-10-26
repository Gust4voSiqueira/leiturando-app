import { AppError } from './AppError'

export function validateDate(dateString: string) {
  const partsDate = dateString.split('/')

  const year = parseInt(partsDate[2], 10)
  const month = parseInt(partsDate[1], 10)
  const day = parseInt(partsDate[0], 10)

  const date = new Date(Date.UTC(year, month - 1, day))

  const today = new Date()
  const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1)

  firstDayOfMonth.setMonth(firstDayOfMonth.getMonth() + 1)

  firstDayOfMonth.setDate(firstDayOfMonth.getDate() - 1)

  const lastDayOfMonth = firstDayOfMonth.getDate()

  if (month > 12 || day > lastDayOfMonth) {
    throw new AppError('Data inválida.')
  }

  if (date > today) {
    throw new AppError('Você não pode cadastrar uma data no futuro.')
  }
}
