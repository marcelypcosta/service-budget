import { StyleSheet } from "react-native";
import { theme } from "@/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
    marginBottom: 20,
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
  container_empty_service_list: {
    alignItems: "center",
    justifyContent: "center",
  },
  text_empty_service_list: {
    ...theme.typography.textXs,
    color: theme.colors.gray500,
  },
});
