import React, { Component, useRef } from 'react'
import { Flex, InputItem, Button, WhiteSpace, TextareaItem,Toast } from 'antd-mobile'


export default class Chating extends Component {

    constructor() {
        super()
        this.state = {
            value: '',
            text: '',
            height: '55',
            msg: [
                { id: 1, name: '张小妹', msg: '爱你哦！亲' },
                { id: 2, name: '我', msg: '在干甚呢' },
                { id: 1, name: '张小妹', msg: '在等你找我呢在等你找我呢在等你找我呢在等你找我呢在等你找我呢在等你找我呢在等你找我呢在等你找我呢在等你找我呢在等你找我呢在等你找我呢在等你找我呢' },
                { id: 2, name: '我', msg: '那么着急吗' },
                { id: 1, name: '张小妹', msg: '对啊' }
            ],
            rows: 1
        }
    }
    render() {
        return (
            <Flex direction='column' style={{ height: '100%', width: '100%' }}>
                <Flex justify='start' style={{ height: '40px', width: '100%', borderBottom: '1px solid #f2f2f2' }}>
                    <img onClick={() => this.props.history.push('/')} style={{ height: '20px', width: '20px', margin: '0 10px' }}
                        src={require('../../assets/images/icon_back.png').default} alt="" />
                    <h3>张小妹</h3>
                </Flex>
                <div style={{ height: '100%', width: '100%', margin: "10px 10px", color: '#fff',overflow:'scroll' }}>
                    {
                        this.state.msg.map((item, i) => {
                            if (item.id == 2) {
                                return <Flex justify='end' align='start' key={i} style={{ margin: '5px', width: '100%' }}>
                                    <Flex justify='end' style={{ marginRight: '10px', maxWidth: '60%', backgroundColor: '#33A3F4', padding: '5px', borderRadius: '10px' }}>{item.msg}</Flex>
                                    <Flex justify='center' style={{ width: '60px', padding: '5px 0', backgroundColor: 'red', borderRadius: '10px' }}>{item.name}</Flex>
                                </Flex>
                            }
                            return <Flex justify='start' align='start' key={i} style={{ margin: '5px', width: '100%' }}>
                                <Flex justify='center' style={{ marginRight: '10px', width: '60px', padding: '5px 0', backgroundColor: 'red', borderRadius: '10px' }}>{item.name}</Flex>
                                <Flex style={{ maxWidth: '60%', backgroundColor: '#33A3F4', padding: '5px', borderRadius: '10px' }}>{item.msg}</Flex>
                            </Flex>
                        })
                    }
                </div>
                <Flex align='end' style={{ width: '100%', height: this.state.height + 'px', padding: '5px', backgroundColor: '#CCC' }}>
                    <div style={{ minHeight: '45px', maxHeight: '100px', width: '100%', border: '1px solid #108EE9', margin: '0 10px' }}>
                        {/* <InputItem style={{ minHeight: '48px', width: '100%' }} value={this.state.value}
                            onChange={val => this.setState({ value: val })}
                        /> */}
                        <TextareaItem style={{ wordWrap: 'break-word', overflow: 'hidden', maxHeight: '75px' }}
                            value={this.state.value}
                            onChange={this.valchange.bind(this)}
                            ref='a'
                            onKeyDown={this.send.bind(this,this.state.value)}
                            autoHeight
                            count={100}
                        />
                    </div>
                    <div style={{ width: '80px' }}><Button onClick={this.addmsg.bind(this, this.state.value)} style={{ fontSize: '16px' }} type='primary'>发送</Button></div>
                </Flex>
            </Flex>
        )
    }

    valchange(val) {
        this.setState({ value: val })
        if(this.state.value.length >= 99) Toast.info('最多输入100个字符', 2);
        
        let height = this.refs.a.textareaRef.offsetHeight
        if (height == 25) this.setState({ height: 55 })
        if (height == 50) this.setState({ height: 90 })
        if (height == 75) this.setState({ height: 125 })
    }

    send(val,e) {
        if (e.which != 13) return
        let height = this.refs.a.textareaRef.offsetHeight
        if (height == 25) this.setState({ height: 55 })
        if (height == 50) this.setState({ height: 90 })
        if (height == 75) this.setState({ height: 125 })
    }

    addmsg(val) {
        var arr = this.state.msg
        this.setState({ height: 55 })
        if (val) {
            this.setState({
                msg: [...arr, { id: 2, name: '我', msg: val }],
                value: ''
            })
        }
    }

    // changeVal(val){
    //     console.log(val);

    // }

}
