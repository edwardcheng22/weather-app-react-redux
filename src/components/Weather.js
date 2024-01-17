import React from 'react';
import { useSelector } from 'react-redux';

const Weather = ({  }) => {
    const currentWeather = useSelector(state => state.weather.currentWeather);
    if (!currentWeather) {
      return <p>Click a city to view its weather</p>; // or render a loading spinner or message
  }


    return (
      <div>
      <h2>{currentWeather.city}</h2>
      <p>Minimum Temperature: {currentWeather.data.min_temp} °C</p>
      <p>Maximum Temperature: {currentWeather.data.max_temp} °C</p>
      <p>Weather Description: {currentWeather.data.weatherDescription}</p>
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