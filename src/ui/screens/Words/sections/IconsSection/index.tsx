import { styles } from './styles'
import { THEME } from '../../../../../../global/theme'

import { useEffect } from 'react'
import { Pressable } from 'react-native'
import { Microphone, Pause } from 'phosphor-react-native'
import Voice, { SpeechResultsEvent } from '@react-native-voice/voice'

interface IIconsSectionProps {
  isRecording: boolean
  onRecordingVoice: () => void
  onAlterWordVoice: (newVoice: string) => void
}

export function IconsSection({
  isRecording,
  onRecordingVoice,
  onAlterWordVoice,
}: IIconsSectionProps) {
  async function recordVoice() {
    if (await Voice.isRecognizing()) {
      Voice.stop()

      onRecordingVoice()
    } else {
      onRecordingVoice()
      Voice.start('pt-BR')
    }
  }

  useEffect(() => {
    Voice.onSpeechResults = (e: SpeechResultsEvent) => {
      if (!e.value[0] || e.value[0] === '') return

      onAlterWordVoice(e.value[0])
    }

    return () => {
      Voice.destroy().then(Voice.removeAllListeners)
    }
  }, [])

  return (
    <Pressable onPress={recordVoice} style={styles.pressableContainer}>
      {isRecording ? (
        <Pause size={50} weight="regular" color={THEME.colors.white} />
      ) : (
        <Microphone size={50} weight="regular" color={THEME.colors.white} />
      )}
    </Pressable>
  )
}
