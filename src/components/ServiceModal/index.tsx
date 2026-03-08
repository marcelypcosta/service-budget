import { useEffect } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Control, Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { ServiceSchema, ServiceSchemaType } from "@/lib/schema/createBudget";

import { styles } from "./styles";
import { theme } from "@/styles/theme";

import { MageIcon } from "@/components/icons/MageIcons";

import { ComponentModal as Modal } from "@/components/Modal";

import Input from "@/components/Input";
import Button from "@/components/Button";

interface ServiceModalProps {
  isServiceVisible: boolean;
  setIsServiceVisible: (visible: boolean) => void;
  onSave?: (data: ServiceSchemaType) => void;
  onDelete?: (id: string) => void;
  initialData?: ServiceSchemaType;
}

export function ServiceModalContent({
  control,
}: {
  control: Control<ServiceSchemaType>;
}) {
  return (
    <View style={{ gap: 12 }}>
      <Controller
        control={control}
        name="title"
        render={({ field: { onChange, value }, fieldState: { error } }) => (
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
        name="description"
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <Input
            placeholder="Descrição"
            value={value}
            onChangeText={onChange}
            errorMessage={error?.message}
          />
        )}
      />
      <View style={styles.inputDiv}>
        <Controller
          control={control}
          name="price"
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <Input
              placeholder={"R$ 0,00"}
              keyboardType="numeric"
              style={{ flex: 1 }}
              value={value ? String(value) : ""}
              onChangeText={(text) => onChange(Number(text))}
              errorMessage={error?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="quantity"
          render={({ field: { onChange, value } }) => (
            <View style={styles.quantityInput}>
              <TouchableOpacity
                onPress={() => onChange(Math.max(1, (value || 1) - 1))}
              >
                <MageIcon
                  name="minus"
                  size={20}
                  color={theme.colors.purpleBase}
                />
              </TouchableOpacity>
              <Text style={{ ...theme.typography.textMd }}>{value || 1}</Text>
              <TouchableOpacity onPress={() => onChange((value || 1) + 1)}>
                <MageIcon
                  name="plus"
                  size={20}
                  color={theme.colors.purpleBase}
                />
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </View>
  );
}

export function ServiceModalFooter({
  isCreate,
  handleDelete,
  handleSave,
}: {
  isCreate: boolean;
  handleDelete: () => void;
  handleSave: () => void;
}) {
  return (
    <>
      {!isCreate && (
        <Button icon="trash2" variant="danger" onPress={handleDelete} />
      )}
      <Button icon="check" label="Salvar" onPress={handleSave} />
    </>
  );
}

export default function ServiceModal({
  isServiceVisible,
  setIsServiceVisible,
  onSave,
  onDelete,
  initialData,
}: ServiceModalProps) {
  const { control, handleSubmit, reset } = useForm<ServiceSchemaType>({
    resolver: zodResolver(ServiceSchema),
    defaultValues: {
      title: "",
      description: "",
      price: 0,
      quantity: 1,
    },
  });

  useEffect(() => {
    if (isServiceVisible) {
      if (initialData) {
        reset(initialData);
      } else {
        reset({
          title: "",
          description: "",
          price: 0,
          quantity: 1,
        });
      }
    }
  }, [isServiceVisible, initialData, reset]);

  const handleDelete = () => {
    if (onDelete && initialData) {
      onDelete(initialData.title);
    }
    setIsServiceVisible(false);
  };

  const onSubmit = (data: ServiceSchemaType) => {
    if (onSave) {
      onSave(data);
    }
    setIsServiceVisible(false);
  };

  return (
    <Modal
      title={initialData ? "Editar Serviço" : "Serviço"}
      content={<ServiceModalContent control={control} />}
      footer={
        <ServiceModalFooter
          isCreate={!initialData}
          handleDelete={handleDelete}
          handleSave={handleSubmit(onSubmit)}
        />
      }
      isVisible={isServiceVisible}
      setIsVisible={setIsServiceVisible}
    />
  );
}
