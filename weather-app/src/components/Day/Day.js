import React, {useState} from 'react'
import { Typography, MobileStepper, IconButton } from '@material-ui/core'
import { SentimentSatisfiedAlt, SentimentVeryDissatisfied, KeyboardArrowRight, KeyboardArrowLeft } from '@material-ui/icons'
import Hour from '../Hour'
import withHoc from './DayHoc'
import { getTime } from '../../utils/utils'



const Day = ({ day = [{}], classes }) => {

    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = day.length

    
    const getDayNumber = (dt) => {
        const dayArr = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
        return dayArr[new Date(dt).getDay()]
    }

    const renderList = (temp, pressure, humidity, date, description, speed, precipitation) => {
        return (
            <React.Fragment>
                <Typography className={classes.title} variant="h6">Время:{date}</Typography>
                <Typography className={classes.paragraph}>{description} {description.includes('дождь') || description.includes('пасмурно') ? <SentimentVeryDissatisfied className={classes.icon} /> : <SentimentSatisfiedAlt className={classes.icon} />}</Typography>
                <Typography className={classes.paragraph}>Температура: {temp}°</Typography>
                <Typography className={classes.paragraph}>Давление: {pressure} мм рт. ст</Typography>
                <Typography className={classes.paragraph}>Влажность: {humidity}%</Typography>
                <Typography className={classes.paragraph}>Скорость вестра: {speed}м/c</Typography>
            </React.Fragment>
        )
    }
    const hourRender = () =>  {
        let dayRender = []
        if(activeStep > day.length) {
            dayRender = day[0]
            setActiveStep(0)
        } else {
           dayRender = day[activeStep]
        }
        const {dt_txt, main, weather, wind= {}, clouds} = dayRender
        const date = getTime(dt_txt)
        const {speed} = wind
        const { humidity = "", temp = "", pressure = "" } = main
        const { description } = weather[0]
        return <Hour renderList={renderList(temp, pressure, humidity, date, description, speed)}/>
    }

    function handleNext() {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
      }
    
      function handleBack() {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
      }

    const dayName = day[0].hasOwnProperty('dt_txt') ? getDayNumber(day[0].dt_txt) : getDayNumber(new Date().getDay())

    return (
        <div className={classes.root}>
            <Typography className={classes.dayName} variant="h4">{dayName}</Typography>
            <div className={classes.dayContainer}>
                {hourRender()}
            </div>
            <MobileStepper
                style={{maxWidth: '450px', margin: '0 auto'}} 
                activeStep={activeStep} 
                position="static"  
                steps={maxSteps}
                nextButton={<IconButton onClick={handleNext} disabled={activeStep === maxSteps - 1}>Вперёд<KeyboardArrowRight /></IconButton>}
                backButton={<IconButton onClick={handleBack} disabled={activeStep === 0}><KeyboardArrowLeft />Назад</IconButton>}
            />
        </div>
    )
}
export default withHoc(Day)