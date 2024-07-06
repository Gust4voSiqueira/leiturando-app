import { styles } from './styles'
import { Alert, Pressable, Text, View } from 'react-native'
import { CaretLeft, CaretRight, FlagCheckered } from 'phosphor-react-native'
import { THEME } from '../../../../global/theme'
import { useNavigation } from '@react-navigation/native'

interface IButtonsGame {
  onAlterQuestion: (newIndex: number) => void
  finallyGame: () => void
  index: number
  totalIndex: number
}

export function ButtonsGame({
  index,
  totalIndex,
  onAlterQuestion,
  finallyGame,
}: IButtonsGame) {
  const { navigate } = useNavigation()
  const stylesButtonPrevious =
    index - 1 >= 0 ? styles.alterOperation : styles.alterOperationTransparent

  function handleStopGame() {
    Alert.alert(
      'Finalizar rodada',
      'Tem certeza que deseja finalizar a rodada?',
      [
        {
          text: 'Não',
          style: 'cancel',
        },
        {
          text: 'Sim, finalizar',
          style: 'destructive',
          onPress: () => navigate('home', { isReloadRanking: false }),
        },
      ],
    )
  }

  function renderButtons(index: number) {
    if (index < 6) {
      return (
        <Pressable
          style={styles.alterOperation}
          onPress={() => onAlterQuestion(index + 1)}
        >
          <CaretRight size={50} color={THEME.colors.white} />
        </Pressable>
      )
    }

    return (
      <Pressable style={styles.alterOperation} onPress={finallyGame}>
        <FlagCheckered size={50} color={THEME.colors.white} weight="fill" />
      </Pressable>
    )
  }

  return (
    <>
      <View style={styles.buttonsContainer}>
        <Pressable
          style={stylesButtonPrevious}
          onPress={() => onAlterQuestion(index - 1)}
        >
          <CaretLeft size={50} color={THEME.colors.white} />
        </Pressable>

        <Text style={styles.indexMath}>
          {index + 1}/{totalIndex}
        </Text>

        {renderButtons(index)}
      </View>

      <View style={styles.buttonStopContainer}>
        <Pressable style={styles.stopButton} onPress={handleStopGame}>
          <Text style={styles.textStop}>Parar</Text>
        </Pressable>
      </View>
    </>
  )
}
