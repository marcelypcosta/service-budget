import { ScrollView, View } from "react-native";
import { layoutStyles, viewQuoteStyles } from "@/styles";

import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Header2 from "@/components/Header2";
import Service, { EmptyServiceList } from "@/components/Service";
import GeneralInformation from "@/components/GeneralInformation";
import BudgetSection from "@/components/BudgetSection";
import Investiment from "@/components/Investiment";

import { BudgetStatusType, ServiceIncluded } from "@/types/budget";

const MOCK_SERVICES_INCLUDED: ServiceIncluded[] = [];

export default function DetailsBudget({
  route,
}: {
  route: { params: { id: string; status: BudgetStatusType } };
}) {
  const { id, status } = route.params;

  return (
    <View style={layoutStyles.container}>
      <Header2 id={id} status={status} />

      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <View style={viewQuoteStyles.content}>
          {/* Informações Gerais */}
          <GeneralInformation />

          {/* Serviços Inclusos */}
          <BudgetSection icon="noteWithText" title="Serviços Inclusos">
            <View style={viewQuoteStyles.list}>
              {MOCK_SERVICES_INCLUDED.length > 0 ? (
                MOCK_SERVICES_INCLUDED.map((service) => (
                  <Service
                    key={service.id}
                    title={service.description}
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
          <Investiment />
        </View>
      </ScrollView>

      <Footer style={{ justifyContent: "space-between" }}>
        <View style={{ flexDirection: "row", gap: 8 }}>
          <Button icon="trash2" variant="danger" />
          <Button icon="copy" variant="secondary" />
          <Button icon="editPen" variant="secondary" />
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
