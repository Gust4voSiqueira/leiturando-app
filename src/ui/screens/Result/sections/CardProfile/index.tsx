import { Pressable, Text, View } from 'react-native'
import { Card } from '../../../../components'
import { styles } from './styles'

import { progressActual } from '../../../../../utils/ProgressActual'
import { useContext } from 'react'
import { UserContext } from '../../../../../contexts/UserDataContext'

export function CardProfile() {
  const { userData } = useContext(UserContext)
  const progress = progressActual(userData.breakthrough)
  const customStyles = styles({ progressActualBarProgress: progress })

  return (
    <Card>
      <Pressable style={customStyles.cardContainer}>
        {userData.image}

        <Text style={customStyles.nameUser}>{userData.name}</Text>

        <View style={customStyles.levelContainer}>
          <Text style={customStyles.levelText}>Nível {userData.level}</Text>
          <View style={customStyles.levelTotal}>
            <View style={customStyles.progressActual}></View>
          </View>
        </View>
      </Pressable>
    </Card>
  )
}
