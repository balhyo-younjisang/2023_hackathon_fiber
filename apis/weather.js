import { WEATHER_API_KEY } from "@env";
import axios from "axios";
import * as Location from "expo-location";

/** 위도와 경도를 인자로 받아 날씨 정보를 반환하는 함수 */
const getWeatherInfo = async (lat, lng) => {
  const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&APPID=${WEATHER_API_KEY}&units=metric`; // 3.0 버전이 작동 X => 2.5 버전 API 사용

  try {
    const { data } = await axios.get(weatherApiUrl);
    //        날씨 id,          도시 이름,  현재 온도,          최저온도,         최고온도
    return [data.weather[0].id, data.name, data.main.temp, data.main.temp_max, data.main.temp_min];
  } catch (e) {
    return null;
  }
};

/** 유저의 위치 정보를 가져와 날씨에 맞는 아이콘의 아이디를 반환하는 함수 */
export const getWeatherAndReturnWeatherIconIdAndCity = async () => {
  const { coords } = await Location.getCurrentPositionAsync();
  const nowWeather = await getWeatherInfo(coords.latitude, coords.longitude);

  const weatherIconId = updateWeatherIconId(nowWeather[0]);

  return [weatherIconId, ...nowWeather.slice(1)];
};

const updateWeatherIconId = (nowWeather) => {
  if (nowWeather >= 200 && nowWeather <= 299) return "thunderstorm";
  else if (nowWeather >= 300 && nowWeather <= 499) return "lightrain";
  else if (nowWeather >= 500 && nowWeather <= 599) return "rain";
  else if (nowWeather >= 600 && nowWeather <= 700) return "snow";
  else if (nowWeather >= 701 && nowWeather <= 771) return "fog";
  else if (nowWeather >= 772 && nowWeather <= 799) return "overcast";
  else if (nowWeather === 800) return "clear";
  else if (nowWeather >= 801 && nowWeather <= 804) return "cloudy";
  else if (nowWeather >= 900 && nowWeather <= 902) return "thunderstorm"
  else if (nowWeather === 903) return "snow"
  else if (nowWeather === 904) return "clear"
  else return "unknown";
};
