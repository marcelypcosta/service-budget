import { useState } from "react";
import { View } from "react-native";

import Input from "@/components/Input";
import Button from "@/components/Button";
import Header from "@/components/Header";
import BudgetCard from "@/components/BudgetCard";
import FilterModal from "@/components/FilterModal";
import { homeStyles, layoutStyles } from "@/styles";

export default function Home() {
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  return (
    <View style={layoutStyles.container}>
      <Header />
      <View style={homeStyles.content}>
        {/* Search and Filter */}
        <View style={homeStyles.search}>
          <Input
            icon="search"
            placeholder="Título ou Cliente"
            style={{ flex: 1 }}
          />
          <Button
            icon="filter"
            variant="secondary"
            onPress={() => setIsFilterVisible(!isFilterVisible)}
          />
        </View>

        <View style={homeStyles.list}>
          <BudgetCard
            data={{
              id: "1",
              title: "Desenvolvimento de aplicativo de loja online",
              client: "Soluções Tecnológicas Beta",
              status: "approved",
              price: 22300,
            }}
          />
        </View>
      </View>

      <FilterModal
        isFilterVisible={isFilterVisible}
        setIsFilterVisible={setIsFilterVisible}
      />
    </View>
  );
}
