import { useCallback, useEffect, useState } from 'react'
import { Alert, View } from 'react-native'

import { styles } from './styles'

import { IconsSection, WordSection } from './sections'
import { Header } from '../../components'
import { useWords } from '../../../hooks/useWords'
import { Loading } from '../Loading'
import { useNavigation } from '@react-navigation/native'
import { ResultSkeleton } from '../Result/ResultSkeleton'

import { ButtonsGame } from '../../components/ButtonsGame'
import { handleError } from '../../../utils/isError'

import Voice, { SpeechResultsEvent } from '@react-native-voice/voice'

export function Words() {
  const [indexWord, setIndexWord] = useState(0)
  const [isRecording, setIsRecording] = useState(false)
  const [isFinnaly, setIsFinnaly] = useState(false)
  const [responses, setResponses] = useState<string[]>([])

  const { data, finallyWords } = useWords()
  const { navigate } = useNavigation()

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
          onPress: () => {
            setResponses([])
            setIndexWord(0)
            navigate('home', { isReloadRanking: false })
          }
        },
      ],
    )
  }

  const recordVoice = useCallback(() => {
    setIsRecording(true)
    Voice.start('pt-BR')
  }, [])

  const stopRecordVoice = useCallback(async () => {
    setIsRecording(false)
    await Voice.stop()
  }, [])

  const handleAlterWordVoice = useCallback((newVoice: string) => {
    const response = newVoice.split(" ")[0]
    setResponses(prevResponses => {
      const updatedResponses = [...prevResponses]
      updatedResponses[indexWord] = response
      return updatedResponses
    })
  }, [indexWord])

  const finallyGame = useCallback(async () => {
    try {
      if (responses.length < 6) {
        console.warn("Necessário completar ao menos 6 respostas")
        return
      }

      setIsFinnaly(true)
      const response = await finallyWords(data, responses)

      navigate('result', {
        response: response.words,
        score: response.score,
      })
    } catch (err) {
      handleError(() => navigate('home', { isReloadRanking: true }))
    } finally {
      setResponses([])
      setIndexWord(0)
      setIsFinnaly(false)
    }
  }, [responses, data, finallyWords, navigate])

  useEffect(() => {
    Voice.onSpeechResults = (e: SpeechResultsEvent) => {
      if (!e.value[0] || e.value[0] === '') return
      handleAlterWordVoice(e.value[0])
    }
    return () => {
      Voice.destroy().then(Voice.removeAllListeners)
    }
  }, [handleAlterWordVoice])

  const updateWordAndSaveVoice = useCallback(async (newIndex: number) => {
    await stopRecordVoice()
    if (!responses[indexWord]) {
      console.warn("Resposta vazia para a palavra atual.")
      return
    }
    setIndexWord(newIndex)
  }, [stopRecordVoice, responses, indexWord])

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
      />

      <WordSection word={responses[indexWord] || ''} isError={!responses[indexWord]} />

      <View style={styles.buttonsContainer}>
        <ButtonsGame
          finallyGame={finallyGame}
          onAlterQuestion={updateWordAndSaveVoice}
          index={indexWord}
          totalIndex={data.length}
          handleStopGame={handleStopGame}
        />
      </View>
    </View>
  )
}
