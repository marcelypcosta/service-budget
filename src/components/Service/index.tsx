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
}

export default function Service({
  title,
  description,
  price,
  quantity,
  isEditable = false,
}: ServiceProps) {
  return (
    <View style={styles.container}>
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
        <TouchableOpacity activeOpacity={0.7}>
          <MageIcon name="editPen" color={theme.colors.purpleBase} size={20} />
        </TouchableOpacity>
      )}
    </View>
  );
}
