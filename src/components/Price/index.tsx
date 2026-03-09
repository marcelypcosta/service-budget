import { Text } from "react-native";
import { styles } from "./styles";
import { formatPrice } from "@/utils/formatter";

export default function Price({ price }: { price: number }) {
  return (
    <Text style={styles.price}>
      <Text style={styles.priceSymbol}>R$</Text>{" "}
      {formatPrice(price)}
    </Text>
  );
}
