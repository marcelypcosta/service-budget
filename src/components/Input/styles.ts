import { StyleSheet } from "react-native";
import { theme } from "@/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 1,
    borderRadius: 100,
    backgroundColor: theme.colors.gray100,
  },
  // Variants
  empty: {
    borderColor: theme.colors.gray300,
  },
  filled: {
    borderColor: theme.colors.gray300,
  },
  danger: {
    borderColor: theme.colors.dangerBase,
  },
  // Focus States
  borderFocused: {
    borderColor: theme.colors.purpleBase,
  },
  borderDanger: {
    borderColor: theme.colors.dangerBase,
  },
  // Text Styles
  input: {
    flex: 1,
    ...theme.typography.textMd,
    color: theme.colors.gray700,
  },
  errorText: {
    color: theme.colors.dangerBase,
    ...theme.typography.textXs, 
    marginTop: 4,
    marginLeft: 4, 
  },
});
