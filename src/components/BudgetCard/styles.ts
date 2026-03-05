import { StyleSheet } from "react-native";
import { theme } from "@/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: theme.colors.gray100,
    gap: 12,
    padding: 16,
    borderRadius: 10,
    marginBottom: 8,
  },
  contentLeft: {
    flex: 1,
    gap: 8,
  },
  contentRight: {
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  title: {
    ...theme.typography.titleMd,
    color: theme.colors.gray700,
  },
  client: {
    ...theme.typography.textSm,
    color: theme.colors.gray600,
  },
});
