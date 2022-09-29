import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

const WeatherContext = createContext();

const WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather";
const WEATHER_API = "16e5bff77bbc0aac3d8e9cdaca33c3f4";

export const WeatherProvider = ({ children }) => {
  const [weatherdata, setWeatherData] = useState(null);

  const getWeatherDetails = (cityName) => {
    axios
      .get(`${WEATHER_URL}?q=${cityName}&appid=${WEATHER_API}`)
      .then((response) => {
        console.log("data", response.data);
        setWeatherData(response.data);
      });
  };

  useEffect(() => {
    getWeatherDetails("islamabad");
  }, []);

  return (
    <WeatherContext.Provider
      value={{
        weatherdata,
        handleSearch: getWeatherDetails,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContext;
