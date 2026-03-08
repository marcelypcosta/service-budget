import { Text } from "react-native";
import { styles } from "./styles";
import { formatPrice } from "@/utils/formatter";

export default function Price2({
  price,
  discount,
  subTotal,
}: {
  price?: number;
  discount?: number;
  subTotal?: number;
}) {
  if (discount) {
    return (
      <Text style={styles.discount}>
        <Text style={styles.priceSymbolDiscount}>R$</Text> -
        {formatPrice(discount)}
      </Text>
    );
  }

  if (price) {
    return (
      <Text style={styles.price}>
        <Text style={styles.priceSymbol}>R$</Text> {formatPrice(price)}
      </Text>
    );
  }

  if (subTotal) {
    return (
      <Text style={styles.subTotal}>
        <Text style={styles.priceSymbol}>R$</Text> {formatPrice(subTotal)}
      </Text>
    );
  }

  return null;
}
