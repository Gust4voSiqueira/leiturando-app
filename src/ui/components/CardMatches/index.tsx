import { Text, View, Pressable } from 'react-native'
import { ButtonStart } from '../ButtonStart'
import { styles } from './styles'

import React from 'react'
import { SpeakerSimpleHigh } from 'phosphor-react-native'
import { colors } from '../../../../global/themes/default'
import { useSpeech } from '../../../hooks/useSpeech'

interface IMatches {
  title: string
  children: React.ReactNode
  navigationFunction: () => void
  readerText: string
}

export function CardMatches({
  title,
  children,
  navigationFunction,
  readerText,
}: IMatches) {
  const { speech } = useSpeech()

  return (
    <View style={styles.cardMatchesContainer}>
      <View style={styles.headerCardContainer}>
        <Text style={styles.titleSection}>{title}</Text>

        <Pressable onPress={() => speech(readerText)}>
          <SpeakerSimpleHigh size={25} weight="fill" color={colors.white} />
        </Pressable>
      </View>
      <View style={styles.wordsContainer}>
        <View style={styles.ImageContainer}>{children}</View>

        <View style={styles.buttonContainer}>
          <ButtonStart onClickFunction={navigationFunction} />
        </View>
      </View>
    </View>
  )
}
