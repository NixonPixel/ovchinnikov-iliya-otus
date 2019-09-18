import OpenWeatherMap from "../services/open-weather-map";
import {
    currentWeatherLoading,
    currentWeatherError,
    currentWeatherSuccess,
    fiveDayForecastLoading,
    fiveDayForecastError,
    fiveDayForecastSuccess,
    cityError,
    cityLoading,
    cityPush
} from "./actionCreators";
import {getAllCityInLocalStorage} from '../utils/utils'

const API_KEY = "90a267c091e9e55c956afe53a7a73e43";

const getCurrentWeather = async (dispatch, name) => {
    dispatch(currentWeatherLoading());
    const weatherApi = new OpenWeatherMap(API_KEY);
    try {
        const weather = await weatherApi.getCityByName(name);
        dispatch(currentWeatherSuccess(weather));
    } catch (e) {
        dispatch(currentWeatherError(e));
    }
};

const getFiveDayForecast = async (dispatch, name) => {
    dispatch(fiveDayForecastLoading());
    const weatherApi = new OpenWeatherMap(API_KEY);
    try {
        const forecast = await weatherApi.getFiveDayForecast(name);
        function getArray(forecastList, n) {
            const res = [];
            forecastList.find(item => {
                const date = new Date(item.dt_txt).getDate();
                const currentDayNumber = new Date().getDate();
                if (date === currentDayNumber + n) {
                    res.push(item);
                }
            });
            return res;
        }
        const daysList = [0, 0, 0, 0, 0, 0];
        daysList.map((item, idx) => {
            daysList[idx] = getArray(forecast.list, idx);
        });
        dispatch(fiveDayForecastSuccess(daysList));
    } catch (e) {
        dispatch(fiveDayForecastError(e));
    }
};


const findCity = async (dispatch, cityName) => {
    dispatch(cityLoading())
    const weatherApi = new OpenWeatherMap(API_KEY);
    try{
        const city = await weatherApi.getCityByName(cityName);
        const cityList = getAllCityInLocalStorage()
        cityList.forEach((city, idx) => {
            if(city === cityName) {
                throw new Error('Такой город уже имеется в списке')
            }
        })
        console.log(cityList.length)
        localStorage.setItem(cityList.length, cityName)
        cityList.push(cityName) 
        dispatch(cityPush(cityList))
    } catch(e) {
        dispatch(cityError(e.message))
        return
    }
    
};



export { getCurrentWeather, getFiveDayForecast, findCity };
