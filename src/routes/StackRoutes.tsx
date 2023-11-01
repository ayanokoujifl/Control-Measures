import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Login from "../pages/Login"

const { Screen, Navigator } = createNativeStackNavigator()

export function StackRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: "transparent" },
        statusBarTranslucent: true,
        statusBarColor: "transparent",
      }}
    >
      <Screen component={Login} name="Login" />
    </Navigator>
  )
}
