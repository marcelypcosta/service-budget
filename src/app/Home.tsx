import { useState } from "react";
import { View, FlatList, Text } from "react-native";

import Input from "@/components/Input";
import Button from "@/components/Button";
import Header from "@/components/Header";
import BudgetCard from "@/components/BudgetCard";
import FilterModal from "@/components/FilterModal";
import { homeStyles, layoutStyles } from "@/styles";
import { theme } from "@/styles/theme";

import { useHomeViewModel } from "@/hooks/useBudget";
import Empty from "@/components/Empty";
import { calculateTotal } from "@/utils/calculate";

export default function Home() {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const { budgets, isLoading, filter } = useHomeViewModel();

  return (
    <View style={layoutStyles.container}>
      <Header />
      <View style={homeStyles.content}>
        <View style={homeStyles.search}>
          <Input
            icon="search"
            placeholder="Título ou Cliente"
            style={{ flex: 1 }}
            value={filter.search}
            onChangeText={filter.setSearch}
          />
          <Button
            icon="filter"
            variant="secondary"
            onPress={() => setIsFilterVisible(true)}
          />
        </View>

        <View style={homeStyles.list}>
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
                  price: calculateTotal(item),
                }}
              />
            )}
            ListEmptyComponent={() => (
              <Empty message="Nenhum orçamento encontrado" />
            )}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>

      <FilterModal
        isFilterVisible={isFilterVisible}
        setIsFilterVisible={setIsFilterVisible}
        currentStatus={filter.status}
        currentOrder={filter.order}
        onApply={(status, order) => {
          if (status !== undefined) filter.setStatus(status);
          if (order !== undefined) filter.setOrder(order);
          setIsFilterVisible(false);
        }}
        onReset={() => {
          filter.handleResetFilters();
          setIsFilterVisible(false);
        }}
      />
    </View>
  );
}
