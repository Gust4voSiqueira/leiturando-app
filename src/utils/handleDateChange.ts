export const handleDateChange = (newValue: string) => {
  const sDate = newValue.replace(/\//g, '')

  if (sDate.length <= 8) {
    return sDate.replace(/(\d{2})(\d{2})(\d{4})/, '$1/$2/$3')
  }
}
