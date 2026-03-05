import { StyleSheet } from "react-native";
import { theme } from "@/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 999,
    gap: 8,
  },
  primary: {
    backgroundColor: theme.colors.purpleBase,
  },
  secondary: {
    backgroundColor: theme.colors.gray100,
    borderWidth: 1,
    borderColor: theme.colors.gray300,
  },
  danger: {
    backgroundColor: theme.colors.gray100,
    borderWidth: 1,
    borderColor: theme.colors.gray300,
  },
  text: {
    ...theme.typography.titleSm,
  },
  textPrimary: {
    color: theme.colors.gray100,
  },
  textSecondary: {
    color: theme.colors.purpleBase,
  },
  textDanger: {
    color: theme.colors.dangerBase,
  },
});