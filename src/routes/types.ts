export type RootStackParamList = {
  CardMatches: { description: string }
  Lobby: {
    description: string
    title: string
    screen: string
    textSpeech: string
  }
  Result: { words: String[]; responses: String[] }
  Resume: { words: String[]; responses: String[] }
}
