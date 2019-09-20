import {
  FIVE_DAY_FORECAST_LOADING,
  FIVE_DAY_FORECAST_ERROR,
  FIVE_DAY_FORECAST_SUCCESS,
  CURRENT_WEATHER_ERROR,
  CURRENT_WEATHER_SUCCESS,
  CURRENT_WEATHER_LOADING,
  CITY_LIST_ERROR,
  CITY_LIST_LOADING,
  CITY_LIST_PUSH,
  CITY_LIST_REMOVE
} from "./actionTypes";

function fiveDayForecastLoading() {
    return {
        type: FIVE_DAY_FORECAST_LOADING,
    }
}

function fiveDayForecastError(err) {
    return {
        type: FIVE_DAY_FORECAST_ERROR,
        payload: err
    }
}

function fiveDayForecastSuccess(days) {
    return {
        type: FIVE_DAY_FORECAST_SUCCESS,
        payload: days
    }
}

function removeCity(idx) {
    return {
        type: CITY_LIST_REMOVE,
        payload: idx
    }
}

function currentWeatherError(err) {
    return {
        type: CURRENT_WEATHER_ERROR,
        payload: err
    }
}

function currentWeatherSuccess(day) {
    return {
        type: CURRENT_WEATHER_SUCCESS,
        payload: day
    }
}

function currentWeatherLoading() {
    return {
        type: CURRENT_WEATHER_LOADING,
    }
}

function cityPush(cityName) {
    return {
        type: CITY_LIST_PUSH,
        payload: cityName
    }
}

function cityLoading() {
    return {
        type: CITY_LIST_LOADING
    }
}

function cityError(err) {
    return {
        type: CITY_LIST_ERROR,
        payload: err
    }
}
export {
    fiveDayForecastLoading,
    fiveDayForecastError,
    fiveDayForecastSuccess,
    currentWeatherError,
    currentWeatherLoading,
    currentWeatherSuccess,
    cityError,
    cityLoading,
    cityPush,
    removeCity,
}