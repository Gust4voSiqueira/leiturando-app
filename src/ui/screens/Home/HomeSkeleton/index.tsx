import { Box, Skeleton } from 'native-base'
import { SafeAreaView } from 'react-native'
import { globalStyles } from '../../../../../global/global'
import { styles } from '../styles'

export function HomeSkeleton() {
  return (
    <SafeAreaView style={globalStyles.container}>
      <Box style={styles.homeContainer} mt={24}>
        <Skeleton
          w={320}
          h={200}
          marginBottom={5}
          rounded={'sm'}
          startColor={'gray.900'}
          endColor={'gray.700'}
        />

        <Skeleton
          width={320}
          height={200}
          rounded={'sm'}
          marginBottom={5}
          startColor={'gray.900'}
          endColor={'gray.700'}
        />

        <Skeleton
          width={320}
          height={200}
          rounded={'sm'}
          marginBottom={5}
          startColor={'gray.900'}
          endColor={'gray.700'}
        />

        <Skeleton
          width={320}
          height={200}
          rounded={'sm'}
          marginBottom={5}
          startColor={'gray.900'}
          endColor={'gray.700'}
        />
      </Box>
    </SafeAreaView>
  )
}
