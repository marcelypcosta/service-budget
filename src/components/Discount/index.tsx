import { Text, TextInput, View } from "react-native";
import { styles } from "./styles";

export default function Discount({ discount }: { discount: number }) {
  return (
    <View>
      <Text style={styles.discount}>{discount}% off</Text>
    </View>
  );
}

export function DiscountInput({
  discount,
  onChangeDiscount,
}: {
  discount: number;
  onChangeDiscount: (discount: number) => void;
}) {
  return (
    <View style={styles.discountInput}>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={String(discount)}
        onChangeText={(text) => onChangeDiscount(Number(text))}
        placeholder="0"
        maxLength={3}
      />
      <Text style={styles.percentageSymbol}>%</Text>
    </View>
  );
}
