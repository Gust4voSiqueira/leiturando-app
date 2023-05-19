import { useLinkTo } from '@react-navigation/native'

export function useRedirect() {
  const redirect = useLinkTo()

  const onRedirect = (url: string) => redirect(url)

  return { onRedirect }
}
