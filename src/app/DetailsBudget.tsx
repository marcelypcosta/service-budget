import { ScrollView, View, ActivityIndicator } from "react-native";
import { layoutStyles, viewQuoteStyles } from "@/styles";

import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Header2 from "@/components/Header2";
import Service, { EmptyServiceList } from "@/components/Service";
import GeneralInformation from "@/components/GeneralInformation";
import BudgetSection from "@/components/BudgetSection";
import Investiment from "@/components/Investiment";

import { BudgetStatusType } from "@/types/budget";
import { useDetailsViewModel } from "@/hooks/useDetails";
import { theme } from "@/styles/theme";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RoutesList } from "@/types/navigation";
import { calculateDiscountValue } from "@/utils/calculate";
import { calculateTotal } from "@/utils/calculate";
import { calculateSubtotal } from "@/utils/calculate";

type HeaderNavigationProp = NativeStackNavigationProp<RoutesList>;

export default function DetailsBudget({
  route,
}: {
  route: { params: { id: string; status: BudgetStatusType } };
}) {
  const { id, status } = route.params;
  const navigation = useNavigation<HeaderNavigationProp>();
  const { budget, isLoading, deleteBudget, duplicateBudget } =
    useDetailsViewModel(id);

  if (isLoading || !budget) {
    return (
      <View
        style={[
          layoutStyles.container,
          { justifyContent: "center", alignItems: "center" },
        ]}
      >
        <ActivityIndicator size="large" color={theme.colors.purpleBase} />
      </View>
    );
  }

  const handleEdit = () => {
    navigation.navigate("create", { id });
  };

  return (
    <View style={layoutStyles.container}>
      <Header2 id={id} status={budget.status} />

      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <View style={viewQuoteStyles.content}>
          {/* Informações Gerais */}
          <GeneralInformation
            title={budget.title}
            client={budget.client}
            createdAt={budget.createdAt}
            updatedAt={budget.updatedAt}
          />

          {/* Serviços Inclusos */}
          <BudgetSection icon="noteWithText" title="Serviços Inclusos">
            <View style={viewQuoteStyles.list}>
              {budget.services.length > 0 ? (
                budget.services.map((service) => (
                  <Service
                    key={service.id}
                    title={service.title}
                    description={service.description}
                    price={service.price}
                    quantity={service.quantity}
                  />
                ))
              ) : (
                <EmptyServiceList />
              )}
            </View>
          </BudgetSection>

          {/* Investimento Total */}
          <Investiment
            subTotal={calculateSubtotal(budget)}
            discountPct={budget.discountPct || 0}
            discountValue={calculateDiscountValue(budget)}
            total={calculateTotal(budget)}
          />
        </View>
      </ScrollView>

      <Footer style={{ justifyContent: "space-between" }}>
        <View style={{ flexDirection: "row", gap: 8 }}>
          <Button icon="trash2" variant="danger" onPress={deleteBudget} />
          <Button icon="copy" variant="secondary" onPress={duplicateBudget} />
          <Button icon="editPen" variant="secondary" onPress={handleEdit} />
        </View>

        <Button
          icon="directionUpRight"
          label="Compartilhar"
          variant="primary"
        />
      </Footer>
    </View>
  );
}
