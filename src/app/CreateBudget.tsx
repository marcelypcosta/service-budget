import { FlatList, ScrollView, Text, View } from "react-native";
import { Controller } from "react-hook-form";

import { useCreateBudgetViewModel } from "@/hooks/useCreateBudgetViewModel";

import { quoteCreationStyles } from "@/styles";
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
import { DiscountInput } from "@/components/Discount";

import { StatusEnum } from "@/enum/budget";
import { BudgetStatusType } from "@/types/budget";

const STATUS_OPTIONS: BudgetStatusType[] = [
  StatusEnum.DRAFT,
  StatusEnum.APPROVED,
  StatusEnum.SUBMITTED,
  StatusEnum.REJECTED,
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
  const {
    control,
    fields,
    isServiceVisible,
    setIsServiceVisible,
    editingServiceIndex,
    subTotal,
    discountValue,
    total,
    handleAddService,
    handleEditService,
    handleDeleteService,
    handleSaveService,
    handleCancel,
    handleSubmit,
    isSubmitting,
  } = useCreateBudgetViewModel();

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
              <Controller
                control={control}
                name="title"
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <Input
                    placeholder="Título"
                    value={value}
                    onChangeText={onChange}
                    errorMessage={error?.message}
                  />
                )}
              />
              <Controller
                control={control}
                name="client"
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <Input
                    placeholder="Cliente"
                    value={value}
                    onChangeText={onChange}
                    errorMessage={error?.message}
                  />
                )}
              />
            </View>
          </BudgetSection>

          {/* Status */}
          <BudgetSection icon="tag" title="Status">
            <View style={quoteCreationStyles.statusContent}>
              {STATUS_OPTIONS.map((item) => (
                <Controller
                  key={item}
                  control={control}
                  name="status"
                  render={({ field: { onChange, value } }) => (
                    <View key={item} style={quoteCreationStyles.statusItem}>
                      <Check
                        variant="radio"
                        checked={value === item}
                        onChange={() => onChange(item)}
                      />
                      <Status status={item} />
                    </View>
                  )}
                />
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
                data={fields}
                keyExtractor={(item) => item.id}
                renderItem={({ item, index }) => (
                  <View
                    style={{
                      marginBottom: index === fields.length - 1 ? 20 : 0,
                    }}
                  >
                    <Service
                      title={item.title}
                      description={item.description}
                      price={item.price}
                      quantity={item.quantity}
                      isEditable
                      onPress={() => handleEditService(index)}
                      onLongPress={() => handleDeleteService(item.title)}
                    />
                  </View>
                )}
                scrollEnabled={false}
                contentContainerStyle={{ gap: 20 }}
              />

              <Button
                icon="plus"
                label="Adicionar Serviço"
                variant="secondary"
                onPress={handleAddService}
              />
            </View>
          </BudgetSection>

          {/* Investimentos */}
          <BudgetSection icon="creditCard" title="Investimentos">
            {/* Content */}
            <View style={quoteCreationStyles.investmentsContent}>
              {/* Subtotal */}
              <InfoLine title="Subtotal">
                <Text style={{ color: theme.colors.gray600 }}>
                  {fields.length} {fields.length === 1 ? "item" : "itens"}
                </Text>
                <Price2 price={subTotal} />
              </InfoLine>

              {/* Desconto */}
              <InfoLine title="Desconto">
                <Controller
                  control={control}
                  name="discountPct"
                  render={({ field: { onChange, value } }) => (
                    <DiscountInput
                      discount={value || 0}
                      onChangeDiscount={onChange}
                    />
                  )}
                />
                {discountValue > 0 && <Price2 discount={discountValue} />}
              </InfoLine>
            </View>

            {/* Valor Total */}
            <View style={quoteCreationStyles.footer}>
              <Text style={quoteCreationStyles.columnLabel}>Valor Total</Text>
              <View style={quoteCreationStyles.columnValue}>
                {discountValue > 0 && <Price2 subTotal={subTotal} />}
                <Price price={total} />
              </View>
            </View>
          </BudgetSection>
        </View>

        {/* Footer */}
        <Footer>
          <Button label="Cancelar" variant="secondary" onPress={handleCancel} />
          <Button
            label={isSubmitting ? "Salvando..." : "Salvar"}
            icon="check"
            onPress={handleSubmit}
            disabled={isSubmitting}
          />
        </Footer>
      </ScrollView>

      <ServiceModal
        isServiceVisible={isServiceVisible}
        setIsServiceVisible={setIsServiceVisible}
        onDelete={handleDeleteService}
        onSave={handleSaveService}
        initialData={
          editingServiceIndex !== null ? fields[editingServiceIndex] : undefined
        }
      />
    </View>
  );
}
