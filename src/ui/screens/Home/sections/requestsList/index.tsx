import { ScrollView, Text, TextInput, View } from 'react-native'
import { styles } from './styles'
import { RequestCard } from './requestCard'
import { IRequestCard } from '../cardProfile'
import { useState } from 'react'
import { colors } from '../../../../../../global/themes/default'

interface IRequestList {
  requests: IRequestCard[]
}

export function RequestsList({ requests }: IRequestList) {
  const [Myrequests] = useState<IRequestCard[]>(requests)
  const [selectInput, setSelectInput] = useState(false)

  function onSelectInput() {
    setSelectInput(!selectInput)
  }

  return (
    <View style={styles.listRequestsContainer}>
      <View style={styles.indicatorIcon} />

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
        {Myrequests.map((request) => (
          <RequestCard
            key={request.id}
            name={request.name}
            uriImage={request.uriImage}
            friendsCommon={request.friendsCommon}
            typeCard={request.typeRequest}
          />
        ))}
      </ScrollView>
    </View>
  )
}

//
