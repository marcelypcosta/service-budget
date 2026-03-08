import { useState } from "react";
import { useForm, useFieldArray, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";

import { Budget, BudgetSchema, ServiceSchemaType } from "@/lib/schema/createBudget";
import { storageItems } from "@/storage/BudgetStorage";
import { StatusEnum } from "@/enum/budget";
import { Budget as BudgetType } from "@/types/budget";

export function useCreateBudgetViewModel() {
  const navigation = useNavigation();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isServiceVisible, setIsServiceVisible] = useState(false);
  const [editingServiceIndex, setEditingServiceIndex] = useState<number | null>(null);

  const form = useForm<BudgetSchema>({
    resolver: zodResolver(Budget),
    defaultValues: {
      title: "",
      client: "",
      status: StatusEnum.DRAFT,
      services: [],
      discountPct: 0,
    },
  });

  const { control, handleSubmit, formState: { errors } } = form;

  const { fields, append, update, remove } = useFieldArray({
    control,
    name: "services",
  });

  const services = useWatch({
    control,
    name: "services",
  });

  const discountPct = useWatch({
    control,
    name: "discountPct",
  }) || 0;

  const subTotal = services.reduce(
    (acc, service) => acc + service.price * service.quantity,
    0
  );

  const discountValue = (subTotal * discountPct) / 100;
  const total = subTotal - discountValue;

  const handleAddService = () => {
    setEditingServiceIndex(null);
    setIsServiceVisible(true);
  };

  const handleEditService = (index: number) => {
    setEditingServiceIndex(index);
    setIsServiceVisible(true);
  };

  const handleDeleteService = (title: string) => {
    const index = fields.findIndex((service) => service.title === title);
    if (index !== -1) {
      remove(index);
    }
  };

  const handleSaveService = (data: ServiceSchemaType) => {
    if (editingServiceIndex !== null) {
      update(editingServiceIndex, data);
    } else {
      append(data);
    }
    setIsServiceVisible(false);
  };

  const onSubmit = async (data: BudgetSchema) => {
    try {
      setIsSubmitting(true);
      const existingBudgets = await storageItems.getAll();
      
      const newBudget: BudgetType = {
        id: Date.now(),
        title: data.title,
        client: data.client,
        status: data.status,
        services: data.services.map((s, i) => ({ 
          ...s, 
          id: i + 1 
        })),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        discountPct: data.discountPct || 0,
      };

      await storageItems.save([...existingBudgets, newBudget]);
      navigation.goBack();
    } catch (error) {
      Alert.alert("Erro", "Não foi possível salvar o orçamento.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    navigation.goBack();
  };

  return {
    form,
    control,
    errors,
    fields,
    isServiceVisible,
    setIsServiceVisible,
    editingServiceIndex,
    subTotal,
    discountPct,
    discountValue,
    total,
    handleAddService,
    handleEditService,
    handleDeleteService,
    handleSaveService,
    handleCancel,
    handleSubmit: handleSubmit(onSubmit),
    isSubmitting
  };
}
