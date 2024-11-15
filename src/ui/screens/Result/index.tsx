import { Text, View } from 'react-native'
import { globalStyles } from '../../../../global/global'
import { ButtonNext, Header } from '../../components'
import { styles } from './styles'
import { CardProfile } from './sections/CardProfile'
import { useContext } from 'react'
import { UserContext } from '../../../contexts/UserDataContext'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Loading } from '../Loading'

export interface IResultProps {
  content: string
  correct: boolean
}

interface IProps {
  response: IResultProps[]
  score: number
}

export function Result() {
  const { navigate } = useNavigation()
  const { userData } = useContext(UserContext)
  const routes = useRoute()
  const { response, score } = routes.params as IProps

  function onRedirect() {
    navigate('resume', { resume: response, score })
  }

  if(response.length === 0) return

  const corrects = response.filter((result) => result.correct)

  return (
    <View style={globalStyles.container}>
      <View style={styles.resultContainer}>
        <Header
          title="Resultado"
          textSpeech={`Parabéns ${userData?.name}, você acertou ${corrects.length} de ${response.length}, e conquistou ${corrects.length} pontos.`}
        />

        <View style={styles.contentContainer}>
          <Text style={styles.resultText}>
            {corrects.length > 3
              ? `Parabéns, você acertou ${corrects.length}/${response.length}! 🤩`
              : `Parece que você acertou ${corrects.length}/${response.length} \n Mas não desista! 😉`}
          </Text>

          <CardProfile />

          <Text style={styles.scoreText}>+{score} pontos</Text>
        </View>

        <View style={styles.buttonsContainer}>
          <ButtonNext text="Relatório" onPress={onRedirect} />
          <ButtonNext
            text="Página Inicial"
            onPress={() => navigate('home', { isReloadRanking: true })}
          />
        </View>
      </View>
    </View>
  )
}
