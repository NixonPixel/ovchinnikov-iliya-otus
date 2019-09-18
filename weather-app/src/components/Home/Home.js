import React, { Component } from 'react'
import withHoc from './HomeHoc'
import { getAllCityInLocalStorage } from '../../utils/utils'
import CurrentWeather from '../CurrentWeather'
import CityList from '../CityList'
import { Input, Button, } from '@material-ui/core'

class Home extends Component {
    state = {
        selectedListItem: 0,
        newCity: ""
    }
    componentDidMount() {
        const cityList = getAllCityInLocalStorage()
        if (cityList.length === 0) {
            localStorage.setItem(0, 'Москва')
            cityList.push('Москва')
        }
        this.props.getCurrentWeather(cityList[this.state.selectedListItem])
        this.props.cityPush(cityList)
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.selectedListItem !== this.state.selectedListItem) {
            this.props.getCurrentWeather(this.props.cityList.list[this.state.selectedListItem])
        }
    }
    handleListItemClick = (event, idx) => {
        this.setState({ selectedListItem: idx })
    }
    fintCity = () => {
        this.props.findCity(this.state.newCity)
    }
    inputHandler = ({ target }) => {
        if (target.value) {
            const cityName = [target.value[0].toUpperCase(), target.value.slice(1)].join('')
            this.setState({ newCity: cityName })
        }
    }
    render() {
        const { classes, findCity, cityList } = this.props
        return (
            <div className={classes.root}>
                <header className={classes.header}>
                    <div className={classes.leftBar}>
                        <CityList handleListItemClick={this.handleListItemClick} selected={this.state.selectedListItem} cityList={cityList.list} />
                    </div>
                    <div className={classes.rightBar}>
                        <Input onInput={this.inputHandler} name="newCity" type="text" placeholder="Введите название города" margin="dense" className={classes.inputAddCity} />
                        <Button onClick={() => findCity(this.state.newCity, cityList.list)} className={classes.addCityBtn} variant="outlined">Найти</Button>
                    </div>
                </header>
                <div className={classes.main}>
                    <CurrentWeather cityName={cityList.list[this.state.selectedListItem]} ></CurrentWeather>
                </div>
            </div>
        )
    }
}

export default withHoc( Home )