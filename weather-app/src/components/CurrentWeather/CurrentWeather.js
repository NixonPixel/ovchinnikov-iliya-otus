import React from 'react'
import { Typography } from '@material-ui/core'
import { Map, SentimentSatisfiedAlt, SentimentVeryDissatisfied } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import withHoc from './CurrentWeatherHoc'
import Hour from '../Hour'
import { getTime } from '../../utils/utils'

const CurrentWeather = ({ weather = [], wind = {}, degrees = {}, cityName, classes }) => {
    const date = getTime()

    const { description = "" } = weather.length > 0 && weather[0]
    const { temp, pressure, humidity, temp_min, temp_max } = degrees
    const { speed = "" } = wind

    const renderList = (cityName, date, description, temp, pressure, humidity, temp_min, temp_max, speed) => {
        return (
            <React.Fragment>
                <Typography className={classes.title} variant="h5">Город:{cityName}<Map className={classes.icon} /></Typography>
                <Typography className={classes.title} variant="h6">Время:{date}</Typography>
                <Typography className={classes.paragraph}>Сейчас: {description} {description.includes('дождь') || description.includes('пасмурно') || description.includes('облачно') ? <SentimentVeryDissatisfied className={classes.icon} /> : <SentimentSatisfiedAlt className={classes.icon} />}</Typography>
                <Typography className={classes.paragraph}>Температура: {temp}°</Typography>
                <Typography className={classes.paragraph}>Давление: {pressure}</Typography>
                <Typography className={classes.paragraph}>Влажность: {humidity}</Typography>
                <Typography className={classes.paragraph}>Максимальная температура: {temp_max}°</Typography>
                <Typography className={classes.paragraph}>Минимальная температура: {temp_min}°</Typography>
                <Typography className={classes.paragraph}>Скорость ветра: {speed} м/с</Typography>
            </React.Fragment>
        )
    }
    return (
        <div className={classes.root}>
            <Hour
                renderList={renderList(cityName, date, description, temp, pressure, humidity, temp_min, temp_max, speed)}
                date={date}
                component={<Link to={`/forecast/${cityName}`}>Прогноз на 5 дней</Link>} />
        </div>
    )
}

export default withHoc(CurrentWeather)