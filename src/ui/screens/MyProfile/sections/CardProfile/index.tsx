/* eslint-disable jsx-a11y/alt-text */
import { Text, View, Pressable } from 'react-native'

import { styles } from './styles'
import { CaretLeft, PencilSimple } from 'phosphor-react-native'

import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Box, theme } from 'native-base'

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
  character: React.JSX.Element
  createdAt: Date
}

export function CardProfile({ name, character, createdAt }: ICardProfile) {
  const { navigate } = useNavigation()

  return (
    <Box bg={'gray.700'} style={styles.cardProfileContainer}>
      <Pressable style={styles.iconBack} onPress={() => navigate('home')}>
        <CaretLeft size={30} weight="bold" color={theme.colors.gray[400]} />
      </Pressable>

      {character}
      <Pressable
        style={styles.iconPencil}
        onPress={() => navigate('editProfile')}
      >
        <PencilSimple size={25} color={theme.colors.gray[400]} weight="fill" />
      </Pressable>

      <Text style={styles.nameUser}>{name}</Text>

      <View style={styles.footerCardContainer}>
        <Text style={styles.textFooterCard}>
          MEMBRO DESDE: {dateFormatter(createdAt)}
        </Text>
      </View>
    </Box>
  )
}
