import { SpeakerSimpleHigh } from 'phosphor-react-native'
import { Pressable, View } from 'react-native'
import { styles } from './styles'
import { colors } from '../../../../../../global/themes/default'
import { IResponses } from '../..'

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
          <Pressable style={[styles.cardAudio]} key={audio.id} />
        ) : (
          <Pressable
            style={[
              styles.cardAudio,
              selected?.word === audio.word && styles.selected,
            ]}
            key={audio.id}
            onPress={() => onSpeechAudio(audio.word, audio.id)}
          >
            <SpeakerSimpleHigh size={45} weight="fill" color={colors.white} />
          </Pressable>
        )
      })}
    </View>
  )
}
