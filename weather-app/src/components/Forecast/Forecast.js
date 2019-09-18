import React, {Component} from 'react'
import OpenWeatherMap from '../../services/open-weather-map'
import withHoc from './ForecastHoc'
import Day from '../Day'
import classes from '../Home/styles'

class Forecast extends Component {
    componentDidMount() {
        const {cityName = ""} = this.props.match.params
        if(cityName) {
            this.props.getFiveDayForecast(cityName)
        }
    }
    render() {
        const {cityName = ""} = this.props.match.params
        const {forecast, classes} = this.props
        return (
            <React.Fragment>
                <header className={classes.header}>
                    
                </header>
                {forecast.map((day, idx) => {
                    return <Day key={idx} cityName={cityName} day={day} />
                })}
            </React.Fragment>
        )
    }
}

export default withHoc(Forecast)