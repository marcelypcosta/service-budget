import { Text, View } from "react-native";
import { styles } from "./styles";
import { theme } from "@/styles/theme";

import { MageIcon } from "@/components/icons/MageIcons";

type IconName = React.ComponentProps<typeof MageIcon>["name"];

export default function FormCard({
  icon,
  title,
  children,
}: {
  icon: IconName;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <View style={styles.content}>
      <View style={styles.header}>
        <MageIcon name={icon} color={theme.colors.purpleBase} size={24} />
        <Text
          style={{ ...theme.typography.textXs, color: theme.colors.gray500 }}
        >
          {title}
        </Text>
      </View>
      {children}
    </View>
  );
}
