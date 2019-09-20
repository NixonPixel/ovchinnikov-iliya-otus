import currentWeather from './currentWeather'
import fiveDaysForecast from './fiveDaysForecast'
import cityList from './cityList'

const reducer = (state, action) => {
    return {
       currentWeather: currentWeather(state, action),
       fiveDaysForecast: fiveDaysForecast(state, action),
       cityList: cityList(state, action)
    }
}

export default reducer;

