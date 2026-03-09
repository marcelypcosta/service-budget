import { useState, useMemo } from "react";
import { OrderEnum } from "@/enum/budget";
import { calculateTotal } from "@/utils/calculate";
import { Budget, BudgetStatusType, BudgetOrderType } from "@/types/budget";

export function useFilter(initialBudgets: Budget[]) {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState<BudgetStatusType | undefined>();
  const [order, setOrder] = useState<BudgetOrderType>(OrderEnum.NEWEST);

  const filteredBudgets = useMemo(() => {
    let result = [...initialBudgets];

    // Busca por texto (título ou cliente)
    if (search) {
      const searchLower = search.toLowerCase();
      result = result.filter(
        (budget) =>
          budget.title.toLowerCase().includes(searchLower) ||
          budget.client.toLowerCase().includes(searchLower),
      );
    }

    // Filtro por status
    if (status) {
      result = result.filter((budget) => budget.status === status);
    }

    // Ordenação
    result.sort((budgetA, budgetB) => {
      switch (order) {
        case OrderEnum.NEWEST:
          return (
            new Date(budgetB.createdAt).getTime() -
            new Date(budgetA.createdAt).getTime()
          );
        case OrderEnum.OLDEST:
          return (
            new Date(budgetA.createdAt).getTime() -
            new Date(budgetB.createdAt).getTime()
          );
        case OrderEnum.HIGHEST_VALUE:
          return calculateTotal(budgetB) - calculateTotal(budgetA);
        case OrderEnum.LOWEST_VALUE:
          return calculateTotal(budgetA) - calculateTotal(budgetB);
        default:
          return 0;
      }
    });

    return result;
  }, [initialBudgets, search, status, order]);

  const handleResetFilters = () => {
    setStatus(undefined);
    setOrder(OrderEnum.NEWEST);
  };

  return {
    search,
    setSearch,
    status,
    setStatus,
    order,
    setOrder,
    filteredBudgets,
    handleResetFilters,
  };
}
