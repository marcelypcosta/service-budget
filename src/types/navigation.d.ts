import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RoutesList = {
  home: undefined;
  create: undefined;
  details: { id: string; status: BudgetStatusType };
};

export type RoutesProps<T extends keyof RoutesList> = NativeStackScreenProps<
  RoutesList,
  T
>;
