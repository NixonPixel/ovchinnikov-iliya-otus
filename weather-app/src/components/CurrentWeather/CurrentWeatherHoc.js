import {compose} from 'recompose'
import classes from './styles'
import {connect} from 'react-redux'

const mapStateToProps = ({currentWeather}) => {
    const {weather} = currentWeather
    return {
        weather: weather.weather,
        degrees: weather.main
    }
}

export default compose(classes, connect(mapStateToProps))