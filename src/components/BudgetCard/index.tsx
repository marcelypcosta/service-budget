import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { styles } from "./styles";

import Price from "@/components/Price";
import Status from "@/components/Status";

import { BudgetStatusType } from "@/types/budget";
import { RoutesList } from "@/types/navigation";

interface BudgetCardProps {
  data: {
    id: string;
    title: string;
    client: string;
    status: BudgetStatusType;
    price: number;
  };
}

type HeaderNavigationProp = NativeStackNavigationProp<RoutesList>;

export default function BudgetCard({
  data: { id, title, client, status, price },
}: BudgetCardProps) {
  const navigation = useNavigation<HeaderNavigationProp>();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("details", { id, status })}
    >
      <View style={styles.contentLeft}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.client}>{client}</Text>
      </View>
      <View style={styles.contentRight}>
        <Status status={status} />
        <Price price={price} />
      </View>
    </TouchableOpacity>
  );
}
