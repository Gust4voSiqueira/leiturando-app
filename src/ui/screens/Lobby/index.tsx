import { Text, View } from 'react-native'
import { globalStyles } from '../../../../global/global'
import { ButtonNext, Header } from '../../components'

import { styles } from './styles'

import Words from '../../../../assets/words.svg'
import Shields from '../../../../assets/shield.svg'
import Jupiter from '../../../../assets/jupiter.svg'
import { useNavigation, useRoute } from '@react-navigation/native'

interface ILobby {
  description: string
  title: string
  screen:
    | 'login'
    | 'register'
    | 'home'
    | 'words'
    | 'connectWords'
    | 'result'
    | 'resume'
    | 'myProfile'
    | 'editProfile'
    | 'operations'
    | 'math'
    | 'friends'
  textSpeech: string
  score: number
}

export function Lobby() {
  const routes = useRoute()
  const { navigate } = useNavigation()
  const { description, title, screen, textSpeech, score } =
    routes.params as ILobby

  const image = {
    words: <Words width={500} height="25%" />,
    operations: <Shields width={500} height="25%" />,
    connectWords: <Jupiter width={300} height="20%" />,
  }

  function handleRedirect() {
    navigate(screen)
  }

  return (
    <View style={globalStyles.container}>
      <View style={styles.lobbyContainer}>
        <Header title={title} isRedirect textSpeech={textSpeech} />
        {image[screen]}

        <View style={styles.textLobbyContainer}>
          <Text style={styles.textLobby}>{description}</Text>
          <Text style={styles.textLobby}>
            Cada resposta correta equivale á{' '}
            {score > 1 ? `${score} pontos` : `${score} ponto`}
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <ButtonNext text="Começar" onPress={handleRedirect} />
        </View>
      </View>
    </View>
  )
}
