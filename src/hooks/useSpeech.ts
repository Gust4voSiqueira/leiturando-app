import * as Speech from 'expo-speech'

export function useSpeech() {
  const speech = (text: string) => {
    Speech.speak(text, {
      language: 'pt-BR',
    })
  }

  return { speech }
}
