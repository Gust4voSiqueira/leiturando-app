import { Pressable, Text, View } from "react-native";
import { Modal } from "react-native";
import { styles } from "./styles";

interface IModalComponent {
  isOpen: boolean
  handleAlterStateModal: () => void
  children: JSX.Element
}

export function ModalComponent({ isOpen, handleAlterStateModal, children }: IModalComponent) {
    return (
      <Modal
            transparent
            visible={isOpen}
            onRequestClose={handleAlterStateModal}
            style={styles.modalContainer}
            animationType="fade"
          >
            <View>
              <Pressable style={styles.pressableCloseModal} onPress={handleAlterStateModal} />

              {children}
            </View>
          </Modal>
    )
}