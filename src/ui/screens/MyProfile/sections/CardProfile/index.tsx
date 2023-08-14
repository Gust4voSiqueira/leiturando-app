/* eslint-disable jsx-a11y/alt-text */
import { Image, Text, View, Pressable } from 'react-native'

import { styles } from './styles'
import { CaretLeft, PencilSimple } from 'phosphor-react-native'
import { colors } from '../../../../../../global/themes/default'
import { useRedirect } from '../../../../../hooks/useRedirect'

function dateFormatter(date: Date) {
  const monthList = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ]

  const data = new Date(date)

  const month = monthList[data.getMonth()]
  const year = data.getFullYear()

  return `${month} de ${year}`.toUpperCase()
}

interface ICardProfile {
  name: string
  image: any
  createdAt: Date
}

export function CardProfile({ name, image, createdAt }: ICardProfile) {
  const { onRedirect } = useRedirect()

  return (
    <View style={styles.cardProfileContainer}>
      <Pressable style={styles.iconBack} onPress={() => onRedirect('/Home')}>
        <CaretLeft size={30} weight="bold" color={colors['black-400']} />
      </Pressable>

      <Image source={image} style={styles.imageProfile} />
      <Pressable
        style={styles.iconPencil}
        onPress={() => onRedirect('/EditProfile')}
      >
        <PencilSimple size={25} color={colors['black-400']} weight="fill" />
      </Pressable>

      <Text style={styles.nameUser}>{name}</Text>

      <View style={styles.footerCardContainer}>
        <Text style={styles.textFooterCard}>
          MEMBRO DESDE: {dateFormatter(createdAt)}
        </Text>
      </View>
    </View>
  )
}
