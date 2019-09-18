import {connect} from 'react-redux'
import {compose} from 'recompose'
import { getCurrentWeather, getFiveDayForecast, findCity } from '../../actions/actions'
import {cityPush} from '../../actions/actionCreators'
import classes from './styles'

const mapDispathToProps = (dispatch) => {
    return {
        getCurrentWeather: (name) => getCurrentWeather(dispatch, name),
        getFiveDayForecast: (id) => getFiveDayForecast(dispatch, id),
        findCity: (name, cityList) => findCity(dispatch, name, cityList),
        cityPush: (cityList) =>  dispatch(cityPush(cityList))
    }
}

const mapStateToProps = ({ currentWeather, fiveDaysForecast, cityList}) => {
    return {
        currentWeather, fiveDaysForecast, cityList
    }
}

export default compose(connect(mapStateToProps, mapDispathToProps), classes)