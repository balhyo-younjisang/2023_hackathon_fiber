import { View, StyleSheet, Text } from "react-native";
import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";

import { LoginTitle } from "../components/LoginContent/LoginTitle";
import { LoginButton } from "../components/LoginContent/LoginButton";
import { LoginInput } from "../components/LoginContent/LoginInput";

import { signIn } from "../apis/auth";
import { currentUserInfo } from "../store/atom";
import { storeData } from "../utils/asyncStorage";

export const Login = ({ navigation }) => {
  const [inputEmail, handleChangeEmail] = useState("");
  const [inputPassword, handleChangePassword] = useState("");
  const [currentUser, setCurrentUser] = useRecoilState(currentUserInfo);
  const [errorMsg, setErrorMsg] = useState();

  /** 로그인 버튼을 클릭했을 때 작동하는 함수 */
  const postLogin = async () => {
    if (inputEmail == "" || inputPassword.length < 6) {
      setErrorMsg("입력이 올바르지 않습니다. 비밀번호는 6자리 이상");
      return;
    }

    const result = await signIn(inputEmail, inputPassword);
    handleChangePassword("");

    if (!result.data.userName) {
      setErrorMsg(result.data);
    } else {
      setCurrentUser(result.data.userName);
      storeData("user", result.data.userName);
      navigation.navigate("Home");
    }
  };

  return (
    <View style={styles.container}>
      <LoginTitle />
      <View style={styles.buttonContainer}>
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
        {errorMsg && <Text style={styles.error}>{errorMsg}</Text>}
        <LoginButton title="로그인" onClick={postLogin} />
        <Text onPress={() => navigation.navigate("Join")} style={styles.nav}>
          회원가입 &rarr;
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },

  buttonContainer: {
    // flex: 1,
    borderRadius: 5,
    marginTop: 60,
    alignItems: "center",
    justifyContent: "space-around",
    borderWidth: 1,
    width: "80%",
    height: 400,
    borderColor: "#DADADA",
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
