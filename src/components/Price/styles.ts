import { StyleSheet } from "react-native";
import { theme } from "@/styles/theme";

export const styles = StyleSheet.create({
  price: {
    ...theme.typography.titleMd,
    color: theme.colors.gray700,
  },
  priceSymbol: {
    ...theme.typography.textXs,
    color: theme.colors.gray600,
  },
});
