import {
    FIVE_DAY_FORECAST_LOADING,
    FIVE_DAY_FORECAST_ERROR,
    FIVE_DAY_FORECAST_SUCCESS,
} from "../actions/actionTypes";
import { fiveDayForecastSuccess } from "../actions/actionCreators";

const fiveDaysForecast = (state, action) => {
    if (state === undefined) {
        return {
            isLoading: true,
            error: '',
            forecast: []
        }
    }

    switch (action.type) {
        case FIVE_DAY_FORECAST_LOADING:
            return {
                isLoading: true,
                error: '',
                forecast: []
            }
        case FIVE_DAY_FORECAST_ERROR:
            console.log(action.payload)
            return {
                isLoading: false,
                error: action.payload,
                forecast: []
            }
        case FIVE_DAY_FORECAST_SUCCESS:
            return {
                isLoading: false,
                error: '',
                forecast: action.payload
            }
        default:
            return state.fiveDaysForecast
    }
}

export default fiveDaysForecast