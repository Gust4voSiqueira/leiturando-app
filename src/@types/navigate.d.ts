export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      login: { email?: string; password?: string }
      register: undefined
      home: undefined
      lobby: {
        description: string
        title: string
        screen:
          | 'login'
          | 'register'
          | 'home'
          | 'words'
          | 'connectWords'
          | 'result'
          | 'resume'
          | 'myProfile'
          | 'editProfile'
          | 'operations'
          | 'math'
          | 'friends'
        textSpeech: string
      }
      words: undefined
      connectWords: undefined
      result: { response: IResultProps[]; score: number }
      resume: { resume: IResultProps[]; score: number }
      myProfile: undefined
      editProfile: undefined
      operations: undefined
      math: { operations: IOperations[] }
      friends: undefined
      CardMatches: { description: string }
    }
  }
}
