import { useCallback, useState } from 'react'
import { View } from 'react-native'

import { styles } from './styles'

import { IconsSection, WordSection } from './sections'
import { Header } from '../../components'
import { useWords } from '../../../hooks/useWords'
import { Loading } from '../Loading'
import { useNavigation } from '@react-navigation/native'
import { ResultSkeleton } from '../Result/ResultSkeleton'

import { ButtonsGame } from '../../components/ButtonsGame'
import { handleError } from '../../../utils/isError'

import Voice from '@react-native-voice/voice'

export function Words() {
  const [indexWord, setIndexWord] = useState(0)
  const [isRecording, setIsRecording] = useState(false)
  const [isFinnaly, setIsFinnaly] = useState(false)
  const [voice, setVoice] = useState<string>('')
  const [responses, setResponses] = useState<string[]>([])
  const [errorEmptyVoice, setErrorEmptyVoice] = useState(false)

  const { data, finallyWords } = useWords()
  const { navigate } = useNavigation()

  async function recordVoice() {
    setIsRecording(true)
    Voice.start('pt-BR')
  }

  async function stopRecordVoice() {
    setIsRecording(false)
    Voice.stop()
  }

  const handleAlterWordVoice = useCallback((newVoice: string) => {
    if (newVoice !== '') {
      setVoice(newVoice.split(" ")[0])
    }
  }, [])

  async function finallyGame() {
    try {
      if (!voice && !responses[indexWord]) {
        setErrorEmptyVoice(true)
        return
      }

      setIsFinnaly(true)

      const responsesRequest = [...responses, voice]
      const response = await finallyWords(data, responsesRequest)

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
    stopRecordVoice()

    if (!voice && !responses[indexWord]) {
      setErrorEmptyVoice(true)
      return
    } else if(newIndex > responses.length) {
      setIsRecording(false)
      setResponses([...responses, voice])
      setVoice("")
    }

    setErrorEmptyVoice(false)
    setIndexWord(newIndex)
  }

  if (isFinnaly) return <ResultSkeleton />

  if (data.length === 0) return <Loading />

  return (
    <View style={styles.wordsContainer}>
      <Header title="Palavras" />

      <WordSection word={data[indexWord].word} />
      <IconsSection
        isRecording={isRecording}
        onRecordingVoice={recordVoice}
        stopRecordVoice={stopRecordVoice}
        onAlterWordVoice={handleAlterWordVoice}
      />

      <WordSection word={responses[indexWord] || voice} isError={errorEmptyVoice} />

      <View style={styles.buttonsContainer}>
        <ButtonsGame
          finallyGame={finallyGame}
          onAlterQuestion={updateWord}
          index={indexWord}
          totalIndex={data.length}
        />
      </View>
    </View>
  )
}
