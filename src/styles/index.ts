import { StyleSheet } from "react-native";
import { theme } from "./theme";

export const layoutStyles = {
  container: {
    flex: 1,
    marginTop: 64,
  },
};

export const homeStyles = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
  search: {
    flexDirection: "row",
    gap: 8,
  },
  list: {
    gap: 8,
    marginTop: 24,
  },
});

export const quoteCreationStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 64,
  },
  content: {
    padding: 20,
    gap: 20,
  },
  /* Info Gerais */
  infoContent: {
    paddingHorizontal: 16, paddingBottom: 20, gap: 12
  },
  /* Status */
  statusContent: {
    gap: 12,
    flexWrap: "wrap",
    flexDirection: "row",
    paddingBottom: 20,
    paddingHorizontal: 16,
  },
  statusItem: {
    width: "48%",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  /* Investimentos */
  investmentsContent: {
    paddingLeft: 20,
    paddingRight: 16,
    paddingBottom: 20,
    gap: 12,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: theme.colors.gray100,
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  columnLabel: {
    ...theme.typography.titleSm,
    color: theme.colors.gray700,
  },
  columnValue: {
    flexDirection: "column",
    alignItems: "flex-end",
    gap: 12,
  },
});

export const viewQuoteStyles = StyleSheet.create({
  content: { padding: 20, gap: 20 },
  list: {
    paddingLeft: 20,
    paddingRight: 16,
    paddingBottom: 20,
    gap: 20,
  },
});
