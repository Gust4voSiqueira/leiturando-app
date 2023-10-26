import { CardProfile } from './sections/CardProfile'
import { CardLevelProfile } from './sections/CardLevelProfile'
import { CardInfo } from './sections/cardInfo'
import { useContext } from 'react'
import { UserContext } from '../../../contexts/UserDataContext'
import { Box } from 'native-base'

export function MyProfile() {
  const { userData } = useContext(UserContext)

  return (
    <Box flex={1} bgColor={'gray.900'} alignItems={'center'} pt={20}>
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
    </Box>
  )
}
