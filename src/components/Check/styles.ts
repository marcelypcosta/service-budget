import { StyleSheet } from "react-native";
import { theme } from "@/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  box: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: theme.colors.gray400,
    justifyContent: "center",
    alignItems: "center",
  },
  checkbox: {
    borderRadius: 6,
  },
  checkboxChecked: {
    backgroundColor: theme.colors.purpleBase,
    borderColor: theme.colors.purpleBase,
  },
  radio: {
    borderRadius: 12,
    backgroundColor: "transparent",
  },
  radioChecked: {
    borderColor: theme.colors.purpleBase,
    backgroundColor: theme.colors.purpleBase,
  },
  radioInner: {
    width: 8,
    height: 8,
    borderRadius: 6,
    backgroundColor: "#fff",
  },
  label: {
    ...theme.typography.textMd, // Usando a tipografia do seu tema
    color: theme.colors.gray700,
  },
});
