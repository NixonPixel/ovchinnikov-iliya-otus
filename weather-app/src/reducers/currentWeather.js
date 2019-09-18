import {
    CURRENT_WEATHER_ERROR,
    CURRENT_WEATHER_SUCCESS,
    CURRENT_WEATHER_LOADING
  } from "../actions/actionTypes";

const currentWeather = (state, action) => {
    if(state === undefined) {
        return {
            isLoading: false,
            error: '',
            weather: {}
        }
    }
    switch(action.type) {
        case CURRENT_WEATHER_ERROR : 
            return {
                isLoading: false,
                error: action.payload,
                weather: {}
            }
        case CURRENT_WEATHER_LOADING : 
            return {
                isLoading: true,
                error: '',
                weather: {}
            }
        case CURRENT_WEATHER_SUCCESS : 
            return {
                isLoading: false,
                error: '',
                weather: action.payload
            }
        default : 
            return state.currentWeather
    }
}

export default currentWeather