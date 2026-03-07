import { StyleSheet } from "react-native";
import { theme } from "@/styles/theme";

export const styles = StyleSheet.create({
  modalContent: {
    padding: 20,
    paddingBottom: 32,
    gap: 20,
  },
  section: {
    gap: 12,
  },
  sectionTitle: {
    ...theme.typography.titleXs,
    color: theme.colors.gray500,
    marginBottom: 4,
  },
  sectionOption: {
    gap: 12,
    flexDirection: "row",
    alignItems: "center",
  },
});
