import { StyleSheet } from "react-native";
import { theme } from "@/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.gray300,
  },
  title: {
    ...theme.typography.titleLg,
    color: theme.colors.purpleBase,
  },
  subtitle: {
    ...theme.typography.textMd,
    color: theme.colors.gray500,
  },
});
