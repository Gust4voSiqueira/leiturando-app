import { Text, View } from 'react-native'
import { globalStyles } from '../../../../global/global'
import { ButtonNext, Header } from '../../components'
import { styles } from './styles'
import { CardProfile } from './sections/CardProfile'
import { useContext } from 'react'
import { UserContext } from '../../../contexts/UserDataContext'
import { useNavigation, useRoute } from '@react-navigation/native'

export interface IResultProps {
  content: string
  correct: boolean
}

interface IProps {
  response: IResultProps[]
  score: number
}

export function Result() {
  const navigation = useNavigation()
  const { userData } = useContext(UserContext)
  const routes = useRoute()
  const { response, score } = routes.params as IProps

  function onRedirect() {
    navigation.navigate('resume', { resume: response, score })
  }

  const corrects = response.filter((result) => result.correct)

  return (
    <View style={globalStyles.container}>
      <View style={styles.resultContainer}>
        <Header
          title="Resultado"
          textSpeech={`Parabéns ${userData.name}, você acertou ${
            corrects.length
          } de ${response.length}, e conquistou ${corrects.length * 2} pontos.`}
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
          <ButtonNext
            text="Página Inicial"
            onPress={() => navigation.navigate('home')}
          />
          <ButtonNext text="Relatório" onPress={onRedirect} />
        </View>
      </View>
    </View>
  )
}
