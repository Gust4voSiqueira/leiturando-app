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
      {resume.map((result, index) => (
        <CardResult
          key={index}
          content={result.content}
          isCorrect={result.correct}
        />
      ))}
    </View>
  )
}

export function Resume({ route, navigation }: ResumeProps) {
  const { resume } = route.params
  const redirect = useRedirect()

  function onRedirect() {
    navigation.navigate('Result', { response: resume })
  }

  return (
    <View style={globalStyles.container}>
      <Header
        title="Relatório"
        isRedirect
        textSpeech="Você acertou os ítens que estão em verde, e errou os que estão em vermelho"
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
