import { Text, View, ViewStyle, TextStyle } from "react-native";
import { styles } from "./style";
import { BudgetStatusType } from "@/types/budget";

interface StatusProps {
  status?: BudgetStatusType;
  style?: ViewStyle;
}

export default function Status({
  status: variant = "draft",
  style,
}: StatusProps) {
  const getStatusLabel = () => {
    switch (variant) {
      case "approved":
        return "Aprovado";
      case "submitted":
        return "Enviado";
      case "rejected":
        return "Recusado";
      default:
        return "Rascunho";
    }
  };

  return (
    <View style={[styles.container, styles[variant] as ViewStyle, style]}>
      <View
        style={[
          styles.dot,
          styles[`${variant}Dot` as keyof typeof styles] as ViewStyle,
        ]}
      />
      <Text
        style={[
          styles.text,
          styles[`${variant}Text` as keyof typeof styles] as TextStyle,
        ]}
      >
        {getStatusLabel()}
      </Text>
    </View>
  );
}
