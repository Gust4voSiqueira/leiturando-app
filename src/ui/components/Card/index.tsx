import { View } from 'react-native'
import { styles } from './styles'

interface ICardProps {
  children: React.ReactNode
}

export function Card({ children }: ICardProps) {
  return <View style={styles.container}>{children}</View>
}
