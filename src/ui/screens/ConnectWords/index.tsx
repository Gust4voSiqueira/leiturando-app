import { useEffect, useState } from 'react'
import { View } from 'react-native'

import { styles } from './styles'

import { Header } from '../../components'
import { ButtonsSection } from './sections/buttons'
import { useConnectWords } from '../../../hooks/useConnectWords'
import { WordsSection } from './sections/words'
import { Loading } from '../Loading'
import { AudiosSection, IAudio } from './sections/audios'
import { useSpeech } from '../../../hooks/useSpeech'
import { useNavigation } from '@react-navigation/native'

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
  const { speech } = useSpeech()
  const [data, setData] = useState<IWordsToConnect[]>([])
  const [index, setIndex] = useState(0)
  const { getWordsToConnect, finallyConnectWords } = useConnectWords()
  const navigation = useNavigation()

  useEffect(() => {
    async function getWords() {
      try {
        const response = await getWordsToConnect()

        setData(response)
      } catch (err) {
        console.log(err)
      }
    }

    getWords()
  }, [])

  function onSpeechAudio(word: string, idWord: number) {
    const selectAudio = {
      id: idWord,
      word,
    }
    setSelectedAudio(selectAudio)
    speech(word)
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

  async function onAlterIndex(newIndex: number) {
    if (newIndex === 5) {
      try {
        setLoading(true)
        const response = await finallyConnectWords(responses)

        navigation.navigate('result', {
          response: response.words,
          score: response.score,
        })
        setLoading(false)
      } catch (error) {
        setLoading(false)
        console.log(error)
      }
    } else if (newIndex >= 0) {
      setIndex(newIndex)
    }
  }

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

      <ButtonsSection
        nextIndexFunction={onAlterIndex}
        index={index}
        totalIndex={data.length}
      />
    </View>
  )
}
