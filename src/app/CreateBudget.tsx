import { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { theme } from "@/styles/theme";

import Input from "@/components/Input";
import Price from "@/components/Price";
import Status from "@/components/Status";
import Button from "@/components/Button";
import Price2 from "@/components/Price2";
import Footer from "@/components/Footer";
import Checkbox from "@/components/Check";
import Service from "@/components/Service";
import Header2 from "@/components/Header2";
import FormCard from "@/components/FormCard";

import { RoutesList } from "@/types/navigation";
import { BudgetStatusType } from "@/types/budget";

type HeaderNavigationProp = NativeStackNavigationProp<RoutesList>;

export default function CreateBudget() {
  const navigation = useNavigation<HeaderNavigationProp>();
  const [status, setStatus] = useState<BudgetStatusType>("rascunho");

  return (
    <View style={{ flex: 1, marginTop: 64 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <Header2 />

        {/* Content */}
        <View style={{ padding: 20, gap: 20 }}>
          {/* Informações Gerais do Orçamento */}
          <FormCard icon="shop" title="Informações Gerais">
            <View style={{ padding: 16, gap: 12 }}>
              <Input placeholder="Título" />
              <Input placeholder="Cliente" />
            </View>
          </FormCard>

          {/* Status do Orçamento */}
          <FormCard icon="tag" title="Status">
            <View
              style={{
                flexDirection: "row",
                gap: 12,
                flexWrap: "wrap",
                padding: 16,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 8,
                  width: "47%",
                }}
              >
                <Checkbox
                  variant="radio"
                  checked={status === "rascunho"}
                  onChange={() => setStatus("rascunho")}
                />
                <Status status="rascunho" />
              </View>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 8,
                  width: "47%",
                }}
              >
                <Checkbox
                  variant="radio"
                  checked={status === "aprovado"}
                  onChange={() => setStatus("aprovado")}
                />
                <Status status="aprovado" />
              </View>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 8,
                  width: "47%",
                }}
              >
                <Checkbox
                  variant="radio"
                  checked={status === "enviado"}
                  onChange={() => setStatus("enviado")}
                />
                <Status status="enviado" />
              </View>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 8,
                  width: "47%",
                }}
              >
                <Checkbox
                  variant="radio"
                  checked={status === "recusado"}
                  onChange={() => setStatus("recusado")}
                />
                <Status status="recusado" />
              </View>
            </View>
          </FormCard>

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
                isEditable
              />
              <Service
                title="Desenvolvimento de aplicação web"
                description="Implementação completa de aplicação web com React, Node.js e banco de dados."
                price={5000}
                quantity={1}
                isEditable
              />
              <Service
                title="Desenvolvimento de aplicativo móvel"
                description="Criação de aplicativos móveis para iOS e Android com React Native."
                price={10000}
                quantity={1}
                isEditable
              />
              <Button
                icon="plus"
                label="Adicionar Serviço"
                variant="secondary"
              />
            </View>
          </FormCard>

          {/* Investimentos */}
          <FormCard icon="creditCard" title="Investimentos">
            {/* Content */}
            <View
              style={{
                paddingLeft: 20,
                paddingRight: 16,
                paddingTop: 16,
                paddingBottom: 20,
                gap: 12,
              }}
            >
              {/* Subtotal */}
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text>Subtotal</Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 12,
                  }}
                >
                  <Text style={{ color: theme.colors.gray600 }}>3 itens</Text>
                  <Price2 price={15100} />
                </View>
              </View>
              {/* Desconto */}
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 16,
                }}
              >
                <View
                  style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
                >
                  <Text>Desconto</Text>
                  <View
                    style={{
                      borderWidth: 1,
                      borderColor: theme.colors.gray300,
                      paddingVertical: 8,
                      paddingHorizontal: 16,
                      gap: 8,
                      borderRadius: 999,
                      backgroundColor: theme.colors.gray100,
                    }}
                  >
                    <Text
                      style={{
                        ...theme.typography.textMd,
                        color: theme.colors.gray700,
                      }}
                    >
                      10%
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 12,
                  }}
                >
                  <Price2 discount={1510} />
                </View>
              </View>
            </View>

            {/* Valor Total */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: theme.colors.gray100,
                paddingVertical: 16,
                paddingHorizontal: 20,
              }}
            >
              <Text
                style={{
                  ...theme.typography.titleSm,
                  color: theme.colors.gray700,
                }}
              >
                Valor Total
              </Text>
              <View
                style={{
                  flexDirection: "column",
                  alignItems: "flex-end",
                  gap: 12,
                }}
              >
                <Price2 subTotal={15100} />
                <Price price={13590} />
              </View>
            </View>
          </FormCard>
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
    </View>
  );
}
