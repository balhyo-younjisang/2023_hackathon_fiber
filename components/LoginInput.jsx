import { TextInput, StyleSheet } from "react-native";

export const LoginInput = (props) => {
  return (
    <TextInput
      style={styles.loginInput}
      placeholder={props.placeholder}
      secureTextEntry={props.security}
      onChangeText={props.onChange}
    />
  );
};

const styles = StyleSheet.create({
  loginInput: {
    height: 60,
    width: 250,
    margin: 10,
    borderBottomWidth: 1,
    padding: 10,
    textAlign: "center",
    borderRadius: 5,
    fontFamily: "BlackHanSans",
  },
});
