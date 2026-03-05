import { StyleSheet } from "react-native";
import { theme } from "@/styles/theme";

export const styles = StyleSheet.create({
  content: {
    borderWidth: 1,
    borderColor: theme.colors.gray200,
    borderRadius: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.gray200,
  },
  container: {
    padding: 16,
    gap: 12,
  },
});
