import { Text } from 'react-native'
import { styles } from './styles'

interface IMutualFriendsPlural {
  mutualFriends: number
}

export function MutualFriends({ mutualFriends }: IMutualFriendsPlural) {
  return (
    <Text style={styles.quantitiFriendsCommon}>
      {mutualFriends === 0 || mutualFriends > 1 ? (
        <Text style={styles.quantitiFriendsCommon}>
          {mutualFriends} amigo(s) em comum
        </Text>
      ) : (
        <Text style={styles.quantitiFriendsCommon}>
          {mutualFriends} amigo em comum
        </Text>
      )}
    </Text>
  )
}
