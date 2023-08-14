/* eslint-disable jsx-a11y/alt-text */
import { Image, Pressable, Text, View } from 'react-native'
import { Card } from '../../../../components'
import { styles } from './styles'
import { profileInfo } from '../../../../../database/profileData'

import { progressActual } from '../../../../../utils/progressActual'
import { useState } from 'react'

export function CardProfile() {
  const { level, user } = profileInfo
  const [progress, setProgress] = useState(progressActual(level.actualPoints))
  const customStyles = styles({ progressActualBarProgress: progress })

  // setTimeout(() => {
  //   setProgress(progress + 2)

  //   customStyles = styles({ progressActualBarProgress: progress })
  // }, 4000)

  return (
    <Card>
      <Pressable style={customStyles.cardContainer}>
        <Image
          style={customStyles.imageProfile}
          source={{
            uri: user.image,
          }}
        />

        <Text style={customStyles.nameUser}>{user.name}</Text>

        <View style={customStyles.levelContainer}>
          <Text style={customStyles.levelText}>Nível {level.actualLevel}</Text>
          <View style={customStyles.levelTotal}>
            <View style={customStyles.progressActual}></View>
          </View>
        </View>
      </Pressable>
    </Card>
  )
}
