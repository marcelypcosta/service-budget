import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RoutesList = {
  home: undefined;
  create: undefined;
  details: { id: string };
};

export type RoutesProps<T extends keyof RoutesList> = NativeStackScreenProps<
  RoutesList,
  T
>;
