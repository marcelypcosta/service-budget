import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { theme } from "@/styles/theme";

import { MageIcon } from "@/components/icons/MageIcons";

import { ComponentModal as Modal } from "@/components/Modal";

import Input from "@/components/Input";
import Button from "@/components/Button";

interface ServiceModalProps {
  isServiceVisible: boolean;
  setIsServiceVisible: (visible: boolean) => void;
}

export function ServiceModalContent() {
  return (
    <View style={{ gap: 12 }}>
      <Input placeholder="Título" />
      <Input placeholder="Descrição" />
      <View style={styles.inputDiv}>
        <Input
          placeholder={"R$ 0,00"}
          keyboardType="numeric"
          style={{ flex: 1 }}
        />
        <View style={styles.quantityInput}>
          <TouchableOpacity>
            <MageIcon name="minus" size={20} color={theme.colors.purpleBase} />
          </TouchableOpacity>
          <Text style={{ ...theme.typography.textMd }}>1</Text>
          <TouchableOpacity>
            <MageIcon name="plus" size={20} color={theme.colors.purpleBase} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export function ServiceModalFooter({
  handleCancel,
  handleSave,
}: {
  handleCancel: () => void;
  handleSave: () => void;
}) {
  return (
    <>
      <Button icon="trash2" variant="danger" onPress={handleCancel} />
      <Button icon="check" label="Salvar" onPress={handleSave} />
    </>
  );
}

export default function ServiceModal({
  isServiceVisible,
  setIsServiceVisible,
}: ServiceModalProps) {
  const handleCancel = () => {
    setIsServiceVisible(false);
  };

  const handleSave = () => {
    setIsServiceVisible(false);
  };

  return (
    <Modal
      title="Serviço"
      content={<ServiceModalContent />}
      footer={
        <ServiceModalFooter
          handleCancel={handleCancel}
          handleSave={handleSave}
        />
      }
      isVisible={isServiceVisible}
      setIsVisible={setIsServiceVisible}
    />
  );
}
