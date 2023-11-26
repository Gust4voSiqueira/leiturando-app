import { useContext, useEffect, useState } from 'react'
import { Alert, View } from 'react-native'

import { CardProfile } from './sections/CardProfile'

import { styles } from './styles'
import { WordsCard } from './sections/Words'
import { MathCard } from './sections/Math'
import { RequestsList } from './sections/RequestsList'
import { useUser } from '../../../hooks/useUser'
import { UserContext } from '../../../contexts/UserDataContext'
import { ConnectWordsCard } from './sections/ConnectWords'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ScrollView } from 'native-base'
import { globalStyles } from '../../../../global/global'
import { HomeSkeleton } from './HomeSkeleton'
import { TokenContext } from '../../../contexts/TokenContext'
import { RequestsContext } from '../../../contexts/RequestsContext'
import { Loading } from '../Loading'
import { GlobalRanking } from './sections/GlobalRanking'
import { FriendsRanking } from './sections/FriendsRanking'

type RouteParamsProps = {
  isReloadRanking: boolean
}

export interface IOnRedirectProps {
  title: 'Palavras' | 'Matemática' | 'Ligue as palavras'
  description: string
  screen: 'words' | 'operations' | 'connectWords'
  textSpeech: string
}

export function Home() {
  const { myUser } = useUser()
  const routes = useRoute()
  const [cardList, setCardList] = useState(false)
  const { userData, removeUserData } = useContext(UserContext)
  const { removeToken } = useContext(TokenContext)
  const { clearRequests } = useContext(RequestsContext)

  const [isLoggout, setIsLoggout] = useState(false)

  const { isReloadRanking } = routes.params as RouteParamsProps

  const { navigate } = useNavigation()

  useEffect(() => {
    async function getMyUserData() {
      try {
        clearRequests()
        await myUser()
      } catch (error) {
        Alert.alert(
          'Buscar informações',
          'Tivemos uma falha no servidor. Faça login para tentar novamente.',
          [
            {
              text: 'Ok',
              onPress: removeToken,
            },
          ],
        )
      }
    }
    getMyUserData()
  }, [])

  function onRedirect({
    title,
    description,
    screen,
    textSpeech,
  }: IOnRedirectProps) {
    navigate('lobby', {
      title,
      description,
      screen,
      textSpeech,
    })
  }

  function handleLoggout() {
    setIsLoggout(true)
    clearRequests()
    removeUserData()
    removeToken()
  }

  function redirectToAllRequests() {
    navigate('friends')
    setCardList(false)
  }

  function handleAlterStateCardList() {
    setCardList(!cardList)
  }

  if (!userData) return <HomeSkeleton />
  if (isLoggout) return <Loading />

  return (
    <View style={globalStyles.container}>
      <ScrollView
        nestedScrollEnabled={cardList}
        scrollEnabled={!cardList}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.homeContainer}>
          <CardProfile
            onCloseModalRequests={handleAlterStateCardList}
            user={userData}
            handleLoggout={handleLoggout}
          />
          {cardList && (
            <RequestsList
              redirectToAllRequests={redirectToAllRequests}
              handleCloseModal={handleAlterStateCardList}
            />
          )}
          <WordsCard onRedirectFunction={onRedirect} />
          <ConnectWordsCard onRedirectFunction={onRedirect} />
          <MathCard onRedirectFunction={onRedirect} />
          <GlobalRanking isReloadRanking={isReloadRanking} />
          <FriendsRanking isReloadRanking={isReloadRanking} />
        </View>
      </ScrollView>
    </View>
  )
}
