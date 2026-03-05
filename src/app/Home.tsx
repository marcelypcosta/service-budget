import { View } from "react-native";

import Input from "@/components/Input";
import Button from "@/components/Button";
import Header from "@/components/Header";
import BudgetCard from "@/components/BudgetCard";

export default function Home() {
  return (
    <View style={{ flex: 1, marginTop: 64 }}>
      <Header />
      <View style={{ paddingHorizontal: 20, paddingVertical: 24 }}>
        {/* Search and Filter */}
        <View style={{ flexDirection: "row", gap: 8 }}>
          <Input
            icon="search"
            placeholder="Título ou Cliente"
            style={{ flex: 1 }}
          />
          <Button icon="filter" variant="secondary" />
        </View>

        {/* Budget List */}
        <View style={{ gap: 8, marginTop: 24 }}>
          <BudgetCard
            data={{
              id: "1",
              title: "Desenvolvimento de aplicativo de loja online",
              client: "Soluções Tecnológicas Beta",
              status: "aprovado",
              price: 22300,
            }}
          />
        </View>
      </View>
    </View>
  );
}
