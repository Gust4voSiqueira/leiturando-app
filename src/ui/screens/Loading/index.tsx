import { ActivityIndicator, View } from 'react-native'
import { globalStyles } from '../../../../global/global'

import Logo from '../../../../assets/logo.svg'

export function Loading() {
  return (
    <View style={globalStyles.container}>
      <Logo width={280} height="25%" />
      <ActivityIndicator size="large" />
    </View>
  )
}
