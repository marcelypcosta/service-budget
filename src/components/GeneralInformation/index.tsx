import { Text, View } from "react-native";
import { MageIcon } from "../icons/MageIcons";
import { theme } from "@/styles/theme";
import { styles } from "./styles";
import { formatDate } from "@/utils/formatter";

function Information({ title, value }: { title: string; value: string }) {
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

interface GeneralInformationProps {
  title: string;
  client: string;
  createdAt: string;
  updatedAt: string;
}

export default function GeneralInformation({
  title,
  client,
  createdAt,
  updatedAt,
}: GeneralInformationProps) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.icon}>
          <MageIcon name="shop" color={theme.colors.purpleBase} />
        </View>
        <Text style={styles.title}>{title}</Text>
      </View>

      {/* Content Summary */}
      <View style={styles.content}>
        <Information title="Cliente" value={client} />
        <View style={styles.contentInfo}>
          <Information title="Criado em" value={formatDate(createdAt)} />
          <Information title="Atualizado em" value={formatDate(updatedAt)} />
        </View>
      </View>
    </View>
  );
}
