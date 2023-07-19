import { ScrollView, Text, TextInput, View } from 'react-native'
import { styles } from './styles'
import { RequestCard } from './requestCard'
import { useState } from 'react'
import { colors } from '../../../../../../global/themes/default'

interface IRequests {
  id: number
  urlImage: string
  name: string
  mutualFriends: number
}

interface IRecommendedFriends {
  id: number
  name: string
  urlImage: string
  mutualFriends: number
}

interface IRequestList {
  requests: IRequests[]
  requestsSend: IRequests[]
  recommended: IRecommendedFriends[]
  onRemoveRequest: (idUser: number) => void
  onAcceptRequest: (idUser: number) => void
}

export function RequestsList({
  requests,
  recommended,
  requestsSend,
  onRemoveRequest,
  onAcceptRequest,
}: IRequestList) {
  const [selectInput, setSelectInput] = useState(false)

  function onSelectInput() {
    setSelectInput(!selectInput)
  }

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
        {requests?.map((request, index) => (
          <RequestCard
            key={index}
            id={request.id}
            name={request.name}
            imageUrl={request.urlImage}
            mutualFriends={request.mutualFriends}
            typeCard="Request"
            onRemoveRequest={onRemoveRequest}
            onAcceptRequest={onAcceptRequest}
          />
        ))}

        {requestsSend.map((request, index) => (
          <RequestCard
            key={index}
            id={request.id}
            name={request.name}
            imageUrl={request.urlImage}
            mutualFriends={request.mutualFriends}
            typeCard="SubmittedRequest"
          />
        ))}

        {recommended.map((user, index) => (
          <RequestCard
            key={index}
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
