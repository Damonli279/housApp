import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Flex, List, InputItem, Button, WingBlank, WhiteSpace,Toast } from 'antd-mobile'
import { connect } from 'react-redux'
import imgUrl from '../../assets/images/1.jpg'
import './login.css'

class Login extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            _name: '',
            pwd: '',
            _pwd: '',
            loading: false,
            icon_user: require('../../assets/images/icon_user.png').default,
            icon_pwd: require('../../assets/images/icon_user.png').default
        }
    }

    render() {
        let { name, pwd, icon_user, icon_pwd, loading } = this.state
        return (
            <div id="login">
                {/* <Link to='/reg'>去注册</Link> */}
                <div className="logo_div">
                    <img className="logo" src={imgUrl} alt="" />
                </div>
                <WingBlank>
                    <WhiteSpace />
                    <WhiteSpace />
                    <WhiteSpace />
                    <WhiteSpace />
                    <InputItem
                        clear
                        onChange={(val) => {
                            this.setState({
                                name: val
                            })
                        }}
                        value={name}
                        placeholder="请输入用户名"
                    >
                        <div style={{ backgroundImage: `url(${icon_user})`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
                    </InputItem>
                    <InputItem
                        clear
                        type="password"
                        onChange={(val) => {
                            this.setState({
                                pwd: val
                            })
                        }}
                        value={pwd}
                        placeholder="请输入密码"
                    >
                        <div style={{ backgroundImage: `url(${icon_pwd})`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
                    </InputItem>
                    <WhiteSpace />
                    <WhiteSpace />
                    <WhiteSpace />
                    <Button loading={loading} type="primary" onClick={this.toMain.bind(this)}>
                        登录
                    </Button>
                    <WhiteSpace />
                    <WhiteSpace />
                    <Flex justify="between">
                        <Link to='/reg'>手机快速注册</Link>
                        <Link to='/appeal'>忘记密码</Link>
                    </Flex>
                </WingBlank>
                <Flex className="login_ub" justify="center">
                    登录/注册即代表同意《I住房产用户协议》
                </Flex>
            </div>
        )
    }

    toMain() {

        let { name, pwd, _name, _pwd } = this.state
        if(name == '' && pwd == '') return Toast.info('用户名或密码错误', 1);
        if (name && pwd) {
            if (name == _name && pwd == _pwd) return 
            this.setState({
                loading: true
            })
            _name = name;
            _pwd = pwd;
            this.props.dispatch({
                type: 'changename',
                name
            })
            this.timer = setTimeout(() => {
                this.props.history.push('/')
            }, 2000)
        }
        localStorage.setItem('acc', name)
    }

}

function filter(state) {
    return {
        name: state.name
    }
}

export default connect(filter)(Login)
