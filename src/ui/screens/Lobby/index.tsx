import React from 'react'
import { Text, View } from 'react-native'
import { globalStyles } from '../../../../global/global'
import { ButtonNext, Header } from '../../components'

import { styles } from './styles'

import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamList } from '../../../routes/types'

import Words from '../../../../assets/words2.svg'
import Shields from '../../../../assets/shield.svg'
import { useRedirect } from '../../../hooks/useRedirect'

type LobbyProps = StackScreenProps<RootStackParamList, 'Lobby'>

export function Lobby({ route }: LobbyProps) {
  const { onRedirect } = useRedirect()
  const { description, title, screen, textSpeech } = route.params

  const image = {
    Words: <Words style={styles.imageLobby} width={500} height="25%" />,
    Shields: <Shields style={styles.imageLobby} width={500} height="25%" />,
  }

  return (
    <View style={globalStyles.container}>
      <View style={styles.LobbyContainer}>
        <Header title={title} isRedirect textSpeech={textSpeech} />
        {image[screen]}

        <Text style={styles.textLobby}>{description}</Text>

        <View style={styles.buttonContainer}>
          <ButtonNext
            text="Começar"
            onClickFunction={() => onRedirect(`/${screen}`)}
          />
        </View>
      </View>
    </View>
  )
}
