import { ScrollView, SafeAreaView } from 'react-native'
import { globalStyles } from '../../../../global/global'
import { CardProfile } from './sections/CardProfile'
import { CardLevelProfile } from './sections/CardLevelProfile'
import { CardInfo } from './sections/cardInfo'
import { styles } from './styles'
import { useContext } from 'react'
import { UserContext } from '../../../contexts/UserDataContext'

export function MyProfile() {
  const { userData } = useContext(UserContext)

  return (
    <SafeAreaView style={globalStyles.container}>
      <ScrollView style={styles.scrollViewContainer}>
        <CardProfile
          name={userData.name}
          image={userData.image}
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
      </ScrollView>
    </SafeAreaView>
  )
}
