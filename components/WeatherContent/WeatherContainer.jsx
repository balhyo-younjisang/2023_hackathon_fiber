import { StyleSheet, Text, View } from "react-native";
import { useState, useEffect } from "react";

import { getWeatherAndReturnWeatherIconIdAndCity } from "../../apis/weather";
import { Weather } from "./Weather";

export const WeatherContainer = () => {
  const [weather, setWeather] = useState("");
  const [city, setCity] = useState("");
  const [temp, setTemp] = useState("");
  const [minTemp, setMinTemp] = useState("");
  const [maxTemp, setMaxTemp] = useState("");

  useEffect(() => {
    const getWeather = async () => {
      const weatherInfo = await getWeatherAndReturnWeatherIconIdAndCity();

      const [currentWeather, currentCity, currentTemp, maxTemp, minTemp] =
        weatherInfo;

      setWeather(currentWeather);
      setCity(currentCity);
      setTemp(Math.ceil(currentTemp * 10) / 10);
      setMaxTemp(Math.ceil(maxTemp * 10) / 10);
      setMinTemp(Math.ceil(minTemp * 10) / 10);
    };

    getWeather();
  }, []);

  return (
    <>
      <View style={styles.container}>
        <Weather path={weather.toUpperCase()} />
        <Text style={styles.city}>{city}</Text>
        <View style={styles.WeatherInfo}>
          <Text style={styles.InfoText}>{`현재 기온은 ${temp}℃입니다.`}</Text>
          <Text style={styles.InfoText}>{`최고 기온 : ${maxTemp}℃`}</Text>
          <Text style={styles.InfoText}>{`최저 기온 : ${minTemp}℃`}</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0E3773",
    width: "80%",
    height: 190,
    marginTop: 100,
    alignSelf: "center",
    borderRadius: 5,
    marginBottom: 30,
  },

  city: {
    fontFamily: "BlackHanSans",
    alignSelf: "center",
    fontSize: 18,
    color: "white",
  },

  WeatherInfo: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 10,
    marginBottom: 10,
  },

  InfoText: {
    fontFamily: "NanumPen",
    fontSize: 20,
    color: "white",
  },
});
