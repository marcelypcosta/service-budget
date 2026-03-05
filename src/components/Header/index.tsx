import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { styles } from "./styles";

import Button from "@/components/Button";

import { RoutesList } from "@/types/navigation";

type HeaderNavigationProp = NativeStackNavigationProp<RoutesList>;

export default function Header() {
  const navigation = useNavigation<HeaderNavigationProp>();

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Orçamentos</Text>
        <Text style={styles.subtitle}>Você tem 1 item em rascunho</Text>
      </View>
      <Button
        icon="plus"
        label="Novo"
        variant="primary"
        onPress={() => {
          navigation.navigate("create");
        }}
      />
    </View>
  );
}
