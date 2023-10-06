import { SpeakerSimpleHigh } from 'phosphor-react-native'
import { View } from 'react-native'
import { styles } from './styles'
import { IResponses } from '../..'
import { Button, theme } from 'native-base'

export type IAudio = {
  id: number
  word: string
}

interface IAudioSection {
  audios: {
    id: number
    word: string
  }[]
  onSpeechAudio: (audio: string, idWord: number) => void
  selected: IAudio
  selectedAudios: IResponses[]
}

export function AudiosSection({
  audios,
  onSpeechAudio,
  selected,
  selectedAudios,
}: IAudioSection) {
  function isSelectedAudio(idAudio: number) {
    return selectedAudios.find((selected) => selected.idWord === idAudio)
  }

  return (
    <View>
      {audios.map((audio) => {
        return isSelectedAudio(audio.id) ? (
          <Button
            bg={'gray.700'}
            _pressed={{
              bg: 'gray.700',
            }}
            style={[styles.cardAudio]}
            key={audio.id}
          />
        ) : (
          <Button
            bg={'gray.700'}
            _pressed={{
              bg: 'gray.700',
            }}
            style={[
              styles.cardAudio,
              selected?.word === audio.word && styles.selected,
            ]}
            key={audio.id}
            onPress={() => onSpeechAudio(audio.word, audio.id)}
          >
            <SpeakerSimpleHigh
              size={45}
              weight="fill"
              color={theme.colors.white}
            />
          </Button>
        )
      })}
    </View>
  )
}
