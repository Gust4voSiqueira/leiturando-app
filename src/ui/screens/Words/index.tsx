import { useState } from 'react'
import { View } from 'react-native'

import { styles } from './styles'

import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamList } from '../../../routes/types'

import { Words as WordsDatabase } from '../../../database/wordsData'
import { ButtonsSection, IconsSection, WordSection } from './sections'
import { Header } from '../../components'

type WordsProps = StackScreenProps<RootStackParamList, 'Result'>

export function Words({ navigation }: WordsProps) {
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

    console.log(responses)
  }

  function onAlterWord(newWordIndex: number) {
    if (newWordIndex < 0) return

    setIndexWord(newWordIndex)
    setVoice(responses[newWordIndex])
    onResponseUser(voice, indexWord)
  }

  return (
    <View style={styles.wordsContainer}>
      <Header title="Palavras" />

      <WordSection word={WordsDatabase[indexWord]} />
      <IconsSection
        isRecording={isRecording}
        onRecordingVoice={onRecordingVoice}
        onAlterWordVoice={onAlterWordVoice}
      />
      <WordSection word={voice} />
      <ButtonsSection indexWord={indexWord} onAlterWord={onAlterWord} />
    </View>
  )
}
