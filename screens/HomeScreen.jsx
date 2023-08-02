import { ScrollView, StyleSheet, View } from "react-native";

import { UserInfoContainer } from "../components/UserInfoContainer";
import { WeatherContainer } from "../components/WeatherContainer";
import { TodoContainer } from "../components/TodoContainer";
import { Footer } from "../components/Footer";

export const Home = ({ navigation }) => {
  return (
    <>
      <View style={styles.container}>
        <View style={{ height: "90%" }}>
          <ScrollView>
            <UserInfoContainer />
            <TodoContainer />
            <WeatherContainer />
          </ScrollView>
        </View>
      </View>
      <Footer navigation={navigation} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 10,
  },
});
