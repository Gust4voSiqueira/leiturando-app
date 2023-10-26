import { ScrollView, View } from 'react-native'
import { styles } from './styles'
import { Header } from '../../components'
import { FiltersSection } from './sections/Filter'
import { CardFriendsSection } from './sections/CardFriend'
import { useContext, useEffect, useState } from 'react'
import { RequestsContext } from '../../../contexts/RequestsContext'
import { useUser } from '../../../hooks/useUser'
import { RenderLists } from './renderLists'
import { Box, useToast } from 'native-base'
import { AppError } from '../../../utils/AppError'

export type filters = 'All' | 'Requests' | 'Friends'

interface IResultSearch {
  id: number
  image: string
  name: string
  mutualFriends: number
  typeCard: 'FRIEND' | 'REQUEST_SEND' | 'REQUEST_RECEIVED' | 'NO_REQUEST'
}

export function FriendsScreen() {
  const [filters, setFilters] = useState<filters>('All')
  const { requests, onLoadRequests } = useContext(RequestsContext)
  const { searchUser } = useUser()
  const [resultSearch, setResultSearch] = useState<IResultSearch[]>([])

  const toast = useToast()

  function alterFilter(newFilter: filters) {
    if (newFilter === 'All') {
      setResultSearch([])
    }
    setFilters(newFilter)
  }

  function cleanResultsSearch() {
    setResultSearch([])
  }

  async function onSearchUser(searchName: string) {
    try {
      const response = await searchUser(searchName)

      setResultSearch(response)
    } catch (error) {
      const isAppError = error instanceof AppError

      const title = isAppError
        ? error.message
        : 'Não foi possível entrar. Tente novamente mais tarde.'

      toast.show({
        title,
        placement: 'top',
        bgColor: 'red.500',
      })
    }
  }

  useEffect(() => {
    onLoadRequests()
  }, [])

  return (
    <Box bg={'gray.900'} style={styles.friendsContainer}>
      <Header title="Amigos" isRedirect />

      <FiltersSection
        alterFilter={alterFilter}
        filter={filters}
        onSearchUser={onSearchUser}
      />

      <View style={styles.scrollStyles}>
        <ScrollView
          scrollEnabled
          contentContainerStyle={{
            flexGrow: 1,
            alignItems: 'center',
          }}
          showsVerticalScrollIndicator={false}
        >
          {resultSearch.length === 0 ? (
            <RenderLists
              requests={requests}
              filters={filters}
              cleanResultsSearch={cleanResultsSearch}
            />
          ) : (
            resultSearch.map((result) => (
              <CardFriendsSection
                key={result.id}
                id={result.id}
                name={result.name}
                image={result.image}
                mutualFriends={result.mutualFriends}
                typeCard={result.typeCard}
                cleanResultsSearch={cleanResultsSearch}
              />
            ))
          )}
        </ScrollView>
      </View>
    </Box>
  )
}
