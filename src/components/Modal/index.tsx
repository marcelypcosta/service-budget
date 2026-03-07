import { Modal, Pressable, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { theme } from "@/styles/theme";

import { MageIcon } from "@/components/icons/MageIcons";

import Footer from "@/components/Footer";

interface ComponentModalProps {
  content: React.ReactNode;
  footer: React.ReactNode;
  title: string;
  isVisible: boolean;
  setIsVisible: (visible: boolean) => void;
}

export function ComponentModal({
  content,
  footer,
  title,
  isVisible,
  setIsVisible,
}: ComponentModalProps) {
  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <Pressable
        style={styles.modalBackground}
        onPress={() => setIsVisible(false)}
      >
        <Pressable style={styles.modal}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>{title}</Text>
            <TouchableOpacity onPress={() => setIsVisible(false)}>
              <MageIcon
                name="multiply"
                size={24}
                color={theme.colors.gray600}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.modalContent}>{content}</View>

          <Footer>{footer}</Footer>
        </Pressable>
      </Pressable>
    </Modal>
  );
}
