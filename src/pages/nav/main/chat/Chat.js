import React, { Component } from 'react'
import { Flex, Button, Modal } from 'antd-mobile'
import Chating from '../../../chating/Chating'

const alert = Modal.alert;

export default class Chat extends Component {
    constructor() {
        super()
        this.state = {
            display: 'block',
            div_display: 'none'
        }
    }
    render() {
        return (
            <div style={{ height: '100%' }}>
                <Flex justify='center' align='center' style={{ height: '100%', width: '100%', backgroundColor: '#f2f2f2', display: this.state.display }}>
                    <Flex direction='column' style={{ height: '100%',backgroundColor: '#fff', paddingTop: '100px' }}>
                        <div style={{ width: '200px', height: '200px' }}><img style={{ width: '200px', height: '200px' }}
                            src={require('../../../../assets/images/avatar.jpg').default} alt="" /></div>
                        <p style={{ margin: '20px 0 0 0 ' }}>置业顾问：<span style={{ color: '#108EE9', fontSize: "20px", fontWeight: 'bold' }}>张小妹</span></p>
                        <p style={{ margin: '0' }}>专业服务诚信做人诚信做事</p>
                        <Button onClick={this.btn_C.bind(this)} style={{ margin: '20px 0 0 0 ', padding: '0 15px' }} type='primary'>我要聊天</Button>
                    </Flex>
                </Flex>
            </div>
        )
    }

    btn_C() {
        if (localStorage.getItem('acc')) return this.props.history.push('/chating')
        return alert('您还没有登录', '现在就去吗？', [
            { text: '取消', onPress: () => { return } },
            {
                text: '确定', onPress: () => {
                    this.props.history.push('/login')
                }
            },
        ])
    }
}
