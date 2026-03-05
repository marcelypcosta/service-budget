import { View, ViewStyle } from "react-native";
import { styles } from "./styles";

export default function Footer({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: ViewStyle;
}) {
  return <View style={[styles.container, style]}>{children}</View>;
}
