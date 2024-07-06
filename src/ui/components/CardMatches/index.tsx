import { Text, View, Pressable } from 'react-native'
import { ButtonStart } from '../ButtonStart'
import { styles } from './styles'

import React from 'react'
import { SpeakerSimpleHigh } from 'phosphor-react-native'
import { useSpeech } from '../../../hooks/useSpeech'
import { THEME } from '../../../../global/theme'
import { Card } from '../Card'

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
    <Card>
      <View style={styles.headerCardContainer}>
        <Text style={styles.titleSection}>{title}</Text>

        <Pressable onPress={() => speech(readerText)}>
          <SpeakerSimpleHigh
            size={25}
            weight="fill"
            color={THEME.colors.white}
          />
        </Pressable>
      </View>
      <View style={styles.wordsContainer}>
        <View style={styles.ImageContainer}>{children}</View>

        <View style={styles.buttonContainer}>
          <ButtonStart onClickFunction={navigationFunction} />
        </View>
      </View>
    </Card>
  )
}
