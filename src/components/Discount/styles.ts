import { StyleSheet } from "react-native";
import { theme } from "@/styles/theme";

export const styles = StyleSheet.create({
  discount: {
    color: theme.colors.successDark,
    backgroundColor: theme.colors.successLight,
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 6,
  },
});
