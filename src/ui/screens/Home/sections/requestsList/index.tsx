import {
  ActivityIndicator,
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

export function RequestsList() {
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
      <ScrollView scrollEnabled style={{ width: '100%' }}>
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
            imageUrl={request.urlImage}
            mutualFriends={request.mutualFriends}
            typeCard="Request"
          />
        ))}

        {requests?.requestsSend.map((request) => (
          <RequestCard
            key={request.id}
            id={request.id}
            name={request.name}
            imageUrl={request.urlImage}
            mutualFriends={request.mutualFriends}
            typeCard="SubmittedRequest"
          />
        ))}

        {requests?.usersRecommended.map((user) => (
          <RequestCard
            key={user.id}
            id={user.id}
            name={user.name}
            imageUrl={user.urlImage}
            mutualFriends={user.mutualFriends}
            typeCard="Recommended Friend"
          />
        ))}
      </ScrollView>
    </View>
  )
}

//
