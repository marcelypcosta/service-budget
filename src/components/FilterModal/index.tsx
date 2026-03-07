import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

import Check from "@/components/Check";
import Status from "@/components/Status";
import Button from "@/components/Button";
import { ComponentModal as Modal } from "@/components/Modal";

import { BudgetOrderType, BudgetStatusType } from "@/types/budget";
import { OrderEnum, StatusEnum } from "@/enum/budget";

interface FilterModalProps {
  isFilterVisible: boolean;
  setIsFilterVisible: (visible: boolean) => void;
  onApply?: (status?: BudgetStatusType, order?: BudgetOrderType) => void;
  onReset?: () => void;
  currentStatus?: BudgetStatusType;
  currentOrder?: BudgetOrderType;
}

const STATUS_OPTIONS: BudgetStatusType[] = [
  StatusEnum.DRAFT,
  StatusEnum.APPROVED,
  StatusEnum.SUBMITTED,
  StatusEnum.REJECTED,
];

const ORDER_OPTIONS: { label: string; value: BudgetOrderType }[] = [
  { label: "Mais recente", value: OrderEnum.NEWEST },
  { label: "Mais antigo", value: OrderEnum.OLDEST },
  { label: "Maior valor", value: OrderEnum.HIGHEST_VALUE },
  { label: "Menor valor", value: OrderEnum.LOWEST_VALUE },
];

export function FilterModalContent({
  status,
  setStatus,
  order,
  setOrder,
}: {
  status?: BudgetStatusType;
  setStatus: (status?: BudgetStatusType) => void;
  order?: BudgetOrderType;
  setOrder: (order?: BudgetOrderType) => void;
}) {
  return (
    <View style={{ gap: 20 }}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Status</Text>
        {STATUS_OPTIONS.map((item) => (
          <View key={item} style={styles.sectionOption}>
            <Check
              variant="checkbox"
              checked={status === item}
              onChange={() => setStatus(item)}
            />
            <Status status={item} />
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Ordenação</Text>
        {ORDER_OPTIONS.map((item) => (
          <View key={item.value} style={styles.sectionOption}>
            <Check
              variant="radio"
              checked={order === item.value}
              onChange={() => setOrder(item.value)}
            />
            <Text>{item.label}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

export function FilterModalFooter({
  onReset,
  onApply,
}: {
  onReset: () => void;
  onApply: (status?: BudgetStatusType, order?: BudgetOrderType) => void;
}) {
  return (
    <>
      <Button label="Resetar filtros" variant="secondary" onPress={onReset} />
      <Button icon="check" label="Aplicar" onPress={() => onApply()} />
    </>
  );
}

export default function FilterModal({
  isFilterVisible,
  setIsFilterVisible,
  onApply,
  onReset,
  currentStatus,
  currentOrder,
}: FilterModalProps) {
  const [order, setOrder] = useState<BudgetOrderType | undefined>(currentOrder);
  const [status, setStatus] = useState<BudgetStatusType | undefined>(
    currentStatus,
  );

  useEffect(() => {
    if (isFilterVisible) {
      setOrder(currentOrder);
      setStatus(currentStatus);
    }
  }, [isFilterVisible, currentOrder, currentStatus]);

  const handleApply = () => {
    onApply?.(status, order);
    setIsFilterVisible(false);
  };

  const handleReset = () => {
    setStatus(undefined);
    setOrder(undefined);
    onReset?.();
  };

  return (
    <Modal
      title="Filtrar e ordenar"
      content={
        <FilterModalContent
          status={status}
          setStatus={setStatus}
          order={order}
          setOrder={setOrder}
        />
      }
      footer={<FilterModalFooter onReset={handleReset} onApply={handleApply} />}
      isVisible={isFilterVisible}
      setIsVisible={setIsFilterVisible}
    />
  );
}
