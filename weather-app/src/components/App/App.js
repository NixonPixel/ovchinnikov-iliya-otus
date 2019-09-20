import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from '../Home'
import Forecast from '../Forecast'

class App extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/forecast/:cityName" component={Forecast}></Route>
                <Redirect to="/"></Redirect>
            </Switch>
        )
    }
}

export default App