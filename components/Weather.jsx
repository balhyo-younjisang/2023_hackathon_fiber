import { ImagePath } from "../utils/IconPath";
import { View, Image, StyleSheet } from "react-native";

export const Weather = ({ path }) => {
  return (
    <>
      <View style={styles.weatherContainer}>
        <Image source={ImagePath[path]}></Image>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  weatherContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10,
    height: 60,
  },
});
