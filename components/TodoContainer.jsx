import { StyleSheet, View } from "react-native";
import { useState, useEffect } from "react";
import { getWeatherAndReturnWeatherIconId } from "../apis/weather";

export const TodoContainer = () => {
  const [weather, setWeather] = useState("");

  useEffect(() => {
    setWeather(getWeatherAndReturnWeatherIconId());
  }, []);

  console.log(weather);
  return (
    <>
      <View style={styles.container}>
        {/* Weather */}
        <View></View>
        {/* Todo */}
        <View></View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DADADA",
    width: "80%",
    height: 300,
    marginTop: 100,
    alignSelf: "center",
    borderRadius: 5,
  },
});
