import React, { Component } from 'react'
import withHoc from './ForecastHoc'
import { List, ListItem, Typography, Input, Button } from '@material-ui/core'
import Day from '../Day'

class Forecast extends Component {
    state = {
        dayList: [],
        activeDay: 0,
        newCity: ''
    }
    componentDidMount() {
        const { cityName = "" } = this.props.match.params
        if (cityName) {
            this.props.getFiveDayForecast(cityName)
        }
    }

    getDayNumber = (dt) => {
        const dayArr = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
        return dayArr[new Date(dt).getDay()]
    }

    componentDidUpdate(prevProps) {
        if (prevProps.forecast !== this.props.forecast) {
            const arr = []
            this.props.forecast.forEach((day) => {
                arr.push(this.getDayNumber(day[0].dt_txt))
            })
            this.setState({ dayList: arr })
        }
    }

    setActiveDay = (event, idx) => {
        this.setState({ activeDay: idx })
    }

    inputHandler = ({ target }) => {
        if (target.value) {
            const cityName = [target.value[0].toUpperCase(), target.value.slice(1)].join('')
            this.setState({ newCity: cityName })
        }
    }

    addNewCity = () => {
        this.props.getFiveDayForecast(this.state.newCity)
        this.props.history.push(this.state.newCity)
    }

    render() {
        const { cityName = "" } = this.props.match.params
        const { forecast, classes, error, isLoading } = this.props
        const { dayList, activeDay } = this.state
        const content = isLoading ? <div>Загрузка</div> : <Day day={forecast[this.state.activeDay]} />
        return (
            <React.Fragment>
                <header className={classes.header}>
                    <div className={classes.leftBar}>
                        {dayList && <List className={classes.dayList}>{
                            dayList.map((dayName, idx) => {
                                return (
                                    <ListItem
                                        onClick={(event) => this.setActiveDay(event, idx)}
                                        className={classes.dayItem}
                                        button
                                        key={idx}
                                        selected={idx === activeDay}
                                        classes={{ selected: classes.listItemActive }}
                                    >
                                        <Typography variant="overline">{dayName}</Typography>
                                    </ListItem>)
                            })
                        }</List>}
                    </div>
                    <div className={classes.rightBar}>
                        <Input onInput={this.inputHandler} name="newCity" type="text" placeholder="Введите название города" margin="dense" className={classes.inputAddCity} />
                        <Button onClick={this.addNewCity} className={classes.addCityBtn} variant="outlined">Найти</Button>
                    </div>
                </header>
                <div>
                    {error ? <Typography style={{color: 'tomato'}} className={classes.cityName} variant="h3">{error}</Typography> : <Typography className={classes.cityName} variant="h3">{cityName}</Typography>}
                    {
                       error ? '' : content
                    }
                </div>
            </React.Fragment>
        )
    }
}

export default withHoc(Forecast)