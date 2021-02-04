import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Flex,InputItem, WhiteSpace, Button } from 'antd-mobile'
import { connect } from 'react-redux'


import './Reg.css'
class Reg extends Component {
    constructor() {
        super()
        this.state = {
            tele: '',
            pwd: '',
            code: '',
            flag: false,
            selectUrl: require('../../assets/images/icon_select_s.png').default
        }
    }
    componentDidMount(){
        
    }
    render() {
        let { tele, pwd, code, selectUrl } = this.state
        return (
            <div className="reg">
                <div className="reg_div" style={{ padding: '20px 20px', backgroundColor: '#fff', height: "100%" }}>
                    <InputItem
                        clear
                        type="text"
                        onChange={(val) => {
                            this.setState({
                                tele: val
                            })
                        }}
                        value={tele}
                        placeholder="请输入手机号"
                    >
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
                    </InputItem>
                    <InputItem
                        clear
                        type="text"
                        onChange={(val) => {
                            this.setState({
                                code: val
                            })
                        }}
                        value={code}
                        placeholder="请输入验证码"
                    >
                        {/* <label style={{ position: 'absolute',top: '0', right: '0' }}>获取验证码</label> */}
                        <label style={{ height: '22px', width: '22px',fontSize: '12px',color: '#BBBBBB' }}>获取验证码</label>
                    </InputItem>
                    <Flex>
                        <img onClick={ this.changeImg.bind(this) } style={{ width: '20px',height: '20px',margin: '20px 15px' }} 
                        src={ selectUrl } alt=""/>
                        <div>我已同意<span style={{ color: '#108EE9' }}>《用户服务协议》及《隐私权政策》</span></div>
                    </Flex>
                    <Button type="primary">
                        注册
                    </Button>
                    <WhiteSpace />
                    <WhiteSpace />
                    <Link to='/login' style={{ color: '#108EE9' }}> 已有账号？去登录</Link>
                </div>
            </div>
        )
    }
    changeImg(){
        this.state.flag = !this.state.flag
        
        if(this.state.flag){
            // this.state.selectUrl = require('../../assets/images/icon_select.png').default
            this.setState({
                selectUrl: require('../../assets/images/icon_select.png').default
            })
        }else{
            // this.state.selectUrl = require('../../assets/images/icon_select_s.png').default
            this.setState({
                selectUrl: require('../../assets/images/icon_select_s.png').default
            })
        }
        
        
    }
}


function filter(state){
    return {
        name: state.name
    }
}

export default connect(filter)(Reg)