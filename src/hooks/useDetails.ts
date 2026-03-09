import { useState, useCallback } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { storageItems } from "@/storage/BudgetStorage";
import { Budget } from "@/types/budget";

export function useDetailsViewModel(id: string) {
  const [budget, setBudget] = useState<Budget | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigation();

  /* Busca o orçamento pelo ID e atualiza o estado.*/
  const fetchBudget = async () => {
    try {
      setIsLoading(true);
      const data = await storageItems.getById(Number(id));
      if (data) {
        setBudget(data);
      } else {
        // Se não encontrar, volta para a home
        navigation.goBack();
      }
    } catch (error) {
      console.error(error);
      navigation.goBack();
    } finally {
      setIsLoading(false);
    }
  };

  /* Busca o orçamento quando a tela ganha foco. */
  useFocusEffect(
    useCallback(() => {
      fetchBudget();
    }, [id]),
  );

  /* Exclui o orçamento e volta para a home. */
  const deleteBudget = async () => {
    if (!budget) return;
    try {
      await storageItems.delete(budget.id);
      navigation.goBack();
    } catch (error) {
      console.error(error);
    }
  };

  /* Duplica o orçamento e volta para a home. */
  const duplicateBudget = async () => {
    if (!budget) return;
    try {
      const duplicatedBudget = await storageItems.duplicate(budget.id);
      if (duplicatedBudget) {
        navigation.goBack();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return {
    budget,
    isLoading,
    deleteBudget,
    duplicateBudget,
  };
}
