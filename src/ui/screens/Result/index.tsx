import { Text, View } from 'react-native'
import { globalStyles } from '../../../../global/global'
import { ButtonNext, Header } from '../../components'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamList } from '../../../routes/types'
import { styles } from './styles'
import { CardProfile } from './sections/CardProfile'
import { useContext } from 'react'
import { UserContext } from '../../../contexts/UserDataContext'
import { useNavigation } from '@react-navigation/native'

type ResultProps = StackScreenProps<RootStackParamList, 'Result'>

export interface IResultProps {
  content: string
  correct: boolean
}

export function Result({ route }: ResultProps) {
  const navigation = useNavigation()
  const { userData } = useContext(UserContext)
  const { response, score } = route.params

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
            onClickFunction={() => navigation.navigate('home')}
          />
          <ButtonNext text="Relatório" onClickFunction={onRedirect} />
        </View>
      </View>
    </View>
  )
}
