import { styles } from './styles'

import { Box } from 'native-base'

interface ICardProps {
  children: React.ReactNode
}

export function Card({ children }: ICardProps) {
  return (
    <Box bg={'gray.700'} style={styles.container}>
      {children}
    </Box>
  )
}
