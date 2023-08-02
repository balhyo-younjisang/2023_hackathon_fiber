import { StyleSheet, View, Text, Image } from "react-native";

export const LoginTitle = () => {
  return (
    <>
      <View style={styles.titleContainer}>
        <Image source={require("../assets/icons/LoginScreenIcon.png")} />
        <Text style={styles.title}>하이바</Text>
        {/* <Text style={styles.title}>하이바</Text>
        <Text style={styles.slogan}>국군장병을 위한 모든 것</Text> */}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flex: 0.5,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },

  title: {
    fontFamily: "BlackHanSans",
    fontSize: 40,
    marginTop: 20,
  },

  slogan: {
    fontFamily: "NanumPen",
    fontSize: 25,
  },
});
