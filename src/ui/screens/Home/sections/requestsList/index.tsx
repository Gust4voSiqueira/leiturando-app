import {
  ActivityIndicator,
  ScrollView,
  Text,
  TextInput,
  View,
  Pressable,
} from 'react-native'
import { RequestCard } from './RequestCard'
import { useContext } from 'react'
import { RequestsContext } from '../../../../../contexts/RequestsContext'
import { styles } from './styles'
import { X } from 'phosphor-react-native'
import { THEME } from '../../../../../../global/theme'

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
      <View style={styles.listRequestsContainer}>
        <Pressable
          style={styles.buttonCloseRequests}
          onPress={handleCloseModal}
        >
          <X color={'gray'} />
        </Pressable>
        <Text style={styles.listRequestsTitle}>Solicitações</Text>
        <View style={styles.listRequestsCard}>
          <ActivityIndicator size="large" color={'white'} />
          <Text style={styles.textSearching}>Buscando</Text>
        </View>
      </View>
    )

  return (
    <View style={styles.listRequestsContainer}>
      <Pressable style={styles.buttonCloseRequests} onPress={handleCloseModal}>
        <X color={'gray'} />
      </Pressable>
      <Text style={styles.listRequestsTitle}>Solicitações</Text>

      <ScrollView
        scrollEnabled
        style={{ width: '100%', marginBottom: 20 }}
        showsVerticalScrollIndicator={false}
      >
        <TextInput
          style={styles.input}
          placeholder="Buscar usuário"
          placeholderTextColor={THEME.colors.gray['300']}
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
      <Pressable style={styles.viewAllFriends} onPress={redirectToAllRequests}>
        <Text style={styles.viewAllFriendsText}>Ver Todos</Text>
      </Pressable>
    </View>
  )
}
