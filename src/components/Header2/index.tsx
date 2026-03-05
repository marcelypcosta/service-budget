import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { styles } from "./styles";
import { theme } from "@/styles/theme";

import { MageIcon } from "@/components/icons/MageIcons";
import Status from "@/components/Status";

import { BudgetStatusType } from "@/types/budget";
import { RoutesList } from "@/types/navigation";

type HeaderNavigationProp = NativeStackNavigationProp<RoutesList>;

export default function Header2({
  id,
  status,
}: {
  id?: string;
  status?: BudgetStatusType;
}) {
  const navigation = useNavigation<HeaderNavigationProp>();

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <TouchableOpacity>
          <MageIcon
            name="chevronLeft"
            size={24}
            color={theme.colors.gray600}
            onPress={() => navigation.goBack()}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Orçamento {id && <Text>#{id}</Text>}</Text>
      </View>
      {status && <Status status={status} />}
    </View>
  );
}
