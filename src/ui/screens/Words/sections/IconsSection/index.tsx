import { Microphone, Pause } from 'phosphor-react-native'
import { useEffect } from 'react'

import Voice, { SpeechResultsEvent } from '@react-native-voice/voice'
import { Pressable, theme } from 'native-base'

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
    <Pressable
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
    </Pressable>
  )
}
