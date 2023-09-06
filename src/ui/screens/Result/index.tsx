import { Text, View } from 'react-native'
import { globalStyles } from '../../../../global/global'
import { ButtonNext, Header } from '../../components'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamList } from '../../../routes/types'
import { styles } from './styles'
import { CardProfile } from './sections/CardProfile'
import { useRedirect } from '../../../hooks/useRedirect'

type ResultProps = StackScreenProps<RootStackParamList, 'Result'>

export interface IResultProps {
  content: string
  correct: boolean
}

export function Result({ route, navigation }: ResultProps) {
  const redirect = useRedirect()
  const { response } = route.params

  function onRedirect() {
    navigation.navigate('Resume', { resume: response })
  }

  const corrects = response.filter((result) => result.correct)

  return (
    <View style={globalStyles.container}>
      <View style={styles.resultContainer}>
        <Header
          title="Resultado"
          textSpeech={`Parabéns, você acertou ${corrects.length} de ${
            response.length
          }, e conquistou ${corrects.length * 2} pontos.`}
        />

        <View style={styles.contentContainer}>
          <Text style={styles.resultText}>
            {corrects.length > 3
              ? `Parabéns, você acertou ${corrects.length}/${response.length}! 🤩`
              : `Parece que você acertou ${corrects.length}/${response.length} \n Mas não desista! 😉`}
          </Text>

          <CardProfile />

          <Text style={styles.scoreText}>+{corrects.length * 2} pontos</Text>
        </View>

        <View style={styles.buttonsContainer}>
          <ButtonNext
            text="Página Inicial"
            onClickFunction={() => redirect.onRedirect('/Home')}
          />
          <ButtonNext text="Relatório" onClickFunction={onRedirect} />
        </View>
      </View>
    </View>
  )
}
