import * as Speech from 'expo-speech'
import { Alert, Platform } from 'react-native';
import Toast from 'react-native-toast-message'
import * as Linking from 'expo-linking';
import * as IntentLauncher from 'expo-intent-launcher';

const openSettings = () => {
  if (Platform.OS === 'ios') {
    Linking.openURL('app-settings:')
      .catch(() => {
        Alert.alert('Erro', 'Não foi possível abrir as configurações.');
      });
  } else if (Platform.OS === 'android') {
    IntentLauncher.startActivityAsync(IntentLauncher.ActivityAction.ACCESSIBILITY_SETTINGS)
      .catch(() => {
        Alert.alert('Erro', 'Não foi possível abrir as configurações.');
      });
  }
};

export function useSpeech() {
  const speech = async (text: string) => {
    try {
      const voices = await Speech.getAvailableVoicesAsync()
      const voicesBr = voices.find((voice) => voice.language === 'pt-BR')

      if (!voicesBr) {
        return Alert.alert(
          'Nenhuma voz encontrada',
          'Parece que você ainda não fez o download de nenhuma voz. \nPor favor, faça o download da voz desejada no menu de Acessibilidade e tente novamente',
          [
            {
              text: Platform.OS === 'ios' ? 'Abrir Ajustes' : 'Abrir Configurações',
              onPress: openSettings,
            },
          ],
        )
      }

      Speech.speak(text, {
        language: 'pt-BR',
      })
    } catch (error) {
       Toast.show({
          type: 'error',
          text1: 'Falha',
          text2:
            'Falha ao reproduzir.',
        })
    }
  }

  return { speech }
}
