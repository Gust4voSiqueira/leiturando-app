/* eslint-disable prettier/prettier */
import React from 'react'

import { CaretLeft, SpeakerSimpleHigh } from 'phosphor-react-native'
import { Text, View, Pressable } from 'react-native'
import { styles } from './styles'
import { colors } from '../../../../global/themes/default'

import { useNavigation } from '@react-navigation/native'
import { useSpeech } from '../../../hooks/useSpeech'

interface IHandleIconHeader {
  condition: boolean
  icon: React.ReactNode
  functionOnPress: () => void
}

function HandleIconHeader({
  condition,
  icon,
  functionOnPress,
}: IHandleIconHeader) {
  return condition 
  ? <Pressable onPress={functionOnPress}>{icon}</Pressable> 
  : <Text style={{ width: 35 }}></Text>
}

interface IHeader {
  isRedirect?: boolean
  textSpeech?: string
  title: string
}

export function Header({
  title,
  isRedirect = false,
  textSpeech = '',
}: IHeader) {
  const navigation = useNavigation()
  const { speech } = useSpeech()

  return (
    <View style={styles.headerContainer}>
      <HandleIconHeader
        condition={isRedirect}
        icon={<CaretLeft size={35} weight="bold" color={colors.white} />}
        functionOnPress={() => navigation.goBack()}
      />

      <Text style={styles.headerTitle}>{title}</Text>

      <HandleIconHeader
        condition={textSpeech !== ''}
        icon={
          <SpeakerSimpleHigh size={30} weight="fill" color={colors.white} />
        }
        functionOnPress={() => speech(textSpeech)}
      />
    </View>
  )
}
