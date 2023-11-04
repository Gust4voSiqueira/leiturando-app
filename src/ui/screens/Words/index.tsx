import { useCallback, useEffect, useState } from 'react'
import { Alert, View } from 'react-native'

import { styles } from './styles'

import { ButtonsSection, IconsSection, WordSection } from './sections'
import { Header } from '../../components'
import { useWords } from '../../../hooks/useWords'
import { Loading } from '../Loading'
import { useNavigation } from '@react-navigation/native'
import { ResultSkeleton } from '../Result/ResultSkeleton'
import { Text } from 'native-base'
import { IWordDTO } from '../../../dtos/WordDTO'

export function Words() {
  const [indexWord, setIndexWord] = useState(0)
  const [isRecording, setIsRecording] = useState(false)
  const [isFinnaly, setIsFinnaly] = useState(false)
  const [voice, setVoice] = useState<string>('')
  const [responses, setResponses] = useState<string[]>([])
  const [words, setWords] = useState<IWordDTO[]>([])
  const { getWords, finallyWords } = useWords()
  const { navigate } = useNavigation()

  useEffect(() => {
    async function onGetWords() {
      try {
        const response = await getWords()

        setWords(response)
      } catch (err) {
        Alert.alert('Busca', 'Falha ao buscar as palavras.', [
          {
            text: 'Ok',
            onPress: () => navigate('home'),
          },
        ])
      }
    }

    onGetWords()
  }, [])

  function handleRecordingVoice() {
    setIsRecording(!isRecording)
  }

  useEffect(() => {
    return () => setVoice('')
  }, [])

  const handleAlterWordVoice = useCallback((newVoice: string) => {
    if (newVoice !== '') {
      setVoice(newVoice)
    }
  }, [])

  // function handleAlterWordVoice(newVoice: string) {
  //   if (newVoice !== '') {
  //     setVoice(newVoice)
  //   }
  // }

  function onResponseUser(response: string, index: number) {
    if (!response) return

    setResponses((state) => {
      return [...state.slice(0, index), response, ...state.slice(index + 1)]
    })
  }

  async function finallyGame(lastWord: string) {
    try {
      setIsFinnaly(true)

      const result = {
        ...responses,
        lastWord,
      }

      const response = await finallyWords(words, responses)

      navigate('result', {
        response: response.words,
        score: response.score,
      })
      setIsFinnaly(false)
    } catch (err) {
      Alert.alert('Contagem de pontos', 'Falha ao contabilizar pontos.', [
        {
          text: 'Ok',
          onPress: () => navigate('home'),
        },
      ])
      setIsFinnaly(false)
    }
  }

  function onAlterWord(newWordIndex: number) {
    if (newWordIndex < 0) return

    if (newWordIndex === 7) {
      finallyGame(voice)
    } else {
      setIndexWord(newWordIndex)
      setVoice(responses[newWordIndex])
      onResponseUser(voice, indexWord)
    }
  }

  if (isFinnaly) return <ResultSkeleton />

  if (words.length === 0) return <Loading />

  return (
    <View style={styles.wordsContainer}>
      <Header title="Palavras" />

      <WordSection word={words[indexWord].word} />
      <IconsSection
        isRecording={isRecording}
        onRecordingVoice={handleRecordingVoice}
        onAlterWordVoice={handleAlterWordVoice}
      />
      <Text color={'white'}>{voice}</Text>
      {/* <WordSection word={voice} /> */}
      <ButtonsSection
        indexWord={indexWord}
        onAlterWord={onAlterWord}
        total={words.length}
      />
    </View>
  )
}
