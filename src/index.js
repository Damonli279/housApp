import React, { Component } from 'react'
import ReactDom from 'react-dom'
import 'antd-mobile/dist/antd-mobile.css'
import store from './store/Store'
import { Provider } from 'react-redux'

import App from './App'
import './index.css'
ReactDom.render(<Provider store={ store }><App /></Provider>,document.getElementById('root'))