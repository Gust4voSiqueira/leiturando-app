import { useWindowDimensions } from 'react-native'

export function calculateHalfScreen(widthSkeleton: number) {
  const { width } = useWindowDimensions()

  return (width - widthSkeleton) / 2
}
