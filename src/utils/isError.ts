import { Alert } from "react-native";

export function handleError(treatmentFunction?: () => void) {
    Alert.alert(
      'Falha no servidor',
      'Tivemos uma falha no servidor, \n por favor tente novamente mais tarde.',
      [
        {
          text: 'Ok',
          onPress: treatmentFunction,
        },
      ],
    )
  }