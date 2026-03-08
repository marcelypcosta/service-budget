import { Text, View } from "react-native";
import { styles } from "./styles";
import { theme } from "@/styles/theme";

import Price from "@/components/Price";
import Price2 from "@/components/Price2";
import Discount from "@/components/Discount";
import { MageIcon } from "@/components/icons/MageIcons";

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

export default function Investiment({
  subTotal,
  discountPct,
  discountValue,
  total,
}: {
  subTotal: number;
  discountPct: number;
  discountValue: number;
  total: number;
}) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.icon}>
        <MageIcon name="creditCard" color={theme.colors.purpleBase} />
      </View>
      <View style={styles.cotainerRight}>
        <View style={styles.header}>
          {subTotal > 0 && (
            <ValueLine>
              <Label title="Subtotal" />
              <Price2 subTotal={subTotal} />
            </ValueLine>
          )}
          {discountPct > 0 && (
            <ValueLine>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <Label title="Desconto" />
                <Discount discount={discountPct} />
              </View>
              <Price2 discount={discountValue} />
            </ValueLine>
          )}
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
            <Price price={total} />
          </ValueLine>
        </View>
      </View>
    </View>
  );
}
