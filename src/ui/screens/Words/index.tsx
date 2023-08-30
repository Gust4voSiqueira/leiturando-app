/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { View } from 'react-native'

import { styles } from './styles'

import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamList } from '../../../routes/types'

import { ButtonsSection, IconsSection, WordSection } from './sections'
import { Header } from '../../components'
import { useWords } from '../../../hooks/useWords'
import { Loading } from '../Loading'

export interface IWord {
  id: number
  word: string
}

type WordsProps = StackScreenProps<RootStackParamList, 'Result'>

export function Words({ navigation }: WordsProps) {
  const [indexWord, setIndexWord] = useState(0)
  const [isRecording, setIsRecording] = useState(false)
  const [voice, setVoice] = useState<String>('')
  const [responses, setResponses] = useState<String[]>([])
  const [words, setWords] = useState<IWord[]>([])
  const { getWords, finallyWords } = useWords()

  useEffect(() => {
    async function onGetWords() {
      try {
        const response = await getWords()

        setWords(response)
      } catch (err) {
        console.log(err)
      }
    }

    onGetWords()
  }, [])

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

  async function finallyGame() {
    try {
      const response = await finallyWords(words, responses)

      navigation.navigate('Result', {
        response,
      })
    } catch (err) {
      console.log(err)
    }
  }

  function onAlterWord(newWordIndex: number) {
    if (newWordIndex < 0) return

    setIndexWord(newWordIndex)
    setVoice(responses[newWordIndex])
    onResponseUser(voice, indexWord)

    if (newWordIndex === 7) finallyGame()
  }

  if (words.length === 0 || indexWord === 7) return <Loading />

  return (
    <View style={styles.wordsContainer}>
      <Header title="Palavras" />

      <WordSection word={words[indexWord].word} />
      <IconsSection
        isRecording={isRecording}
        onRecordingVoice={onRecordingVoice}
        onAlterWordVoice={onAlterWordVoice}
      />
      <WordSection word={voice} />
      <ButtonsSection
        indexWord={indexWord}
        onAlterWord={onAlterWord}
        total={words.length}
      />
    </View>
  )
}
