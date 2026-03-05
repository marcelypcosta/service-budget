import { ScrollView, View } from "react-native";

import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Header2 from "@/components/Header2";
import Service from "@/components/Service";
import Summary from "@/components/Summary";
import FormCard from "@/components/FormCard";
import Investiment from "@/components/Investiment";

import { BudgetStatusType } from "@/types/budget";

export default function DetailsBudget({
  route,
}: {
  route: { params: { id: string; status: BudgetStatusType } };
}) {
  const { id, status } = route.params;

  return (
    <View style={{ flex: 1, marginTop: 64 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header2 id={id} status={status} />

        <View style={{ padding: 20, gap: 20 }}>
          {/* Resumo do Orçamento */}
          <Summary />

          {/* Serviçoes Inclusos do Orçamento */}
          <FormCard icon="noteWithText" title="Serviçoes Inclusos">
            <View
              style={{
                paddingLeft: 20,
                paddingRight: 16,
                paddingTop: 16,
                paddingBottom: 20,
                gap: 20,
              }}
            >
              {/* Componente de Adição de Serviço */}
              <Service
                title="Design de interfaces"
                description="Criação de wireframes e protótipos interativos para websites e aplicativos."
                price={100}
                quantity={1}
              />
              <Service
                title="Desenvolvimento de aplicação web"
                description="Implementação completa de aplicação web com React, Node.js e banco de dados."
                price={5000}
                quantity={1}
              />
              <Service
                title="Desenvolvimento de aplicativo móvel"
                description="Criação de aplicativos móveis para iOS e Android com React Native."
                price={10000}
                quantity={1}
              />
            </View>
          </FormCard>

          {/* Investimento Total */}
          <Investiment />
        </View>

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
      </ScrollView>
    </View>
  );
}
