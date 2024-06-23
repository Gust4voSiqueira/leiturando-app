import { ActivityIndicator, ScrollView } from 'react-native'
import { RequestCard } from './RequestCard'
import { useContext } from 'react'
import { RequestsContext } from '../../../../../contexts/RequestsContext'
import { Box, Center, Input, Pressable, Text, theme } from 'native-base'
import { styles } from './styles'
import { X } from 'phosphor-react-native'

interface IRequestsList {
  redirectToAllRequests: () => void
  handleCloseModal: () => void
}

export function RequestsList({
  redirectToAllRequests,
  handleCloseModal,
}: IRequestsList) {
  const { requests } = useContext(RequestsContext)

  if (!requests.requests)
    return (
      <Box bg={'gray.500'} width={200} style={styles.listRequestsContainer}>
        <Pressable style={styles.buttonCloseRequests} onPress={handleCloseModal}>
          <X color={'gray'} />
        </Pressable>
        <Text style={styles.listRequestsTitle}>Solicitações</Text>
        <Center height={'90%'} justifyContent={'center'} alignItems={'center'}>
          <ActivityIndicator size="large" color={'white'} />
          <Text color={'white'} mt={2}>
            Buscando
          </Text>
        </Center>
      </Box>
    )

  return (
    <Box bg={'gray.500'} width={200} style={styles.listRequestsContainer}>
      <Pressable style={styles.buttonCloseRequests} onPress={handleCloseModal}>
        <X color={'gray'} />
      </Pressable>
      <Text style={styles.listRequestsTitle}>Solicitações</Text>

      <ScrollView
        scrollEnabled
        style={{ width: '100%', marginBottom: 20 }}
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
        {requests.requests?.map((request) => (
          <RequestCard
            id={request.id}
            key={request.id}
            name={request.name}
            image={request.image}
            mutualFriends={request.mutualFriends}
            typeCard="Request"
            handleCloseModal={handleCloseModal}
          />
        ))}

        {requests.requestsSend?.map((request) => (
          <RequestCard
            key={request.id}
            id={request.id}
            name={request.name}
            image={request.image}
            mutualFriends={request.mutualFriends}
            typeCard="SubmittedRequest"
            handleCloseModal={handleCloseModal}
          />
        ))}

        {requests.usersRecommended?.map((user) => (
          <RequestCard
            key={user.id}
            id={user.id}
            name={user.name}
            image={user.image}
            mutualFriends={user.mutualFriends}
            typeCard="Recommended Friend"
            handleCloseModal={handleCloseModal}
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
