import { View, ScrollView } from 'react-native'

import { styles } from './styles'
import { globalStyles } from '../../../../global/global'
import { ButtonNext, Header } from '../../components'
import { CardResult } from './sections/CardResult'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamList } from '../../../routes/types'
import { useRedirect } from '../../../hooks/useRedirect'

type ResumeProps = StackScreenProps<RootStackParamList, 'Resume'>

interface IHandleCards {
  words: String[]
  corrects: String[]
}

function HandleCards({ words, corrects }: IHandleCards) {
  return (
    <View>
      {words.map((word, index) => {
        const isCorrectFunction = word === corrects[index]

        return (
          <CardResult key={index} word={word} isCorrect={isCorrectFunction} />
        )
      })}
    </View>
  )
}

export function Resume({ route, navigation }: ResumeProps) {
  const { words, responses } = route.params
  const incorrects = words.filter((word) => responses.indexOf(word) === -1)
  const redirect = useRedirect()

  function onRedirect() {
    navigation.navigate('Result', { words, responses })
  }

  return (
    <View style={globalStyles.container}>
      <Header
        title="Relatório"
        isRedirect
        textSpeech={`
        Você acertou as palavras 
        ${responses.map((correct) => correct)},
        e errou as palavras 
        ${incorrects.map((incorrect) => incorrect)}`}
      />

      <ScrollView style={styles.scrollViewResume}>
        <View style={styles.resumeContainer}>
          <HandleCards corrects={responses} words={words} />
        </View>
      </ScrollView>

      <View style={styles.buttonsContainer}>
        <ButtonNext
          text="Página Inicial"
          onClickFunction={() => redirect.onRedirect('/Home')}
        />
        <ButtonNext text="Resultado" onClickFunction={onRedirect} />
      </View>
    </View>
  )
}
