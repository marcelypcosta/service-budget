import { Text } from "react-native";
import { styles } from "./styles";

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
        {discount.toLocaleString("pt-BR", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </Text>
    );
  }

  if (price) {
    return (
      <Text style={styles.price}>
        <Text style={styles.priceSymbol}>R$</Text>{" "}
        {price.toLocaleString("pt-BR", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </Text>
    );
  }

  if (subTotal) {
    return (
      <Text style={styles.subTotal}>
        <Text style={styles.priceSymbol}>R$</Text>{" "}
        {subTotal.toLocaleString("pt-BR", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </Text>
    );
  }

  return null;
}
