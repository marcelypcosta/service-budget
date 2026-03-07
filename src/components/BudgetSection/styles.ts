import { StyleSheet } from "react-native";
import { theme } from "@/styles/theme";

export const styles = StyleSheet.create({
  content: {
    borderWidth: 1,
    borderColor: theme.colors.gray200,
    borderRadius: 10,
  },
  header: {
    gap: 8,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.gray200,
    marginBottom: 16,
  },
  title: {
    ...theme.typography.textXs,
    color: theme.colors.gray500,
  },
});
