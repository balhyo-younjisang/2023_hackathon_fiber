import { StyleSheet, Text, View } from "react-native";
import { Todo } from "./Todo";

export const TodoContainer = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.containerTitle}>Todo</Text>
        <Todo />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d9b99b",
    width: "80%",
    height: 320,
    marginTop: 100,
    alignSelf: "center",
    borderRadius: 5,
  },

  containerTitle: {
    fontFamily: "BlackHanSans",
    fontSize: 28,
    alignSelf: "center",
    margin: 10,
  },
});
