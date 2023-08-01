import { StyleSheet, View, Text } from "react-native";

export const LoginTitle = () => {
  return (
    <>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>하이바</Text>
        <Text style={styles.slogan}>국군장병을 위한 모든 것</Text>
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
  },

  title: {
    fontFamily: "BlackHanSans",
    fontSize: 70,
  },

  slogan: {
    fontFamily: "NanumPen",
    fontSize: 25,
  },
});
