import { styles } from './styles'
import { useContext } from 'react'
import { View } from 'react-native'
import { CardProfile } from './sections/CardProfile'
import { CardLevelProfile } from './sections/CardLevelProfile'
import { CardInfo } from './sections/CardInfo'
import { UserContext } from '../../../contexts/UserDataContext'

export function MyProfile() {
  const { userData } = useContext(UserContext)

  return (
    <View style={styles.myProfileContainer}>
      <CardProfile
        name={userData.name}
        character={userData.image}
        createdAt={userData.createdAt}
      />
      <CardLevelProfile
        level={userData.level}
        actualPoints={userData.breakthrough}
      />

      <CardInfo
        textInfo="Total de partidas"
        numbersInfo={userData.matches.toString()}
      />
      <CardInfo
        textInfo="Acertos/Erros Totais"
        numbersInfo={`${userData.correct}/${userData.wrong}`}
      />
    </View>
  )
}
