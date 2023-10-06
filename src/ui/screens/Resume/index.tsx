import { View, ScrollView } from 'react-native'

import { styles } from './styles'
import { globalStyles } from '../../../../global/global'
import { ButtonNext, Header } from '../../components'
import { CardResult } from './sections/CardResult'
import { IResultProps } from '../Result'
import { useNavigation, useRoute } from '@react-navigation/native'

interface IProps {
  resume: IResultProps[]
  score: number
}

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

export function Resume() {
  const routes = useRoute()
  const { resume, score } = routes.params as IProps
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
          onPress={() => navigation.navigate('home')}
        />
        <ButtonNext text="Resultado" onPress={onRedirect} />
      </View>
    </View>
  )
}
