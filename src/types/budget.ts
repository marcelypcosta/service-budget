export type BudgetStatusType = "rascunho" | "aprovado" | "enviado" | "recusado";

interface Budget {
  id: number;
  title: string;
  client: string;
  status: BudgetStatusType;
  price: number;
}

export interface BudgetResponse {
  data: Budget[];
}
