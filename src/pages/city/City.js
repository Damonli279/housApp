import React, { Component } from 'react'
import { SearchBar, Card, Flex } from 'antd-mobile'
import BScroll from 'better-scroll'
import city from '../../json/City.json'

export default class City extends Component {
    constructor() {
        super()
        this.state = {
            value: ''
        }
    }

    componentDidMount() {
        this.bs_ul = new BScroll('#content',{
            scrollY: true
        })
    }

    render() {
        return (
            <div style={{ height: '100%' }}>
                <Flex justify='between' style={{ backgroundColor: '#fff',padding: '0 10px',
                 zIndex: '999',position: 'relative' }}>
                    <h2 style={{ margin: '0' }}>选择城市</h2>
                    <div onClick={ () => this.props.history.push('/') }><img src={ require('../../assets/images/icon_back.png').default } alt=""/></div>
                </Flex>
                <ul style={{ margin: '0', padding: '0', height: '100%',zIndex: '1',position: 'relative' }} id='content'>
                    <div>
                        <SearchBar
                            value={this.state.value}
                            placeholder="搜索"
                            onSubmit={value => console.log(value, 'onSubmit')}
                            onCancel={() => this.setState({ value: '' })}
                            showCancelButton
                            onChange={(val) => { this.setState({ value: val }) }}
                        />
                        <Card>
                            <Card.Header
                                title={city.hotcity.title}
                            />
                            <Card.Body>
                                <Flex wrap='wrap'>
                                    {
                                        city.hotcity.lists.map((item, i) => <p style={{ width: '80px', margin: '0', 
                                        lineHeight: '30px', textAlign: 'center' }} key={i}>{item}</p>)
                                    }
                                </Flex>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header
                                title={city.city.title}
                            />
                            <Card.Body>
                                <Flex wrap='wrap'>
                                    {
                                        city.city.lists.map((item, i) => {
                                            return <Card key={i} id={ item.title }>
                                                <Card.Header
                                                    title={item.title}
                                                />
                                                <Card.Body>
                                                    <Flex wrap='wrap'>
                                                        {
                                                            item.lists.map((item, i) => {
                                                                return <p style={{ width: '100px', margin: '0', lineHeight: '30px',
                                                                 textAlign: 'center' }} key={i}>{item}</p>
                                                            })
                                                        }
                                                    </Flex>
                                                </Card.Body>
                                            </Card>
                                        })
                                    }
                                </Flex>
                            </Card.Body>
                        </Card>
                    </div>
                </ul>
                <Flex wrap='wrap' style={{ width: '30px', position: 'fixed', top: '80px', right: '0',zIndex: '2' }}>
                    {
                        city.city.lists.map((item, i) => <p onClick={ this.gettitle.bind(this,item.title) } 
                        style={{ margin: '0', lineHeight: '25px', textAlign: 'center', width: '30px' }} key={i}>{item.title}</p>)
                    }
                </Flex>
            </div>
        )
    }

    gettitle(val){
        this.bs_ul.scrollToElement('#' + val,1000)
    }
}
