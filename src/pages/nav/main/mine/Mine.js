import React, { Component } from 'react'
import { Modal,Flex,List,WhiteSpace } from 'antd-mobile'

const alert = Modal.alert;

const Item = List.Item

export default class Mine extends Component {
    constructor() {
        super()
        this.state = {
            islogin: ['登录', '注册'],
            myOption: [{ num: 0, imgsrc: require('../../../../assets/images/wallet.png').default, name: '钱包' },
            { num: 0, imgsrc: require('../../../../assets/images/ticket_integral.png').default, name: '优惠' },
            { num: 0, imgsrc: require('../../../../assets/images/miaojie_discount.png').default, name: '积分' }],
            mySelect: [
                {imgsrc: require('../../../../assets/images/my_icon/jf2.png').default,name: '我的积分'},
                {imgsrc: require('../../../../assets/images/my_icon/my-dy.png').default,name: '我的订阅'},
                {imgsrc: require('../../../../assets/images/my_icon/lxr.png').default,name: '微聊联系人'},
                {},
                {imgsrc: require('../../../../assets/images/my_icon/jsq.png').default,name: '房贷计算器'},
                {imgsrc: require('../../../../assets/images/my_icon/wdfz.png').default,name: '我的房子'},
                {},
                {imgsrc: require('../../../../assets/images/my_icon/jl.png').default,name: '我的看房记录'},
                {imgsrc: require('../../../../assets/images/my_icon/account-filling.png').default,name: '我的问答'},
                {},
                {imgsrc: require('../../../../assets/images/my_icon/icon_set.png').default,name: '设置'},
                {imgsrc: '',name: '意见反馈'},
            ]
        }
    }

    componentDidMount(){
        if(localStorage.getItem('acc')){
            this.setState({
                islogin: [ localStorage.getItem('acc'),'切换用户' ]
            })
        }
    }

    render() {
        return (
            <div>
                <div style={{ backgroundColor: '#64CBFC', padding: '20px 20px', color: '#fff' }}>
                    <Flex justify='between' align='start' >
                        <Flex>
                            <div style={{ width: '80px', height: '80px', marginRight: '20px' }}><img style={{ width: '80px', height: '80px' }} src={require('../../../../assets/images/avatar.jpg').default} alt="" /></div>
                            <div>
                                <h2>
                                    {
                                        this.state.islogin.map(item => <span onClick={ this.mychange.bind(this,item) } style={{ marginRight: '20px' }} key={item}>{item}</span>)
                                    }
                                </h2>
                                <p>可以与经纪人发起聊天</p>
                            </div>
                        </Flex>
                        <div style={{ width: '25px', height: '25px' }}><img style={{ width: '25px', height: '25px' }} src={require('../../../../assets/images/icon_set.png').default} alt="" /></div>
                    </Flex>
                    <Flex justify='around'>
                        {
                            this.state.myOption.map(item => {
                                return <Flex key={item.name} direction='column'>
                                    <p>{item.num}</p>
                                    <Flex >
                                        <div style={{ width: '25px', height: '25px', marginRight: '10px' }}><img style={{ width: '25px', height: '25px' }} src={item.imgsrc} alt="" /></div>
                                        <span>{item.name}</span>
                                    </Flex>
                                </Flex>
                            })
                        }
                    </Flex>
                </div>
                <WhiteSpace />
                <List>
                    {
                        this.state.mySelect.map((item,i ) => {
                            if(item.name){
                                return <Item key={ item.name }
                                thumb={ item.imgsrc }
                                arrow="horizontal"
                                onClick={() => { }}
                                >
                                    { item.name }
                                </Item>
                            }
                            return <WhiteSpace key={ i } style={{ backgroundColor: '#F5F5F9' }} />
                        })
                    }
                </List>
            </div>
        )
    }

    mychange(val){
        console.log(val);
        
        switch(val){
            case '登录': this.props.history.push('/login');
            break;
            case '注册': this.props.history.push('/reg');
            break;
            case '切换用户': {
                return alert('此操作会退出登录', '您确定吗？', [
                    { text: '取消', onPress: () => { return } },
                    { text: '确定', onPress: () => {
                        localStorage.setItem('acc','')
                        this.props.history.push('/login')
                    } },
                  ])
            }
        }
    }
}
