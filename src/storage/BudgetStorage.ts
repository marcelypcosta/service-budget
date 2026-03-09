import { StatusEnum } from "@/enum/budget";
import { Budget } from "@/types/budget";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ITEMS_STORAGE_KEY = "@app:budgets"; // Default - @app:chave

export const storageItems = {
  /* Salva os itens no AsyncStorage */
  save: async (items: Budget[]): Promise<void> => {
    try {
      await AsyncStorage.setItem(ITEMS_STORAGE_KEY, JSON.stringify(items));
    } catch (error) {
      console.error("Erro no BudgetStorage.save:", error);
      throw error;
    }
  },

  /* Retorna todos os itens do AsyncStorage */
  getAll: async (): Promise<Budget[]> => {
    try {
      const json = await AsyncStorage.getItem(ITEMS_STORAGE_KEY);
      return json ? JSON.parse(json) : [];
    } catch (error) {
      console.error("Erro no BudgetStorage.getAll:", error);
      return [];
    }
  },

  /* Retorna um item específico pelo ID */
  getById: async (id: number): Promise<Budget | undefined> => {
    try {
      const json = await AsyncStorage.getItem(ITEMS_STORAGE_KEY);
      const budgets: Budget[] = json ? JSON.parse(json) : [];
      return budgets.find((budget) => budget.id === id);
    } catch (error) {
      console.error("Erro no BudgetStorage.getById:", error);
      return undefined;
    }
  },

  /* Remove um item específico pelo ID */
  delete: async (id: number): Promise<void> => {
    try {
      const json = await AsyncStorage.getItem(ITEMS_STORAGE_KEY);
      const budgets: Budget[] = json ? JSON.parse(json) : [];
      const updatedBudgets = budgets.filter((budget) => budget.id !== id);
      await AsyncStorage.setItem(ITEMS_STORAGE_KEY, JSON.stringify(updatedBudgets));
    } catch (error) {
      console.error("Erro no BudgetStorage.delete:", error);
      throw error;
    }
  },

  /* Atualiza um item específico pelo ID */
  update: async (updatedBudget: Budget): Promise<void> => {
    try {
      const budgets = await storageItems.getAll();
      const index = budgets.findIndex((budget) => budget.id === updatedBudget.id);
      if (index !== -1) {
        budgets[index] = updatedBudget;
        await storageItems.save(budgets);
      }
    } catch (error) {
      console.error("Erro no BudgetStorage.update:", error);
      throw error;
    }
  },

  /* Cria uma cópia de um item específico pelo ID */
  duplicate: async (id: number): Promise<Budget | undefined> => {
    try {
      const budget = await storageItems.getById(id);
      if (!budget) return undefined;
      budget.id = Date.now();
      budget.title = `${budget.title} (cópia)`; // Adiciona um sufixo identificação
      budget.status = StatusEnum.DRAFT; // Define como rascunho
      const now = new Date().toISOString();
      budget.createdAt = now;
      budget.updatedAt = now;
      const budgets = await storageItems.getAll();
      budgets.push(budget);
      await storageItems.save(budgets);
      return budget;
    } catch (error) {
      console.error("Erro no BudgetStorage.duplicate:", error);
      return undefined;
    }
  },
};
