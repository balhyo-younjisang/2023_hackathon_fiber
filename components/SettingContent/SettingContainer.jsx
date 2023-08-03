import { View, Text, StyleSheet } from "react-native";
import { LogoutButton } from "./LogoutButton";

export const SettingContainer = ({ userInfo, navigation }) => {
  return (
    <>
      <View style={styles.background}></View>
      <View style={styles.backgroundWhiteSpace} />
      <View style={styles.container}>
        <View style={styles.box}>
          <View style={styles.nameWrap}>
            <Text style={styles.userName}>{userInfo}</Text>
          </View>
          <LogoutButton navigation={navigation} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: "80%",
  },

  box: {
    backgroundColor: "#DADADA",
    width: "80%",
    height: 300,
    marginTop: 110,
    borderRadius: 5,
    alignItems: "center",
  },

  nameWrap: {
    marginTop: 20,
  },

  userName: {
    fontFamily: "BlackHanSans",
    fontSize: 20,
  },

  background: {
    width: "100%",
    height: 300,
    zIndex: -10,
    elevation: -10,
    position: "absolute",
    backgroundColor: "#0E3773",
  },

  backgroundWhiteSpace: {
    width: "100%",
    height: 110,
    marginTop: 200,
    zIndex: -10,
    elevation: -10,
    position: "absolute",
    borderTopLeftRadius: 600,
    borderTopRightRadius: 600,
    backgroundColor: "#F5F5F5",
    transform: [{ scaleX: 1 }],
  },
});
