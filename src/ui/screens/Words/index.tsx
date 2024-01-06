import { useCallback, useEffect, useState } from 'react'
import { Alert, View } from 'react-native'

import { styles } from './styles'

import { ButtonsSection, IconsSection, WordSection } from './sections'
import { Header } from '../../components'
import { useWords } from '../../../hooks/useWords'
import { Loading } from '../Loading'
import { useNavigation } from '@react-navigation/native'
import { ResultSkeleton } from '../Result/ResultSkeleton'

import { IWordDTO } from '../../../dtos/WordDTO'

export function Words() {
  const [indexWord, setIndexWord] = useState(0)
  const [isRecording, setIsRecording] = useState(false)
  const [isFinnaly, setIsFinnaly] = useState(false)
  const [voice, setVoice] = useState<string>('')
  const [responses, setResponses] = useState<string[]>([])
  const [words, setWords] = useState<IWordDTO[]>([])
  const [errorEmptyVoice, setErrorEmptyVoice] = useState(false)
  const [isErrorRecording, setErrorRecording] = useState(false)

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
            onPress: () => navigate('home', { isReloadRanking: false }),
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

  async function finallyGame(responsesRequest: string[]) {
    try {
      setIsFinnaly(true)

      const response = await finallyWords(words, responsesRequest)

      navigate('result', {
        response: response.words,
        score: response.score,
      })
      setIsFinnaly(false)
    } catch (err) {
      Alert.alert('Contagem de pontos', 'Falha ao contabilizar pontos.', [
        {
          text: 'Ok',
          onPress: () => navigate('home', { isReloadRanking: true }),
        },
      ])
      setIsFinnaly(false)
    }
  }

  async function onAlterWord(newWordIndex: number) {
    if (!voice) {
      setErrorEmptyVoice(true)
      return
    }

    if (isRecording) {
      setErrorRecording(true)
      return
    }

    if (newWordIndex >= 0 && newWordIndex < 7) {
      setErrorEmptyVoice(false)
      setErrorRecording(false)
      setIndexWord(newWordIndex)
    }

    setVoice(responses[indexWord])
    setResponses([...responses, voice])

    if (newWordIndex === 7) {
      const responsesRequest = [...responses, voice]

      finallyGame(responsesRequest)
    }
  }

  function handleStopGame() {
    Alert.alert(
      'Finalizar rodada',
      'Tem certeza que deseja finalizar a rodada?',
      [
        {
          text: 'Não',
          style: 'cancel',
        },
        {
          text: 'Sim, finalizar',
          style: 'destructive',
          onPress: () => navigate('home', { isReloadRanking: false }),
        },
      ],
    )
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
        isErrorRecording={isErrorRecording}
      />

      <WordSection word={voice} isError={errorEmptyVoice} />
      <ButtonsSection
        indexWord={indexWord}
        onAlterWord={onAlterWord}
        total={words.length}
        handleStopGame={handleStopGame}
      />
    </View>
  )
}
