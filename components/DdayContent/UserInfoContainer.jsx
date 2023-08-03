import { StyleSheet, View } from "react-native";

import { NameContainer } from "./NameContainer";
import { DdayContainer } from "./DdayContainer";
import { CalcDayContainer } from "./CalcDayContainer";

export const UserInfoContainer = () => {
  const toDay = new Date();
  const startDay = new Date(2023, 4, 31);
  const endDay = new Date(startDay);
  endDay.setDate(startDay.getDate() + 540);

  const diff = endDay - toDay;
  const diffDay = Math.floor(diff / (1000 * 60 * 60 * 24));

  return (
    <>
      <View style={styles.container}>
        <NameContainer />
        <DdayContainer dDay={diffDay} />
        <CalcDayContainer
          toDay={toDay.toLocaleDateString()}
          startDay={startDay}
          endDay={endDay}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2D2D2D",
    width: "80%",
    height: 500,
    marginTop: 100,
    alignSelf: "center",
    borderRadius: 5,
    flex: 1,
  },
});
