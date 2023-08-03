import { Text, View, StyleSheet } from "react-native";

export const CalcDayContainer = ({ toDay, startDay, endDay }) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.currentDay}>{`오늘 : ${toDay}`}</Text>
        <Text
          style={styles.currentDay}
        >{`입대일 : ${startDay.toLocaleDateString()}`}</Text>
        <Text
          style={styles.currentDay}
        >{`전역일 : ${endDay.toLocaleDateString()}`}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: "20%",
    margin: 10,
  },

  currentDay: {
    fontFamily: "BlackOpsOne",
    fontSize: 18,
    color: "white",
  },
});
