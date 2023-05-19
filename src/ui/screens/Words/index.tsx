import { Text, View } from 'react-native'
import { ButtonNext, Header } from '../../components'
import { Microphone } from 'phosphor-react-native'
import { colors } from '../../../../global/themes/default'
import { styles } from './styles'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamList } from '../../../routes/types'

import { Words as WordsDatabase } from '../../../database/wordsData'

type WordsProps = StackScreenProps<RootStackParamList, 'Result'>

export function Words({ navigation }: WordsProps) {
  const words = WordsDatabase
  const corrects = ['Telefone', 'Carro', 'Escola']

  function onRedirect() {
    navigation.navigate('Result', { words, corrects })
  }

  return (
    <View style={styles.wordsContainer}>
      <Header title="Palavras" />

      <View style={styles.wordTextContainer}>
        <Text style={styles.wordText}>Mão</Text>
      </View>

      <View style={styles.microphoneIconContainer}>
        <Microphone size={65} weight="regular" color={colors.white} />
      </View>

      <View style={styles.buttonNextContainer}>
        <ButtonNext text="Avançar" onClickFunction={onRedirect} />
      </View>
    </View>
  )
}
