import { styles } from './styles'
import { THEME } from '../../../../../../global/theme'

import { useEffect } from 'react'
import { Pressable } from 'react-native'
import { Microphone, Pause } from 'phosphor-react-native'
import Voice, { SpeechResultsEvent } from '@react-native-voice/voice'

interface IIconsSectionProps {
  isRecording: boolean
  onRecordingVoice: () => void
  stopRecordVoice: () => void
  // onAlterWordVoice: (newVoice: string) => void
}

export function IconsSection({
  isRecording,
  onRecordingVoice,
  stopRecordVoice,
  // onAlterWordVoice,
}: IIconsSectionProps) {

  // useEffect(() => {
  //   Voice.onSpeechResults = (e: SpeechResultsEvent) => {
  //     if (!e.value[0] || e.value[0] === '') return

  //     onAlterWordVoice(e.value[0])
  //   }

  //   return () => {
  //     Voice.destroy().then(Voice.removeAllListeners)
  //   }
  // }, [])

  if(isRecording) {
    return (
      <Pressable onPress={stopRecordVoice} style={styles.pressableContainer}>
        <Pause size={50} weight="regular" color={THEME.colors.white} />
    </Pressable>
    )
  }

  return (
    <Pressable onPress={onRecordingVoice} style={styles.pressableContainer}>
        <Microphone size={50} weight="regular" color={THEME.colors.white} />
    </Pressable>
  )
}
