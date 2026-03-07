import { useState } from "react";
import Discount from "@/components/Discount";
import { quoteCreationStyles } from "@/styles";
import { FlatList, ScrollView, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { theme } from "@/styles/theme";

import Input from "@/components/Input";
import Price from "@/components/Price";
import Price2 from "@/components/Price2";
import Check from "@/components/Check";
import Status from "@/components/Status";
import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Service from "@/components/Service";
import Header2 from "@/components/Header2";
import ServiceModal from "@/components/ServiceModal";
import BudgetSection from "@/components/BudgetSection";

import { RoutesList } from "@/types/navigation";
import { BudgetStatusType, ServiceIncluded } from "@/types/budget";

type HeaderNavigationProp = NativeStackNavigationProp<RoutesList>;

const MOCK_SERVICES: ServiceIncluded[] = [];

const STATUS_OPTIONS: BudgetStatusType[] = [
  "draft",
  "approved",
  "submitted",
  "rejected",
];

const InfoLine = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <View
    style={{
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    }}
  >
    <Text style={{ ...theme.typography.textSm, color: theme.colors.gray700 }}>
      {title}
    </Text>
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
      }}
    >
      {children}
    </View>
  </View>
);

export default function CreateBudget() {
  const navigation = useNavigation<HeaderNavigationProp>();
  const [status, setStatus] = useState<BudgetStatusType>("draft");
  const [isServiceVisible, setIsServiceVisible] = useState(false);

  return (
    <View style={quoteCreationStyles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <Header2 />

        {/* Content */}
        <View style={quoteCreationStyles.content}>
          {/* Informações Gerais */}
          <BudgetSection icon="shop" title="Informações Gerais">
            <View style={quoteCreationStyles.infoContent}>
              <Input placeholder="Título" />
              <Input placeholder="Cliente" />
            </View>
          </BudgetSection>

          {/* Status */}
          <BudgetSection icon="tag" title="Status">
            <View style={quoteCreationStyles.statusContent}>
              {STATUS_OPTIONS.map((item) => (
                <View key={item} style={quoteCreationStyles.statusItem}>
                  <Check
                    variant="radio"
                    checked={status === item}
                    onChange={() => setStatus(item)}
                  />
                  <Status status={item} />
                </View>
              ))}
            </View>
          </BudgetSection>

          {/* Serviços Inclusos do Orçamento */}
          <BudgetSection icon="noteWithText" title="Serviços Inclusos">
            {/* Content */}
            <View
              style={{
                paddingLeft: 20,
                paddingRight: 16,
                paddingBottom: 20,
              }}
            >
              <FlatList
                data={MOCK_SERVICES}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => (
                  <Service
                    title={item.title}
                    description={item.description}
                    price={item.price}
                    quantity={item.quantity}
                    isEditable
                  />
                )}
                style={{ gap: 20 }}
                scrollEnabled={false}
                contentContainerStyle={{ gap: 20 }}
              />

              <Button
                icon="plus"
                label="Adicionar Serviço"
                variant="secondary"
                onPress={() => setIsServiceVisible(!isServiceVisible)}
              />
            </View>
          </BudgetSection>

          {/* Investimentos */}
          <BudgetSection icon="creditCard" title="Investimentos">
            {/* Content */}
            <View style={quoteCreationStyles.investmentsContent}>
              {/* Subtotal */}
              <InfoLine title="Subtotal">
                <Text style={{ color: theme.colors.gray600 }}>3 itens</Text>
                <Price2 price={15100} />
              </InfoLine>

              {/* Desconto */}
              <InfoLine title="Desconto">
                <Discount discount={10} />
                <Price2 discount={1510} />
              </InfoLine>
            </View>

            {/* Valor Total */}
            <View style={quoteCreationStyles.footer}>
              <Text style={quoteCreationStyles.columnLabel}>Valor Total</Text>
              <View style={quoteCreationStyles.columnValue}>
                <Price2 subTotal={15100} />
                <Price price={13590} />
              </View>
            </View>
          </BudgetSection>
        </View>

        {/* Footer */}
        <Footer>
          <Button
            label="Cancelar"
            variant="secondary"
            onPress={() => navigation.goBack()}
          />
          <Button label="Salvar" icon="check" />
        </Footer>
      </ScrollView>

      <ServiceModal
        isServiceVisible={isServiceVisible}
        setIsServiceVisible={setIsServiceVisible}
      />
    </View>
  );
}
