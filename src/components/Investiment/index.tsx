import { Text, View } from "react-native";
import { styles } from "./styles";
import { MageIcon } from "../icons/MageIcons";
import { theme } from "@/styles/theme";
import Price2 from "../Price2";
import Price from "../Price";

function Discount({ discount }: { discount: number }) {
  return (
    <View
      style={{
        backgroundColor: theme.colors.gray100,
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 4,
      }}
    >
      <Text
        style={{
          color: theme.colors.successDark,
          backgroundColor: theme.colors.successLight,
          paddingVertical: 2,
          paddingHorizontal: 6,
          borderRadius: 6,
        }}
      >
        {discount}% off
      </Text>
    </View>
  );
}

function ValueLine({ children }: { children: React.ReactNode }) {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {children}
    </View>
  );
}

function Label({ title }: { title: string }) {
  return (
    <Text
      style={{
        color: theme.colors.gray600,
        ...theme.typography.textSm,
      }}
    >
      {title}
    </Text>
  );
}

export default function Investiment() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.icon}>
        <MageIcon name="creditCard" color={theme.colors.purpleBase} />
      </View>
      <View style={styles.cotainerRight}>
        <View style={styles.header}>
          <ValueLine>
            <Label title="Subtotal" />
            <Price2 subTotal={15100} />
          </ValueLine>
          <ValueLine>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 8,
              }}
            >
              <Label title="Desconto" />
              <Discount discount={10} />
            </View>
            <Price2 discount={1510} />
          </ValueLine>
        </View>

        <View style={styles.separator} />

        <View style={styles.total}>
          <ValueLine>
            <Text
              style={{
                color: theme.colors.gray700,
                ...theme.typography.titleSm,
              }}
            >
              Investimento Total
            </Text>
            <Price price={13590} />
          </ValueLine>
        </View>
      </View>
    </View>
  );
}
