import { ActivityIndicator, ScrollView, Text } from 'react-native'
import { styles } from './styles'
import { RequestCard } from './requestCard'
import { useContext, useEffect } from 'react'
import { RequestsContext } from '../../../../../contexts/RequestsContext'
import { Box, Input, Pressable, theme } from 'native-base'

interface IRequestsList {
  redirectToAllRequests: () => void
}

export function RequestsList({ redirectToAllRequests }: IRequestsList) {
  const { requests, onLoadRequests } = useContext(RequestsContext)

  useEffect(() => {
    onLoadRequests()
  }, [])

  if (!requests) return <ActivityIndicator size="large" />

  return (
    <Box bg={'gray.500'} style={styles.listRequestsContainer}>
      <Text style={styles.listRequestsTitle}>Solicitações</Text>

      <ScrollView
        scrollEnabled
        style={{ width: '100%' }}
        showsVerticalScrollIndicator={false}
      >
        <Input
          bg={'gray.700'}
          borderWidth={0}
          color={'white'}
          _focus={{
            borderWidth: 1,
            borderColor: 'green.600',
            bg: 'gray.700',
          }}
          placeholder="Buscar usuário"
          placeholderTextColor={theme.colors.gray[300]}
        />
        {requests?.requests.map((request) => (
          <RequestCard
            key={request.id}
            id={request.id}
            name={request.name}
            image={request.image}
            mutualFriends={request.mutualFriends}
            typeCard="Request"
          />
        ))}

        {requests?.requestsSend.map((request) => (
          <RequestCard
            key={request.id}
            id={request.id}
            name={request.name}
            image={request.image}
            mutualFriends={request.mutualFriends}
            typeCard="SubmittedRequest"
          />
        ))}

        {requests?.usersRecommended.map((user) => (
          <RequestCard
            key={user.id}
            id={user.id}
            name={user.name}
            image={user.image}
            mutualFriends={user.mutualFriends}
            typeCard="Recommended Friend"
          />
        ))}
      </ScrollView>
      <Pressable
        bg={'gray.500'}
        style={styles.viewAllFriends}
        onPress={redirectToAllRequests}
      >
        <Text style={styles.viewAllFriendsText}>Ver Todos</Text>
      </Pressable>
    </Box>
  )
}
