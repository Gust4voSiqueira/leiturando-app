import { Text, View } from 'react-native'
import { styles } from './styles'
import { progressActual } from '../../../../../utils/progressActual'
import { Box } from 'native-base'

interface ICardLevelProfile {
  level: number
  actualPoints: number
}

export function CardLevelProfile({ level, actualPoints }: ICardLevelProfile) {
  const progressActualBarProgress = progressActual(actualPoints)

  const customStyles = styles({ progressActualBarProgress })

  return (
    <Box bg={'gray.700'} style={customStyles.levelProfileContainer}>
      <Text style={customStyles.yourLevelText}>Seu nível</Text>
      <View style={customStyles.barLevelProfileContainer}>
        <Text style={customStyles.levelProfileText}>Nível {level}</Text>
        <View style={customStyles.levelTotal}>
          <View style={customStyles.progressActual}></View>
        </View>
      </View>
    </Box>
  )
}
