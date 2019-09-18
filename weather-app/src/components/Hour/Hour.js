import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, CardContent, Grid, Card } from '@material-ui/core'
import { Map, SentimentSatisfiedAlt, SentimentVeryDissatisfied } from '@material-ui/icons'
import withHoc from './HourHoc'

const Hour = ({ weather = [], date, degrees = {}, cityName, classes, component }) => {
    const getHour = (currDate) => {
        if (currDate) {
            const date = new Date(currDate)
            const hour = date.getHours() <= 9 ? `0${date.getHours()}` : date.getHours()
            const minutes = date.getMinutes() <= 9  ? `0${date.getMinutes()}` : date.getMinutes()
            return `${hour}:${minutes}`
        } else {
            const date = new Date()
            const hour = date.getHours() <= 9 ? `0${date.getHours()}` : date.getHours()
            const minutes = date.getMinutes() <= 9  ? `0${date.getMinutes()}` : date.getMinutes()
            return `${hour}:${minutes}`
        }
    }
    const { description = "" } = weather.length > 0 && weather[0]
    const { temp, pressure, humidity, temp_min, temp_max } = degrees
    return (
        <div className={classes.root}>
            <Card>
                <CardContent>
                    <Typography className={classes.title} variant="h5">Город:{cityName}<Map className={classes.icon} /></Typography>
                    <Typography className={classes.title} variant="h6">Время:{getHour(date)}</Typography>
                    <Typography className={classes.paragraph}>Сейчас: {description} {description.includes('дождь') || description.includes('пасмурно') ? <SentimentVeryDissatisfied className={classes.icon} /> : <SentimentSatisfiedAlt className={classes.icon} />}</Typography>
                    <Typography className={classes.paragraph}>Температура: {temp}°</Typography>
                    <Typography className={classes.paragraph}>Давление: {pressure}</Typography>
                    <Typography className={classes.paragraph}>Влажность: {humidity}</Typography>
                    <Typography className={classes.paragraph}>Максимальная температура: {temp_max}°</Typography>
                    <Typography className={classes.paragraph}>Минимальная температура: {temp_min}°</Typography>
                    {component}
                </CardContent>
            </Card>
        </div>

    )
}

export default withHoc(Hour)