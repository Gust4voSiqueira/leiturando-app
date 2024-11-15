export const convertData = (date: string) => {
  const data = date.split('/')
  const day = data[0]
  const month = data[1]
  const year = data[2]

  return year + '-' + month + '-' + day + 'T00:00'
}
