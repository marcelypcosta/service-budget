import { StyleSheet } from "react-native";
import { theme } from "@/styles/theme";

export const styles = StyleSheet.create({
  modalContent: {
    padding: 20,
    paddingBottom: 32,
    gap: 12,
  },
  inputDiv: {
    flexDirection: "row",
    gap: 12,
  },
  quantityInput: {
    borderWidth: 1,
    borderColor: theme.colors.gray200,
    backgroundColor: theme.colors.gray100,
    borderRadius: 999,
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
});
