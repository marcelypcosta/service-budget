import { OrderEnum, StatusEnum } from "@/enum/budget";

export type BudgetStatusType =
  | StatusEnum.DRAFT
  | StatusEnum.APPROVED
  | StatusEnum.SUBMITTED
  | StatusEnum.REJECTED;
export type BudgetOrderType =
  | OrderEnum.NEWEST
  | OrderEnum.OLDEST
  | OrderEnum.HIGHEST_VALUE
  | OrderEnum.LOWEST_VALUE;

export interface ServiceIncluded {
  id: number;
  title: string;
  description: string;
  quantity: number;
  price: number;
}

export interface Budget {
  id: number;
  title: string;
  client: string;
  services: ServiceIncluded[];
  discountPct?: number;
  status: BudgetStatusType;
  createdAt: string;
  updatedAt: string;
}

export interface BudgetResponse {
  data: Budget[];
}
