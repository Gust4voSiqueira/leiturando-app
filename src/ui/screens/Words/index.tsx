import { useCallback, useEffect, useState } from 'react'
import { View } from 'react-native'

import { styles } from './styles'

import { IconsSection, WordSection } from './sections'
import { Header } from '../../components'
import { useWords } from '../../../hooks/useWords'
import { Loading } from '../Loading'
import { useNavigation } from '@react-navigation/native'
import { ResultSkeleton } from '../Result/ResultSkeleton'

import { IWordDTO } from '../../../dtos/WordDTO'
import { ButtonsGame } from '../../components/ButtonsGame'
import { handleError } from '../../../utils/isError'

export function Words() {
  const [indexWord, setIndexWord] = useState(0)
  const [isRecording, setIsRecording] = useState(false)
  const [isFinnaly, setIsFinnaly] = useState(false)
  const [voice, setVoice] = useState<string>('')
  const [responses, setResponses] = useState<string[]>([])
  const [words, setWords] = useState<IWordDTO[]>([])
  const [errorEmptyVoice, setErrorEmptyVoice] = useState(false)

  const { getWords, finallyWords } = useWords()
  const { navigate } = useNavigation()

  useEffect(() => {
    async function onGetWords() {
      try {
        const response = await getWords()

        setWords(response)
      } catch (err) {
        handleError(() => navigate('home', { isReloadRanking: false }))
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

  async function finallyGame() {
    try {
      setIsFinnaly(true)

      const responsesRequest = [...responses, voice]
      const response = await finallyWords(words, responsesRequest)

      navigate('result', {
        response: response.words,
        score: response.score,
      })
      setIsFinnaly(false)
    } catch (err) {
      handleError(() => navigate('home', { isReloadRanking: true }))
      setIsFinnaly(false)
    }
  }

  function updateWord(newIndex: number) {
    if (!voice) {
      setErrorEmptyVoice(true)
      return
    }

    setErrorEmptyVoice(false)
    setIndexWord(newIndex)
    setVoice(responses[indexWord])
    setResponses([...responses, voice])
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

      <WordSection word={responses[indexWord] || voice} isError={errorEmptyVoice} />

      <View style={styles.buttonsContainer}>
        <ButtonsGame
          finallyGame={finallyGame}
          onAlterQuestion={updateWord}
          index={indexWord}
          totalIndex={words.length}
        />
      </View>
    </View>
  )
}
