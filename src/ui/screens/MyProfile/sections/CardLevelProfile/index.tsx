import { Text, View } from 'react-native'
import { styles } from './styles'
import { progressActual } from '../../../../../utils/progressActual'

interface ICardLevelProfile {
  level: number
  actualPoints: number
  pointsTotal: number
}

export function CardLevelProfile({
  level,
  actualPoints,
  pointsTotal,
}: ICardLevelProfile) {
  const progressActualBarProgress = progressActual(actualPoints, pointsTotal)

  const customStyles = styles({ progressActualBarProgress })

  return (
    <View style={customStyles.levelProfileContainer}>
      <Text style={customStyles.yourLevelText}>Seu nível</Text>
      <View style={customStyles.barLevelProfileContainer}>
        <Text style={customStyles.levelProfileText}>Nível {level}</Text>
        <View style={customStyles.levelTotal}>
          <View style={customStyles.progressActual}></View>
        </View>
      </View>
    </View>
  )
}
