import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'
import Hour from '../Hour'
import withHoc from './DayHoc'


const Day = ({ day = [{}], classes, cityName = "" }) => {
    const getDayNumber = (dt) => {
        const dayArr = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
        return dayArr[new Date(dt).getDay()]
    }
    const dayName = day[0].hasOwnProperty('dt_txt') ? getDayNumber(day[0].dt_txt) : getDayNumber(new Date().getDay())
    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.dayName} variant="h4">{dayName}</Typography>
                <div className={classes.dayContainer}>
                    {day.map((hour, idx) => {
                        const { dt_txt = '' } = hour
                        const { weather } = hour
                        return (<Hour cityName={cityName} weather={weather} degrees={hour.main} date={dt_txt} key={idx} />)
                    })}
                </div>
            </CardContent>
        </Card>
    )
}
export default withHoc(Day)