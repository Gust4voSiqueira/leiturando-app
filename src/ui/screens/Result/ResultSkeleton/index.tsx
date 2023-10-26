import { Box, Skeleton } from 'native-base'
import { SafeAreaView } from 'react-native'
import { globalStyles } from '../../../../../global/global'
import { styles } from '../styles'

export function ResultSkeleton() {
  return (
    <SafeAreaView style={globalStyles.container}>
      <Skeleton
        w={320}
        h={155}
        marginBottom={75}
        rounded={'sm'}
        startColor={'gray.900'}
        endColor={'gray.700'}
      />

      <Box height={30} marginTop={5}>
        <Skeleton
          w={320}
          h={50}
          marginBottom={3}
          rounded={'sm'}
          startColor={'gray.900'}
          endColor={'gray.700'}
        />

        <Skeleton
          w={320}
          h={50}
          rounded={'sm'}
          startColor={'gray.900'}
          endColor={'gray.700'}
        />
      </Box>
    </SafeAreaView>
  )
}
