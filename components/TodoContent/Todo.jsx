import { useState, useEffect } from "react";
import { ScrollView, StyleSheet, TextInput } from "react-native";

import { TodoItem } from "./TodoItem";
import { storeData, getData } from "../../utils/asyncStorage";

export const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");

  /** 완료 버튼을 눌렀을 때 Todo를 추가하는 함수 */
  const handleSubmitTodo = () => {
    const updateTodos = [...todos, todoInput];

    setTodos(updateTodos);
    storeData("todos", updateTodos);
    setTodoInput("");
  };

  /** Check 아이콘을 눌렀을 때 Todo를 삭제하는 함수 */
  const handleCheckTodo = (todoIdx) => {
    const filterdTodo = todos.filter((todoItem, idx) => idx != todoIdx);
    setTodos(filterdTodo);
    storeData("todos", filterdTodo);
  };

  useEffect(() => {
    const getTodosFromStorage = async () => {
      const currentTodos = await getData("todos");
      setTodos(Object.values(currentTodos) || []);
    };

    getTodosFromStorage();
  }, []);

  return (
    <>
      <ScrollView>
        {todos.map((data, idx) => {
          return (
            <TodoItem
              key={idx}
              todo={data}
              onPressCheck={handleCheckTodo}
              todoIdx={idx}
            />
          );
        })}
        <TextInput
          style={styles.addTodo}
          placeholder="할 일을 입력해주세요"
          onSubmitEditing={handleSubmitTodo}
          onChangeText={setTodoInput}
          value={todoInput}
          placeholderTextColor="#C0C0C0"
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  addTodo: {
    height: 50,
    width: "90%",
    backgroundColor: "white",
    marginTop: 5,
    borderRadius: 5,
    textAlign: "center",
    fontSize: 18,
    marginBottom: 10,
    alignSelf: "center",
    color: "#C0C0C0",
  },
});
