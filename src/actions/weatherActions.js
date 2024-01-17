import axios from 'axios';

// API key for request validation
const API_KEY = '6635bca80995dcdc7ac2173b483095cd';
// url where we're trying to request the data from
const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather';

// action creator for the weather actions, like the start process for fetching data,
// fetching the data success, and fetch data error
export const fetchWeather = city => async dispatch => {
    // returns a async function known as "thunk", the redux middleware
    // allows you to write action creators that returns a function instead of an action
        try {
            // await blocks until the API call is completed, handle the response now
            const response = await axios.get(`${BASE_URL}?q=${city}&APPID=${API_KEY}`)
            let responseData = getWeatherObject(response)
            // we can dispatch another type now with the response data, like fetch data successful
            dispatch({type: "FETCH_WEATHER_SUCCESS", payload: {city, data: responseData}});
        // catch error
        } catch (error) {
            console.log(error);
            dispatch({type: "FETCH_WEATHER_ERROR", payload: error});
        }
    } 

    const getWeatherObject = (response) => {
        const localWeatherObject = {
            min_temp: response.data.main?.temp_min,
            max_temp: response.data.main?.temp_max,
            weatherDescription: response.data.weather?.[0]?.description || 'No description available'
        }

        return localWeatherObject;
    }

//temp_min, temp_max, and weather.description
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