import { Microphone, Pause } from 'phosphor-react-native'
import { Pressable } from 'react-native'
import { colors } from '../../../../../../global/themes/default'
import { styles } from './styles'
import { useCallback } from 'react'
import { useFocusEffect } from '@react-navigation/native'

import Voice from '@react-native-voice/voice'

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

  useFocusEffect(
    useCallback(() => {
      Voice.onSpeechResults = (e) => {
        if (!e.value[0]) return

        onAlterWordVoice(e.value[0])
      }
    }, []),
  )

  return (
    <Pressable style={styles.microphoneIconContainer} onPress={recordVoice}>
      {isRecording ? (
        <Pause size={50} weight="regular" color={colors.white} />
      ) : (
        <Microphone size={50} weight="regular" color={colors.white} />
      )}
    </Pressable>
  )
}
