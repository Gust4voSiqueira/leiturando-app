import { useEffect, useState } from 'react'
import { Alert, Pressable, Text, View } from 'react-native'

import { styles } from './styles'

import { Header } from '../../components'
import { useConnectWords } from '../../../hooks/useConnectWords'
import { WordsSection } from './sections/words'
import { Loading } from '../Loading'
import { AudiosSection, IAudio } from './sections/audios'
import { useSpeech } from '../../../hooks/useSpeech'
import { useNavigation } from '@react-navigation/native'
import { ButtonsGame } from '../../components/ButtonsGame'
import { handleError } from '../../../utils/isError'

type IWordsToConnect = {
  id: number
  word: string
}[]

export type IResponses = {
  idWord: number
  response: string
}

export function ConnectWords() {
  const [loading, setLoading] = useState(false)
  const [selectedAudio, setSelectedAudio] = useState<IAudio>()
  const [responses, setResponses] = useState<IResponses[]>([])
  const [data, setData] = useState<IWordsToConnect[]>([])
  const [index, setIndex] = useState(0)

  const { getWordsToConnect, finallyConnectWords } = useConnectWords()
  const { speech } = useSpeech()
  const { navigate } = useNavigation()

  function onSpeechAudio(word: string, idWord: number) {
    const selectAudio = {
      id: idWord,
      word,
    }
    setSelectedAudio(selectAudio)
    speech(word)
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

  function onSelectWord(word: string) {
    if (selectedAudio) {
      const response = {
        idWord: selectedAudio.id,
        response: word,
      }

      setResponses([...responses, response])
      setSelectedAudio(null)
    }
  }

  async function finallyGame() {
      try {
        setLoading(true)
        const data = await finallyConnectWords(responses)

        navigate('result', {
          response: data.words,
          score: data.score,
        })
        setLoading(false)
      } catch (error) {
        setLoading(false)
      }
  }

  useEffect(() => {
    const isWordsNotSelected = ![4, 8, 12].includes(responses.length)
    
    if (!isWordsNotSelected) {
      responses.length === 12 ? finallyGame() : setIndex(index + 1)
    }
  }, [responses])

  useEffect(() => {
    async function getWords() {
      try {
        const response = await getWordsToConnect()

        setData(response)
      } catch (err) {
        handleError(() => navigate('home', { isReloadRanking: false }))
      }
    }

    getWords()
  }, [])

  if (data.length === 0 || loading) return <Loading />

  return (
    <View style={styles.wordsContainer}>
      <Header title="Ligue as palavras" />

      <View style={styles.wordsAndAudioContainer}>
        <AudiosSection
          audios={data[index]}
          onSpeechAudio={onSpeechAudio}
          selected={selectedAudio}
          selectedAudios={responses}
        />

        <WordsSection
          words={data[index]}
          onSelectWord={onSelectWord}
          selectedWords={responses}
        />
      </View>

      <View style={styles.buttonsContainer}>
          <Text style={styles.indexWord}>
            {index + 1}/{data.length}
          </Text>

        <Pressable style={styles.stopButton} onPress={handleStopGame}>
          <Text style={styles.textStop}>Parar</Text>
        </Pressable>
      </View>
    </View>
  )
}
