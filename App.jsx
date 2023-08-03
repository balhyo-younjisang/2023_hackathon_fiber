import { SafeAreaView, StyleSheet, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Location from "expo-location";

import { Login } from "./screens/LoginScreen";
import { Join } from "./screens/JoinScreen";
import { Home } from "./screens/HomeScreen";
import { Cal } from "./screens/CalenderScreen";
import { Write } from "./screens/ScheduleWriteScreen";

const ScreenStack = createNativeStackNavigator();

export default function App() {
  Location.requestForegroundPermissionsAsync();
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <ScreenStack.Navigator
          screenOptions={{
            headerShown: false,
            animation: "fade_from_bottom",
          }}
        >
          <ScreenStack.Screen name="Login" component={Login} />
          <ScreenStack.Screen name="Join" component={Join} />
          <ScreenStack.Screen name="Home" component={Home} />
          <ScreenStack.Screen name="Cal" component={Cal} />
          <ScreenStack.Screen name="Write" component={Write} />
        </ScreenStack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: StatusBar.currentHeight,
  },
});
