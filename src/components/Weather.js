import React from 'react';
import { useSelector } from 'react-redux';

const Weather = ({ city }) => {
    const weatherData = useSelector(state => state.weather.weatherData[city])
    if (!weatherData) {
      return null; // or render a loading spinner or message
  }
    return (
      <div>
      <h2>{weatherData.name}</h2>
      <p>Temperature: {weatherData.main.temp} °C</p>
  </div>
      );
}


export default Weather;

// EXAMPLE PAYLOAD DATA
/*
{
  "London": {
    "name": "London",
    "main": {
      "temp": 15.5,
      "feels_like": 14.5,
      "temp_min": 14,
      "temp_max": 17,
      "pressure": 1012,
      "humidity": 87
    },
    "weather": [
      {
        "id": 300,
        "main": "Drizzle",
        "description": "light intensity drizzle",
        "icon": "09d"
      }
    ],
    "wind": {
      "speed": 4.1,
      "deg": 80
    },
    // Additional data...
  }
  // Data for other cities...
}




*/