import { Text, View } from 'react-native'
import { globalStyles } from '../../../../global/global'
import { ButtonNext, Header } from '../../components'

import { styles } from './styles'

import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamList } from '../../../routes/types'

import Words from '../../../../assets/words.svg'
import Shields from '../../../../assets/shield.svg'
import Jupiter from '../../../../assets/jupiter.svg'
import { useNavigation } from '@react-navigation/native'

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
}

type LobbyProps = StackScreenProps<RootStackParamList, 'Lobby'>

export function Lobby({ route }: LobbyProps) {
  const navigate = useNavigation()
  const { description, title, screen, textSpeech } = route.params as ILobby

  const image = {
    words: <Words width={500} height="25%" />,
    operations: <Shields width={500} height="25%" />,
    connectWords: <Jupiter width={300} height="20%" />,
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
            onClickFunction={() => navigate.navigate(screen)}
          />
        </View>
      </View>
    </View>
  )
}
