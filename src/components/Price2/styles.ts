import { StyleSheet } from "react-native";
import { theme } from "@/styles/theme";

export const styles = StyleSheet.create({
    price: {
        ...theme.typography.textSm,
        color: theme.colors.gray700,
    },
    priceSymbol: {
        ...theme.typography.textXs,
        color: theme.colors.gray700,
    },
    discount: {
        ...theme.typography.textSm,
        color: theme.colors.dangerBase,
    },
    priceSymbolDiscount: {
        ...theme.typography.textXs,
        color: theme.colors.dangerBase,
    },
    subTotal: {
        ...theme.typography.textSm,
        color: theme.colors.gray600,
        textDecorationLine: "line-through",
    },

})