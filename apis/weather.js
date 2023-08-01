import { WEATHER_API_KEY } from "@env";
import axios from "axios";
import * as Location from "expo-location";

/** 위도와 경도를 인자로 받아 날씨 정보를 반환하는 함수 */
const getWeatherInfo = async (lat, lng) => {
    const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${WEATHER_API_KEY}`; // 3.0 버전이 작동 X => 2.5 버전 API 사용

    try {
        const { data } = await axios.get(weatherApiUrl);
        console.log(data.weather[0]);
        return data.weather[0].main
    } catch (e) {
        console.log(`weather api error : ${e}`);
    }
}

/** 유저의 위치 정보를 가져와 날씨에 맞는 아이콘의 아이디를 반환하는 함수 */
export const getWeatherAndReturnWeatherIconId = async () => {
    const { coords } = await Location.getCurrentPositionAsync();
    const nowWeather = await getWeatherInfo(coords.latitude, coords.longitude);
    const weatherIconId = updateWeatherIconId(nowWeather);

    return weatherIconId;
}

const updateWeatherIconId = (nowWeather) => {
    if (nowWeather >= 200 && nowWeather <= 299) return "thunderstorm";

}
