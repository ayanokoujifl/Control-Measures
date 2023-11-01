import { StatusBar } from "expo-status-bar"
import { Text, View } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { Routes } from "./src/routes/Routes"
import { SafeAreaView } from "react-native-safe-area-context"
export default function App() {
  return (
    <LinearGradient
      colors={["rgba(99,0,89,1)", "rgba(136,7,124,1)", "rgba(255,0,231,1)"]}
      locations={[0, 0.46, 1]}
      style={{ flex: 1 }}
    >
      <StatusBar translucent style="light" />
      <Routes />
    </LinearGradient>
  )
}
