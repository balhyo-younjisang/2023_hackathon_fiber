import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { loadingFont } from "../../utils/LoadingFonts";

export const LoginButton = (props) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    loadingFont().then(() => {
      setIsReady(true);
    });
  }, []);

  return (
    <>
      {isReady && (
        <TouchableOpacity style={style.loginBtn} onPress={props.onClick}>
          <Text style={style.loginText}>{props.title}</Text>
        </TouchableOpacity>
      )}
    </>
  );
};

const style = StyleSheet.create({
  loginBtn: {
    marginTop: 20,
    width: 250,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#058C44",
    padding: 10,
    borderRadius: 5,
  },

  loginText: {
    color: "white",
    fontFamily: "BlackHanSans",
    fontSize: 30,
  },
});
