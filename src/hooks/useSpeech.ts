import * as Speech from 'expo-speech'
import Toast from 'react-native-toast-message'

export function useSpeech() {
  const speech = async (text: string) => {
    try {
      const voices = await Speech.getAvailableVoicesAsync()
      const voicesBr = voices.find((voice) => voice.language === 'pt-BR')

      if (!voicesBr) {
        Toast.show({
          type: 'error',
          text1: 'Falha',
          text2:
            'Nenhuma voz selecionada. Vá até configurações e faça o download da voz que deseja.',
        })

        return
      }

      Speech.speak(text, {
        language: 'pt-BR',
      })
    } catch (error) {}
  }

  return { speech }
}
