import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "@/app/Home";
import CreateBudget from "@/app/CreateBudget";
import DetailsBudget from "@/app/DetailsBudget";

import { RoutesList } from "@/types/navigation";

const Route = createNativeStackNavigator<RoutesList>();

export default function Routes() {
  return (
    <Route.Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: "#FFF",
        },
      }}
    >
      <Route.Screen name="home" component={Home} />
      <Route.Screen name="create" component={CreateBudget} />
      <Route.Screen name="details" component={DetailsBudget} />
    </Route.Navigator>
  );
}
