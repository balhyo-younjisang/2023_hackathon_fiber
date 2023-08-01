import { ScrollView, StyleSheet, View } from "react-native";

import { TodoContainer } from "../components/TodoContainer";
import { Footer } from "../components/Footer";

export const Home = ({ navigation }) => {
  return (
    <>
      <View style={styles.container}>
        <ScrollView>
          <TodoContainer />
        </ScrollView>
      </View>
      <Footer navigation={navigation} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "90%",
  },
});
