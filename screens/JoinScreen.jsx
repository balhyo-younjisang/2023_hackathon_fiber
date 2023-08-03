import { View, StyleSheet, Text } from "react-native";
import { useState, useEffect } from "react";
import { loadingFont } from "../utils/LoadingFonts";

import { signUp } from "../apis/auth";

import { LoginTitle } from "../components/LoginContent/LoginTitle";
import { LoginButton } from "../components/LoginContent/LoginButton";
import { LoginInput } from "../components/LoginContent/LoginInput";

export const Join = ({ navigation }) => {
  const [isReady, setIsReady] = useState(false);
  const [inputEmail, handleChangeEmail] = useState("");
  const [inputName, handleChangeName] = useState("");
  const [inputPassword, handleChangePassword] = useState("");
  const [inputConfirmPassword, handleChangeConfirmPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState();

  /** 회원가입 버튼을 클릭했을 때 작동하는 함수 */
  const postJoin = async () => {
    if (inputPassword != inputConfirmPassword) return;

    const signUpResult = await signUp(inputEmail, inputPassword, inputName);

    if (signUpResult) {
      setErrorMsg(signUpResult.data);
      return;
    }

    handleChangePassword("");
    handleChangeConfirmPassword("");

    navigation.navigate("Login");
  };

  useEffect(() => {
    loadingFont().then(() => {
      setIsReady(true);
    });
  }, []);

  return (
    <View style={styles.container}>
      {isReady && (
        <>
          <LoginTitle />
          <View style={styles.buttonContainer}>
            <LoginInput
              placeholder="이름을 입력해주세요"
              onChange={handleChangeName}
              value={inputName}
            />
            <LoginInput
              placeholder="이메일을 입력해주세요"
              onChange={handleChangeEmail}
              value={inputEmail}
            />
            <LoginInput
              placeholder="비밀번호를 입력해주세요"
              onChange={handleChangePassword}
              value={inputPassword}
              security={true}
            />
            <LoginInput
              placeholder="비밀번호를 확인해주세요"
              onChange={handleChangeConfirmPassword}
              value={inputConfirmPassword}
              security={true}
            />
            {errorMsg && <Text style={styles.error}>{errorMsg}</Text>}
            <LoginButton title="회원가입" onClick={postJoin} />
            <Text
              onPress={() => navigation.navigate("Login")}
              style={styles.nav}
            >
              로그인 &rarr;
            </Text>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },

  buttonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  loginBtn: {
    backgroundColor: "058C44",
  },
  nav: {
    fontFamily: "NanumPen",
    fontSize: 19,
    marginTop: 10,
  },
  error: {
    fontFamily: "BlackHanSans",
    color: "red",
  },
});
