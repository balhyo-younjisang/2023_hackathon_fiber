import { SafeAreaView, StyleSheet, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RecoilRoot } from "recoil";
import * as Location from "expo-location";
import { useEffect, useState } from "react";
import { loadingFont } from "./utils/LoadingFonts";

import { Login } from "./screens/LoginScreen";
import { Join } from "./screens/JoinScreen";
import { Home } from "./screens/HomeScreen";
import { Map } from "./screens/MapScreen";
import { Menu } from "./screens/MenuScreen";
import { Setting } from "./screens/SettingScreen";
import { getData } from "./utils/asyncStorage";

const ScreenStack = createNativeStackNavigator();

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const [isLogin, setIsLogin] = useState();

  Location.requestForegroundPermissionsAsync();

  useEffect(() => {
    loadingFont().then(() => {
      setIsReady(true);
    });

    const getUserInfoByStorage = async () => {
      const userInfo = await getData("user");
      setIsLogin(userInfo);
    };

    getUserInfoByStorage();
  }, []);

  return (
    <>
      {isReady && (
        <RecoilRoot>
          <SafeAreaView style={styles.container}>
            <NavigationContainer>
              <ScreenStack.Navigator
                screenOptions={{
                  headerShown: false,
                  animation: "fade_from_bottom",
                }}
              >
                {!isLogin && (
                  <>
                    <ScreenStack.Screen name="Login" component={Login} />
                    <ScreenStack.Screen name="Join" component={Join} />
                  </>
                )}
                <ScreenStack.Screen name="Home" component={Home} />
                <ScreenStack.Screen name="Setting" component={Setting} />
                <ScreenStack.Screen name="Map" component={Map} />
                <ScreenStack.Screen name="Menu" component={Menu} />
              </ScreenStack.Navigator>
            </NavigationContainer>
          </SafeAreaView>
        </RecoilRoot>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: StatusBar.currentHeight,
  },
});
