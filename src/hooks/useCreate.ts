import { useState, useEffect } from "react";
import { useForm, useFieldArray, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { Alert } from "react-native";

import {
  Budget,
  BudgetSchema,
  ServiceSchemaType,
} from "@/lib/schema/createBudget";
import { storageItems } from "@/storage/BudgetStorage";
import { StatusEnum } from "@/enum/budget";
import { Budget as BudgetType } from "@/types/budget";

type CreateBudgetRouteProp = RouteProp<{ params: { id?: string } }, "params">;

export function useCreateBudgetViewModel() {
  const navigation = useNavigation();
  const route = useRoute<CreateBudgetRouteProp>();
  const budgetId = route.params?.id;

  const [isLoading, setIsLoading] = useState(!!budgetId);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isServiceVisible, setIsServiceVisible] = useState(false);
  const [editingServiceIndex, setEditingServiceIndex] = useState<number | null>(
    null,
  );

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

  const { control, handleSubmit, reset } = form;

  /* Carrega o orçamento existente se o ID for fornecido */
  useEffect(() => {
    if (budgetId) {
      loadBudget(Number(budgetId));
    }
  }, [budgetId]);

  /* Carrega os dados do orçamento existente */
  const loadBudget = async (id: number) => {
    try {
      setIsLoading(true);
      const budget = await storageItems.getById(id);
      if (budget) {
        reset({
          title: budget.title,
          client: budget.client,
          status: budget.status,
          services: budget.services,
          discountPct: budget.discountPct || 0,
        });
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Erro", "Não foi possível carregar o orçamento.");
      navigation.goBack();
    } finally {
      setIsLoading(false);
    }
  };

  /* Gerencia o array de serviços */
  const { fields, append, update, remove } = useFieldArray({
    control,
    name: "services",
  });

  /* Observa o array de serviços */
  const services = useWatch({
    control,
    name: "services",
  });

  /* Observa o percentual de desconto */
  const discountPct =
    useWatch({
      control,
      name: "discountPct",
    }) || 0;

  const subTotal = services.reduce(
    (acc, service) => acc + service.price * service.quantity,
    0,
  );

  const discountValue = (subTotal * discountPct) / 100;
  const total = subTotal - discountValue;

  const totalItems = services.reduce(
    (acc, service) => acc + (service.quantity || 0),
    0,
  );

  /* Adiciona um novo serviço ao array */
  const handleAddService = () => {
    setEditingServiceIndex(null);
    setIsServiceVisible(true);
  };

  /* Edita um serviço existente no array */
  const handleEditService = (index: number) => {
    setEditingServiceIndex(index);
    setIsServiceVisible(true);
  };

  /* Remove um serviço do array */
  const handleDeleteService = (title: string) => {
    const index = fields.findIndex((service) => service.title === title);
    if (index !== -1) {
      remove(index);
    }
  };

  /* Salva um serviço no array */
  const handleSaveService = (data: ServiceSchemaType) => {
    if (editingServiceIndex !== null) {
      update(editingServiceIndex, data);
    } else {
      append(data);
    }
    setIsServiceVisible(false);
  };

  /* Submete o formulário */
  const onSubmit = async (data: BudgetSchema) => {
    try {
      setIsSubmitting(true);

      /* Atualiza o orçamento existente */
      if (budgetId) {
        const updatedBudget: BudgetType = {
          id: Number(budgetId),
          title: data.title,
          client: data.client,
          status: data.status,
          services: data.services.map((s, i) => ({
            ...s,
            id: i + 1,
          })),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          discountPct: data.discountPct || 0,
        };

        await storageItems.update(updatedBudget);
      } else {
        /* Cria um novo orçamento */
        const budgets = await storageItems.getAll();
        const newBudget: BudgetType = {
          id: Date.now(),
          title: data.title,
          client: data.client,
          status: data.status,
          services: data.services.map((service, index) => ({
            ...service,
            id: index + 1,
          })),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          discountPct: data.discountPct || 0,
        };
        await storageItems.save([...budgets, newBudget]);
      }

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
    handleSubmit: handleSubmit(onSubmit),
    isSubmitting,
    isLoading,
    isEditing: !!budgetId,
    totalItems,
  };
}
