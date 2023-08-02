import { Text, StyleSheet, View } from "react-native";

export const DdayContainer = ({ dDay }) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.dday}>{`D-${dDay}`}</Text>
        <Text style={styles.sub}>오늘도 파이팅이지 말입니다!</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: "50%",
    borderBottomColor: "black",
    borderBottomWidth: 2,
    // margin: 10,
    marginLeft: 10,
    marginRight: 10,
  },

  dday: {
    fontFamily: "BlackOpsOne",
    fontSize: 60,
  },

  sub: {
    fontFamily: "BlackHanSans",
    fontSize: 20,
  },
});
