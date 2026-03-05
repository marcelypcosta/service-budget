import { StyleSheet } from "react-native";
import { theme } from "@/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 16,
        paddingRight: 20,
        gap: 16,
        backgroundColor: theme.colors.gray100,
        borderRadius: 10,
    },
    icon: {
        width: 40,
        height: 40,
        borderRadius: 10,
        backgroundColor: theme.colors.purpleLight,
        alignItems: "center",
        justifyContent: "center",
    },
    cotainerRight: {
        flex: 1,
        gap: 8,
    },
    header: {
        
    },
    separator: {
        height: 1,
        backgroundColor: theme.colors.gray300,
    },
    total: {

    }
})