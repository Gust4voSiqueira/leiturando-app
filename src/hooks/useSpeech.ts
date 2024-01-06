import * as Speech from 'expo-speech'
import { useToast } from 'native-base'

export function useSpeech() {
  const toast = useToast()

  const speech = async (text: string) => {
    try {
      const voices = await Speech.getAvailableVoicesAsync()
      const voicesBr = voices.find((voice) => voice.language === 'pt-BR')

      if (!voicesBr) {
        toast.show({
          title:
            'Nenhuma voz selecionada. Vá até configurações e faça o download da voz que deseja.',
          placement: 'top',
          bgColor: 'red.500',
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
