import { View, StyleSheet, Text } from "react-native";
import { useState, useEffect } from "react";
import { loadingFont } from "../utils/LoadingFonts";

import { LoginTitle } from "../components/LoginTitle";
import { LoginButton } from "../components/LoginButton";
import { LoginInput } from "../components/LoginInput";

export const Login = ({ navigation }) => {
  const [isReady, setIsReady] = useState(false);
  const [inputEmail, handleChangeEmail] = useState("");
  const [inputPassword, handleChangePassword] = useState("");

  /** 로그인 버튼을 클릭했을 때 작동하는 함수 */
  const postLogin = () => {
    console.log(inputEmail, inputPassword);
    navigation.navigate("Home");
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
            <LoginButton title="로그인" onClick={postLogin} />
            <Text
              onPress={() => navigation.navigate("Join")}
              style={styles.nav}
            >
              회원가입 &rarr;
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
});
