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
  rascunho: {
    backgroundColor: theme.colors.gray300,
  },
  rascunhoDot: {
    backgroundColor: theme.colors.gray400,
  },
  rascunhoText: {
    color: theme.colors.gray500,
  },

  aprovado: {
    backgroundColor: theme.colors.successLight,
  },
  aprovadoDot: {
    backgroundColor: theme.colors.successBase,
  },
  aprovadoText: {
    color: theme.colors.successDark,
  },

  enviado: {
    backgroundColor: theme.colors.infoLight,
  },
  enviadoDot: {
    backgroundColor: theme.colors.infoBase,
  },
  enviadoText: {
    color: theme.colors.infoDark,
  },

  recusado: {
    backgroundColor: theme.colors.dangerLight,
  },
  recusadoDot: {
    backgroundColor: theme.colors.dangerBase,
  },
  recusadoText: {
    color: theme.colors.dangerDark,
  },
});