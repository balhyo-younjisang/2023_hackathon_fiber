import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { ImagePath } from "../utils/IconPath";

//                        Todo 내용, Check 아이콘을 눌렀을 때 실행되는 이벤트, Todo 아이템의 인덱스
export const TodoItem = ({ todo, onPressCheck, todoIdx }) => {
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => onPressCheck(todoIdx)}>
          <Image source={ImagePath.CHECK} />
        </TouchableOpacity>
        <Text style={styles.todo}>{todo}</Text>
        <View />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 50,
    width: "90%",
    backgroundColor: "beige",
    marginTop: 5,
    borderRadius: 5,
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
    alignSelf: "center",
  },

  todo: {
    width: "80%",
    textAlign: "center",
  },
});
