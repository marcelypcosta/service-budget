import { StyleSheet } from "react-native";
import { theme } from "@/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  container_description: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 2,
  },
  container_price_quantity: {
    flexDirection: "column",
    alignItems: "flex-end",
    gap: 2,
  },
  quantity: {
    ...theme.typography.textXs,
    color: theme.colors.gray600,
  },
});
