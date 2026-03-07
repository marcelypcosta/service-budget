import { StyleSheet } from "react-native";
import { theme } from "@/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    gap: 6,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  text: {
    ...theme.typography.titleXs,
  },
  
  // Variants
  draft: {
    backgroundColor: theme.colors.gray300,
  },
  draftDot: {
    backgroundColor: theme.colors.gray400,
  },
  draftText: {
    color: theme.colors.gray500,
  },

  approved: {
    backgroundColor: theme.colors.successLight,
  },
  approvedDot: {
    backgroundColor: theme.colors.successBase,
  },
  approvedText: {
    color: theme.colors.successDark,
  },

  submitted: {  
    backgroundColor: theme.colors.infoLight,
  },
  submittedDot: {
    backgroundColor: theme.colors.infoBase,
  },
  submittedText: {
    color: theme.colors.infoDark,
  },

  rejected: {
    backgroundColor: theme.colors.dangerLight,
  },
  rejectedDot: {
    backgroundColor: theme.colors.dangerBase,
  },
  rejectedText: {
    color: theme.colors.dangerDark,
  },
});