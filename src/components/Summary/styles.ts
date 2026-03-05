import { StyleSheet } from "react-native";
import { theme } from "@/styles/theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.gray100,
    borderRadius: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.gray200,
  },
  icon: {
    padding: 12,
    backgroundColor: theme.colors.purpleLight,
    borderRadius: 8,
  },
  title: {
    flex: 1,
    color: theme.colors.gray700,
    ...theme.typography.titleLg,
  },
  summary: {
    flexDirection: "column",
    gap: 12,
    padding: 16,
  },
  summaryInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
});
