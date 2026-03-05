import { Text, View } from "react-native";
import { MageIcon } from "../icons/MageIcons";
import { theme } from "@/styles/theme";
import { styles } from "./styles";

function SummaryBudgetItem({ title, value }: { title: string; value: string }) {
  return (
    <View style={{ flex: 1 }}>
      <Text style={{ color: theme.colors.gray600, ...theme.typography.textXs }}>
        {title}
      </Text>
      <Text style={{ color: theme.colors.gray700, ...theme.typography.textSm }}>
        {value}
      </Text>
    </View>
  );
}

export default function Summary() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.icon}>
          <MageIcon name="shop" color={theme.colors.purpleBase} />
        </View>
        <Text style={styles.title}>
          Desenvolvimento de Aplicativo de loja online
        </Text>
      </View>

      {/* Content Summary */}
      <View style={styles.summary}>
        <SummaryBudgetItem title="Cliente" value="Soluções Tecnologicas Beta" />
        <View style={styles.summaryInfo}>
          <SummaryBudgetItem title="Criado em" value="01/01/2023" />
          <SummaryBudgetItem title="Atualizado em" value="01/01/2023" />
        </View>
      </View>
    </View>
  );
}
