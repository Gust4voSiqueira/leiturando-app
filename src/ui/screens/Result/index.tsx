import { Text, View } from 'react-native'
import { globalStyles } from '../../../../global/global'
import { ButtonNext, Header } from '../../components'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamList } from '../../../routes/types'
import { styles } from './styles'
import { CardProfile } from './sections/CardProfile'
import { useRedirect } from '../../../hooks/useRedirect'

type ResultProps = StackScreenProps<RootStackParamList, 'Result'>

export function Result({ route, navigation }: ResultProps) {
  const redirect = useRedirect()
  const { words, corrects } = route.params

  function onRedirect() {
    navigation.navigate('Resume', { words, corrects })
  }

  return (
    <View style={globalStyles.container}>
      <View style={styles.resultContainer}>
        <Header
          title="Resultado"
          textSpeech={`Parabéns, você acertou ${corrects.length} de 10, e conquistou ${corrects.length} pontos.`}
        />

        <View style={styles.contentContainer}>
          <Text style={styles.resultText}>
            Parabéns, você acertou {corrects.length}/10! 🤩
          </Text>

          <CardProfile />

          <Text style={styles.scoreText}>+{corrects.length} pontos</Text>
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
