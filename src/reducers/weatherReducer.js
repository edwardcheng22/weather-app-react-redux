// what the initial state looks like when the app starts
const initialState = {
    currentWeather: null,
    error: null
}
// reducer function that specifies how the app's state changes in response to 
// actions sent to the store, the actions are objects representing a redux action
export default function weatherReducer(state = initialState, action) {
    switch (action.type) {
        case 'FETCH_WEATHER_SUCCESS': 
            // ...state preserves the existing weather data, then we have a weatherData object
            // with the city as the key/property with the actual weather data as the value 
            return {
                ...state, 
                currentWeather: {
                    city: action.payload.city,
                    data: action.payload.data
                }
            };
        case 'FETCH_WEATHER_FAILURE':
            // the payload will contain information about the error
            return {...state, error: action.payload};

        default: 
            return state;
    }
}



