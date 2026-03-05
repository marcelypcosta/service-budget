import { Text } from "react-native";
import { styles } from "./styles";

export default function Price({ price }: { price: number }) {
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
