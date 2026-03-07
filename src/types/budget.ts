export type BudgetStatusType = "draft" | "approved" | "submitted" | "rejected";
export type BudgetOrderType = "newest" | "oldest" | "highest_value" | "lowest_value";

export interface ServiceIncluded {
  id: number;
  title: string;
  description: string;
  quantity: number;
  price: number;
}

interface Budget {
  id: number;
  title: string;
  client: string;
  service: string;
  services: ServiceIncluded[];
  discountPct?: number;
  status: BudgetStatusType;
  createdAt: string;
  updatedAt: string;
}

export interface BudgetResponse {
  data: Budget[];
}
