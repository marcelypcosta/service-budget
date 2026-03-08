import { useState } from "react";
import { View, FlatList, Text } from "react-native";

import Input from "@/components/Input";
import Button from "@/components/Button";
import Header from "@/components/Header";
import BudgetCard from "@/components/BudgetCard";
import FilterModal from "@/components/FilterModal";
import { homeStyles, layoutStyles } from "@/styles";
import { theme } from "@/styles/theme";

import { useHomeViewModel } from "@/hooks/useHomeViewModel";

export default function Home() {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const { budgets, isLoading, calculateBudgetTotal } = useHomeViewModel();

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
          {budgets.length === 0 && !isLoading ? (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  ...theme.typography.textMd,
                  color: theme.colors.gray500,
                }}
              >
                Nenhum orçamento encontrado
              </Text>
            </View>
          ) : (
            <FlatList
              data={budgets}
              keyExtractor={(item) => String(item.id)}
              renderItem={({ item }) => (
                <BudgetCard
                  data={{
                    id: String(item.id),
                    title: item.title,
                    client: item.client,
                    status: item.status,
                    price: calculateBudgetTotal(item),
                  }}
                />
              )}
              ListEmptyComponent={() => (
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      ...theme.typography.textMd,
                      color: theme.colors.gray500,
                    }}
                  >
                    Nenhum orçamento encontrado
                  </Text>
                </View>
              )}
              contentContainerStyle={{ gap: 12, paddingBottom: 20 }}
              showsVerticalScrollIndicator={false}
            />
          )}
        </View>
      </View>

      <FilterModal
        isFilterVisible={isFilterVisible}
        setIsFilterVisible={setIsFilterVisible}
      />
    </View>
  );
}
