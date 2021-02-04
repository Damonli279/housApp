import React, { Component } from 'react'
import { HashRouter,Switch,Route } from 'react-router-dom'
import Main from './main'
import Login from './pages/login/Login'
import ShopCar from './ShopCar'

export default class Router extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path='/' exact component='Login' />
                    <Route path='/main' component='Main' />
                    <Route path='/shopcar' component='ShopCar' />
                    <Route component='Login' />
                </Switch>
            </HashRouter>
        )
    }
}
