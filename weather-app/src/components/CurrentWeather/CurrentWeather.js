import React from 'react'
import { Link } from 'react-router-dom'
import withHoc from './CurrentWeatherHoc'
import Hour from '../Hour'

const CurrentWeather = ({ weather = [], degrees = {}, cityName, classes }) => {
    return (
        <div className={classes.root}>
            <Hour component={<Link to={`/forecast/${cityName}`}>Прогноз на 5 дней</Link>} cityName={cityName} weather={weather} degrees={degrees} />
        </div>
    )
}

export default withHoc(CurrentWeather)