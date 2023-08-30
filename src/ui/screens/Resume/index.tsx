import { View, ScrollView } from 'react-native'

import { styles } from './styles'
import { globalStyles } from '../../../../global/global'
import { ButtonNext, Header } from '../../components'
import { CardResult } from './sections/CardResult'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamList } from '../../../routes/types'
import { useRedirect } from '../../../hooks/useRedirect'
import { IResultProps } from '../Result'

type ResumeProps = StackScreenProps<RootStackParamList, 'Resume'>

interface IHandleCards {
  resume: IResultProps[]
}

function HandleCards({ resume }: IHandleCards) {
  return (
    <View>
      {resume.map((word, index) => (
        <CardResult key={index} word={word.word} isCorrect={word.correct} />
      ))}
    </View>
  )
}

export function Resume({ route, navigation }: ResumeProps) {
  const { resume } = route.params
  const redirect = useRedirect()

  const incorrects = resume.filter((word) => !word.correct)
  const corrects = resume.filter((word) => word.correct)

  function onRedirect() {
    navigation.navigate('Result', { response: resume })
  }

  return (
    <View style={globalStyles.container}>
      <Header
        title="Relatório"
        isRedirect
        textSpeech={`
        Você acertou as palavras 
        ${corrects.map((correct) => correct)},
        e errou as palavras 
        ${incorrects.map((incorrect) => incorrect)}`}
      />

      <ScrollView style={styles.scrollViewResume}>
        <View style={styles.resumeContainer}>
          <HandleCards resume={resume} />
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
