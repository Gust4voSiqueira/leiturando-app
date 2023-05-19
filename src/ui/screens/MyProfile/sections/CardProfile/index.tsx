/* eslint-disable jsx-a11y/alt-text */
import { Image, Text, View, Pressable } from 'react-native'

import { styles } from './styles'
import { CaretLeft, PencilSimple } from 'phosphor-react-native'
import { colors } from '../../../../../../global/themes/default'
import { useRedirect } from '../../../../../hooks/useRedirect'

interface ICardProfile {
  name: string
  image: string
}

export function CardProfile({ name, image }: ICardProfile) {
  const { onRedirect } = useRedirect()

  return (
    <View style={styles.cardProfileContainer}>
      <Pressable style={styles.iconBack} onPress={() => onRedirect('/Home')}>
        <CaretLeft size={30} weight="bold" color={colors['black-400']} />
      </Pressable>

      <Image
        style={styles.imageProfile}
        source={{
          uri: image,
        }}
      />
      <Pressable
        style={styles.iconPencil}
        onPress={() => onRedirect('/EditProfile')}
      >
        <PencilSimple size={25} color={colors['black-400']} weight="fill" />
      </Pressable>

      <Text style={styles.nameUser}>{name}</Text>

      <View style={styles.footerCardContainer}>
        <Text style={styles.textFooterCard}>MEMBRO DESDE: AGOSTO DE 2022</Text>
      </View>
    </View>
  )
}
