import { Budget } from "@/types/budget";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ITEMS_STORAGE_KEY = "@app:budgets"; // Default - @app:chave

export const storageItems = {
  save: async (items: Budget[]): Promise<void> => {
    try {
      await AsyncStorage.setItem(ITEMS_STORAGE_KEY, JSON.stringify(items));
    } catch (error) {
      console.error("Erro no BudgetStorage.save:", error);
      throw error;
    }
  },

  getAll: async (): Promise<Budget[]> => {
    try {
      const json = await AsyncStorage.getItem(ITEMS_STORAGE_KEY);
      return json ? JSON.parse(json) : [];
    } catch (error) {
      console.error("Erro no BudgetStorage.getAll:", error);
      return [];
    }
  },

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
};
