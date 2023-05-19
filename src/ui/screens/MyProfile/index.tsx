import { ScrollView, SafeAreaView } from 'react-native'
import { globalStyles } from '../../../../global/global'
import { CardProfile } from './sections/CardProfile'
import { CardLevelProfile } from './sections/CardLevelProfile'
import { CardInfo } from './sections/cardInfo'
import { styles } from './styles'
import { MyProfileData } from '../../../database/MyProfileData'

export function MyProfile() {
  const { infoPlayer, playsInfo, level } = MyProfileData

  return (
    <SafeAreaView style={globalStyles.container}>
      <ScrollView style={styles.scrollViewContainer}>
        <CardProfile name={infoPlayer.name} image={infoPlayer.image} />
        <CardLevelProfile
          level={level.actualLevel}
          actualPoints={level.actualPoints}
          pointsTotal={level.pointsTotal}
        />

        {playsInfo.map((data) => (
          <CardInfo
            key={data.title}
            textInfo={data.title}
            numbersInfo={data.info}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}
