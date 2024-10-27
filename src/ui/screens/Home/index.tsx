import { useContext, useEffect, useState } from 'react'
import { Modal, Pressable, ScrollView, View } from 'react-native'

import { CardProfile } from './sections/CardProfile'

import { styles } from './styles'
import { WordsCard } from './sections/Words'
import { MathCard } from './sections/Math'
import { RequestsList } from './sections/RequestsList'
import { useUser } from '../../../hooks/useUser'
import { UserContext } from '../../../contexts/UserDataContext'
import { ConnectWordsCard } from './sections/ConnectWords'
import { useNavigation, useRoute } from '@react-navigation/native'

import { globalStyles } from '../../../../global/global'
import { HomeSkeleton } from './HomeSkeleton'
import { TokenContext } from '../../../contexts/TokenContext'
import { RequestsContext } from '../../../contexts/RequestsContext'
import { Loading } from '../Loading'
import { GlobalRanking } from './sections/GlobalRanking'
import { FriendsRanking } from './sections/FriendsRanking'
import { useRequests } from '../../../hooks/useRequests'
import { handleError } from '../../../utils/isError'
import { ModalComponent } from '../../components/ModalComponent'

type RouteParamsProps = {
  isReloadRanking: boolean
}

export interface IOnRedirectProps {
  title: 'Palavras' | 'Matemática' | 'Ligue as palavras'
  description: string
  screen: 'words' | 'operations' | 'connectWords'
  textSpeech: string
  score: number
}

export function Home() {
  const { myUser } = useUser()
  const { getRequests } = useRequests()
  const routes = useRoute()
  const [cardList, setCardList] = useState(false)
  const { userData, removeUserData } = useContext(UserContext)
  const { removeToken } = useContext(TokenContext)
  const { clearRequests, onLoadRequests } = useContext(RequestsContext)

  const [isLoggout, setIsLoggout] = useState(false)

  const { isReloadRanking } = routes.params as RouteParamsProps

  const { navigate } = useNavigation()

  useEffect(() => {
    async function getMyUserData() {
      try {
        await Promise.all([myUser(), onLoadRequests()])

      } catch (error) {
        handleError(removeToken)
      }
    }
    getMyUserData()
  }, [])

  function onRedirect({
    title,
    description,
    screen,
    textSpeech,
    score,
  }: IOnRedirectProps) {
    navigate('lobby', {
      title,
      description,
      screen,
      textSpeech,
      score,
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

          <ModalComponent
            isOpen={cardList}
            handleAlterStateModal={() => setCardList(!cardList)}
          >
              <View style={styles.requestsListContainer}>
                <RequestsList
                  redirectToAllRequests={redirectToAllRequests}
                  handleCloseModal={handleAlterStateCardList}
                />
            </View>
          </ModalComponent>

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
