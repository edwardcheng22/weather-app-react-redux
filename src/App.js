import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchWeather } from './actions/weatherActions';
import Weather from './components/Weather';

// App top level component wraps over all the rest of the components
const App = () => {
  const dispatch = useDispatch();

  const cities = ['London', 'New York', 'Tokyo'];

  /* iterate over cities array and create button for each with
  a unique key identifier for efficient re-rendering
  when a button is clicked, the fetchWeather action is dispatched
  with the city as the argument, and the action will trigger an API call to fetch the weather data
  for the specified city */
  return (
    <div className="App">
      <h1> Weather App </h1>
      {cities.map(city => (
        <button key={city} onClick={() => dispatch(fetchWeather(city))}>
          {city}
        </button>
      ))}
      {cities.map(city=> (
        <Weather key={city} city={city} />
      ))}
    </div>

  )
}

export default App;