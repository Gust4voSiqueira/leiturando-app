import { SpeakerSimpleHigh } from 'phosphor-react-native'
import { Pressable, View } from 'react-native'
import { styles } from './styles'
import { IResponses } from '../..'
import { THEME } from '../../../../../../global/theme'

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
          <Pressable key={audio.id} style={[styles.cardAudio]} />
        ) : (
          <Pressable
            key={audio.id}
            style={[
              styles.cardAudio,
              selected?.word === audio.word && styles.selected,
            ]}
            onPress={() => onSpeechAudio(audio.word, audio.id)}
          >
            <SpeakerSimpleHigh
              size={45}
              weight="fill"
              color={THEME.colors.white}
            />
          </Pressable>
        )
      })}
    </View>
  )
}
