import { IOperations } from '../hooks/useMath'
import { IResultProps } from '../ui/screens/Result'

export type RootStackParamList = {
  Login: { email?: string; password?: string }
  CardMatches: { description: string }
  Lobby: {
    description: string
    title: string
    screen: string
    textSpeech: string
  }
  Result: { response: IResultProps[] }
  Resume: { resume: IResultProps[] }
  Math: { operations: IOperations[] }
}
