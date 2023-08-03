import { View, Image, Text, StyleSheet } from "react-native";
import { ImagePath } from "../../utils/IconPath";

const LunchImage = () => {
  return (
    <>
      <Image source={ImagePath.LUNCH} style={styles.icon} />
    </>
  );
};

export const MenuHeader = ({ sumCal }) => {
  return (
    <>
      <View style={styles.header}>
        <LunchImage />
        <View>
          <Text style={styles.title}>내일의 메뉴</Text>
          <Text style={styles.kcal}>총 칼로리 : {sumCal}</Text>
        </View>
        <LunchImage />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    backgroundColor: "#E7E5E5",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
  },
  title: {
    fontFamily: "BlackHanSans",
    fontSize: 30,
    fontWeight: "bold",
  },
  kcal: {
    fontFamily: "BlackHanSans",
    fontSize: 10,
    alignSelf: "center",
    marginTop: 5,
  },
});
