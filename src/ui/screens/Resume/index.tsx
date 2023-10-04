import { View, ScrollView } from 'react-native'

import { styles } from './styles'
import { globalStyles } from '../../../../global/global'
import { ButtonNext, Header } from '../../components'
import { CardResult } from './sections/CardResult'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamList } from '../../../routes/types'
import { IResultProps } from '../Result'
import { useNavigation } from '@react-navigation/native'

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

export function Resume({ route }: ResumeProps) {
  const { resume, score } = route.params
  const navigation = useNavigation()

  function onRedirect() {
    navigation.navigate('result', { response: resume, score })
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
          onClickFunction={() => navigation.navigate('home')}
        />
        <ButtonNext text="Resultado" onClickFunction={onRedirect} />
      </View>
    </View>
  )
}
