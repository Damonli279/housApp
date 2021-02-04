import React, { Component } from 'react'
import { Link, } from 'react-router-dom'
import { TabBar } from 'antd-mobile'
import Home from './main/home/Home'
import Chat from './main/chat/Chat'
import History from './main/history/History'
import Mine from './main/mine/Mine'


export default class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: '首页',
            TabBar_list: [
                { title: '首页', key: '首页',msg:'', icon: require('../../assets/images/icon_main.png').default, selectedIcon: require('../../assets/images/icon_main_s.png').default },
                { title: '微聊', key: '微聊',msg:'1', icon: require('../../assets/images/icon_chat.png').default, selectedIcon: require('../../assets/images/icon_chat_s.png').default },
                { title: '足迹', key: '足迹',msg:'', icon: require('../../assets/images/icon_history.png').default, selectedIcon: require('../../assets/images/icon_history_s.png').default },
                { title: '我的', key: '我的',msg:'', icon: require('../../assets/images/icon_my.png').default, selectedIcon: require('../../assets/images/icon_my_s.png').default }
            ]
        };
    }

    renderContent(pageText) {
        switch (this.state.selectedTab) {
                case '首页': return <Home history={ this.props.history } />
                case "微聊": return <Chat history={ this.props.history } />
                case "足迹": return <History />
                case "我的": return <Mine history={ this.props.history } />
        }
    }
    render() {
        return (
            <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                >
                    {
                        this.state.TabBar_list.map(item => {
                            return <TabBar.Item
                                title={item.title}
                                key={item.key}
                                icon={<div style={{
                                    width: '22px',
                                    height: '22px',
                                    background: `url(${item.icon}) center center /  21px 21px no-repeat`
                                }}
                                />
                                }
                                selectedIcon={<div style={{
                                    width: '22px',
                                    height: '22px',
                                    background: `url(${item.selectedIcon}) center center /  21px 21px no-repeat`
                                }}
                                />
                                }
                                selected={this.state.selectedTab === item.key}
                                badge={item.msg}
                                onPress={() => {
                                    this.setState({
                                        selectedTab: item.key,
                                    });
                                }}
                                data-seed="logId"
                            >
                                {this.renderContent(item.key)}
                            </TabBar.Item>
                        })
                    }
                </TabBar>
            </div>
        );

    }

}
