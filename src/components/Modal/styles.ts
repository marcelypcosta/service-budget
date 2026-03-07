import { StyleSheet } from "react-native";
import { theme } from "@/styles/theme";

export const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    justifyContent: "flex-end",
  },
  modal: {
    backgroundColor: "white",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.gray200,
  },
  modalTitle: {
    ...theme.typography.titleSm,
    color: theme.colors.gray700,
  },
  modalContent: {
    padding: 20,
    paddingBottom: 32,
    gap: 12,
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
  modalFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    padding: 20,
    paddingBottom: 40,
    borderTopWidth: 1,
    borderTopColor: theme.colors.gray200,
  },
});
