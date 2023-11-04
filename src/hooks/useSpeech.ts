import * as Speech from 'expo-speech'

export function useSpeech() {
  const speech = (text: string) => {
    try {
      Speech.speak(text, {
        language: 'pt-BR',
      })
    } catch (error) {
      return error
    }
  }

  return { speech }
}
