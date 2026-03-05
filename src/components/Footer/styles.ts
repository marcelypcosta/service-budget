import { StyleSheet } from "react-native";
import { theme } from "@/styles/theme";

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    borderTopWidth: 1,
    borderTopColor: theme.colors.gray200,
  },
});