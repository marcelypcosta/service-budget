import { Text, TouchableOpacity, View } from "react-native";
import { theme } from "@/styles/theme";

import Price from "@/components/Price";
import { MageIcon } from "../icons/MageIcons";
import { styles } from "./style";
interface ServiceProps {
  title: string;
  description: string;
  price: number;
  quantity: number;
  isEditable?: boolean;
  onPress?: () => void;
}

export default function Service({
  title,
  description,
  price,
  quantity,
  isEditable = false,
  onPress,
}: ServiceProps) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={onPress ? 0.7 : 1}
    >
      {/* Descrição do serviço */}
      <View style={styles.container_description}>
        <Text style={theme.typography.titleSm}>{title}</Text>
        <Text
          style={{ ...theme.typography.textXs, color: theme.colors.gray500 }}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {description}
        </Text>
      </View>

      {/* Preço e quantidade */}
      <View style={styles.container_price_quantity}>
        <Price price={price} />
        <Text style={styles.quantity}>Qt: {quantity}</Text>
      </View>

      {/* Botão de edição */}
      {isEditable && (
        <View>
          <MageIcon name="editPen" color={theme.colors.purpleBase} size={20} />
        </View>
      )}
    </TouchableOpacity>
  );
}

export function EmptyServiceList() {
  return (
    <View style={styles.container_empty_service_list}>
      <Text style={styles.text_empty_service_list}>
        Nenhum serviço adicionado
      </Text>
    </View>
  );
}
