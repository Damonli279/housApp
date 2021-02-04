import React, { Component } from 'react'
import { SearchBar, Flex, WhiteSpace, Tabs, Badge } from 'antd-mobile'


export default class Serch extends Component {
    constructor() {
        super()
        this.state = {
            div_state: 'none',
            value: '',
            onF_state: ['靠近地铁', '靠近学校', '公寓'],
            titles: [],
            serch_list: {
                lately: ['北湖公园', '东湖尚城', '远达广场'],
                hot_serch: ['二手房', '荣县招聘', '南湖郡', '惠东', '惠洗']
            }
        }
    }

    componentDidMount() {
        let num1 = this.state.serch_list.lately.length,
            num2 = this.state.serch_list.hot_serch.length

        this.setState({
            titles: [
                { title: <Badge text={num1}>最近搜索</Badge> },
                { title: <Badge text={num2}>热门搜索</Badge> },
            ],
        })
    }

    render() {
        let { div_state, value, onF_state, serch_list, titles } = this.state
        return (
            <div>
                <div style={{ position: 'relative' }}>
                    <SearchBar
                        value={value}
                        placeholder="搜索"
                        onSubmit={value => console.log(value, 'onSubmit')}
                        onClear={value => console.log(value, 'onClear')}
                        onFocus={() => this.setState({ div_state: 'block' })}
                        onBlur={() => this.setState({ div_state: 'none' })}
                        onCancel={() => this.props.history.push('/')}
                        showCancelButton
                        onChange={this.onChange}
                    />
                    <Flex direction='column' style={{
                        display: div_state, backgroundColor: '#fff', position: 'absolute',
                        bottom: '-68px', left: '0px', width: '95%', margin: '0 10px', zIndex: '999'
                    }}>
                        {
                            onF_state.map(item => <p onClick={item => this.setState({ value: item })} key={item}
                                style={{ margin: '5px 0 5px 30px', color: '#BBBBBB' }}>{item}</p>)
                        }
                    </Flex>
                </div>
                <div style={{ width: '96%',margin: 'auto' }}>
                    <Tabs tabs={titles}
                        initialPage={1}
                        onChange={(tab, index) => { console.log('onChange', index, tab); }}
                        onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                    >
                        <div style={{ display: 'flex', alignItems: 'start', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                            {
                                serch_list.lately.map(item => <Flex justify='center' align='center' style={{
                                    width: '100px', height: '30px', border: '1px solid #ccc',
                                    backgroundColor: '#f2f2f2', borderRadius: '50px', margin: '10px 10px'
                                }} key={item}>{item}</Flex>)
                            }
                        </div>
                        <div style={{ display: 'flex', alignItems: 'start', justifyContent: 'center', flexWrap: 'wrap', height: '150px', backgroundColor: '#fff' }}>
                            {
                                serch_list.hot_serch.map(item => <Flex justify='center' align='center' style={{
                                    width: '100px', height: '30px', border: '1px solid #ccc',
                                    backgroundColor: '#f2f2f2', borderRadius: '50px', margin: '10px 10px'
                                }} key={item}>{item}</Flex>)
                            }
                        </div>
                    </Tabs>
                </div>
            </div >
        )
    }
}
