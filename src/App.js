import React, { Component } from 'react'
import { HashRouter,Switch,Route } from 'react-router-dom'
import Nav from './pages/nav/Nav'
import Login from './pages/login/Login'
import Reg from './pages/reg/Reg'
import Appeal from './pages/appeal/Appeal';
import Map from './pages/map/Map'
import Serch from './pages/serch/Serch'
import City from './pages/city/City'
import Chat from './pages/nav/main/chat/Chat'
import Chating from './pages/chating/Chating'



export default class App extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path='/' exact component={Nav} />
                    <Route path='/login' component={Login} />
                    <Route path='/reg' component={Reg} />
                    <Route path='/appeal' component={Appeal} />
                    <Route path='/map' component={Map} />
                    <Route path='/serch' component={Serch} />
                    <Route path='/city' component={City} />
                    <Route path='/chat' component={Chat} />
                    <Route path='/chating' component={Chating} />
                    <Route component='Login' />
                </Switch>
            </HashRouter>
        )
    }
}
