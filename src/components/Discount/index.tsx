import { theme } from "@/styles/theme";
import { Text, View } from "react-native";
import { styles } from "./styles";

export default function Discount({ discount }: { discount: number }) {
  return (
    <View>
      <Text style={styles.discount}>{discount}% off</Text>
    </View>
  );
}
