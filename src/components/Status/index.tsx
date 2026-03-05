import { Text, View, ViewStyle, TextStyle } from "react-native";
import { styles } from "./style";

type StatusVariant = "rascunho" | "aprovado" | "enviado" | "recusado";

interface StatusProps {
  status?: StatusVariant;
  style?: ViewStyle;
}

export default function Status({
  status: variant = "rascunho",
  style,
}: StatusProps) {
  const getStatusLabel = () => {
    switch (variant) {
      case "aprovado":
        return "Aprovado";
      case "enviado":
        return "Enviado";
      case "recusado":
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
