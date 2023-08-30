import { useState } from 'react'
import { View } from 'react-native'

import { styles } from './styles'

import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamList } from '../../../routes/types'

import { Words as WordsDatabase } from '../../../database/wordsData'
import { Header } from '../../components'

type PhrasesProps = StackScreenProps<RootStackParamList, 'Result'>

export function Phrases({ navigation }: PhrasesProps) {
  const [indexWord, setIndexWord] = useState(0)
  const [isRecording, setIsRecording] = useState(false)
  const [voice, setVoice] = useState<String>('')
  const [responses, setResponses] = useState<String[]>([])

  function onRecordingVoice() {
    setIsRecording(!isRecording)
  }

  function onAlterWordVoice(newVoice: String) {
    setVoice(newVoice)
  }

  function onResponseUser(response: String, index: number) {
    if (!response) return

    setResponses([
      ...responses.slice(0, index),
      response,
      ...responses.slice(index + 1),
    ])
  }

  function onAlterWord(newWordIndex: number) {
    if (newWordIndex < 0) return

    setIndexWord(newWordIndex)
    setVoice(responses[newWordIndex])
    onResponseUser(voice, indexWord)

    if (newWordIndex > 9) {
      navigation.navigate('Result', {
        words: WordsDatabase,
        responses,
      })
    }
  }

  return (
    <View style={styles.wordsContainer}>
      <Header title="Frases" />
    </View>
  )
}
