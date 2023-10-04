import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native'
import { styles } from './styles'
import { RequestCard } from './requestCard'
import { colors } from '../../../../../../global/themes/default'
import { useContext, useEffect, useState } from 'react'
import { RequestsContext } from '../../../../../contexts/RequestsContext'

interface IRequestsList {
  redirectToAllRequests: () => void
}

export function RequestsList({ redirectToAllRequests }: IRequestsList) {
  const [selectInput, setSelectInput] = useState(false)
  const { requests, onLoadRequests } = useContext(RequestsContext)

  useEffect(() => {
    onLoadRequests()
  }, [])

  function onSelectInput() {
    setSelectInput(!selectInput)
  }

  if (!requests) return <ActivityIndicator size="large" />

  return (
    <View style={styles.listRequestsContainer}>
      <Text style={styles.listRequestsTitle}>Solicitações</Text>

      <ScrollView
        scrollEnabled
        style={{ width: '100%' }}
        showsVerticalScrollIndicator={false}
      >
        <TextInput
          style={
            selectInput
              ? styles.inputSearchUsersSelected
              : styles.inputSearchUsers
          }
          placeholder="Buscar usuário"
          placeholderTextColor={colors['black-300']}
          onFocus={onSelectInput}
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
      <Pressable style={styles.viewAllFriends} onPress={redirectToAllRequests}>
        <Text style={styles.viewAllFriendsText}>Ver Todos</Text>
      </Pressable>
    </View>
  )
}
