import { Microphone, Pause } from 'phosphor-react-native'
import { useCallback } from 'react'
import { useFocusEffect } from '@react-navigation/native'

import Voice from '@react-native-voice/voice'
import { Button, theme } from 'native-base'

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
    <Button
      bg={'gray.700'}
      padding={15}
      marginY={10}
      borderRadius={'full'}
      onPress={recordVoice}
    >
      {isRecording ? (
        <Pause size={50} weight="regular" color={theme.colors.white} />
      ) : (
        <Microphone size={50} weight="regular" color={theme.colors.white} />
      )}
    </Button>
  )
}
