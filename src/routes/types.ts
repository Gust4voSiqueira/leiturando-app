export type RootStackParamList = {
  CardMatches: { description: string }
  Lobby: {
    description: string
    title: string
    screen: string
    textSpeech: string
  }
  Result: { words: string[]; corrects: string[] }
  Resume: { words: string[]; corrects: string[] }
}
