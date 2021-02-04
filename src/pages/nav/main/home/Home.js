import React, { Component } from 'react'
import { Flex, Carousel, Grid, WhiteSpace } from 'antd-mobile'
import './Home.css'
import Homes from '../../../../components/homes/Homes'
import { connect } from 'react-redux'


class Home extends Component {
    constructor() {
        super()
        this.state = {
            data: ['1', '2', '3','4'],
            imgHeight: 176,
            the_city: '定位中',
            Grid_list: [
                { icon: require('../../../../assets/images/esf.png').default, text: '新房' },
                { icon: require('../../../../assets/images/mf.png').default, text: '二手房' },
                { icon: require('../../../../assets/images/zf.png').default, text: '租房' },
                { icon: require('../../../../assets/images/xq.png').default, text: '商铺写字楼' },
                { icon: require('../../../../assets/images/wd.png').default, text: '卖房' },
                { icon: require('../../../../assets/images/hwfc.png').default, text: '海外房产' },
                { icon: require('../../../../assets/images/sp.png').default, text: '小区房价' },
                { icon: require('../../../../assets/images/xf.png').default, text: '问答' }
            ],
            wiki_list: [
                { icon: require('../../../../assets/images/icon_money.png').default, text: '我要贷款' },
                { icon: require('../../../../assets/images/icon_counter.png').default, text: '房贷计算' },
                { icon: require('../../../../assets/images/icon_knowledge.png').default, text: '知识' },
                { icon: require('../../../../assets/images/icon_scan.png').default, text: '扫一扫' }
            ],
            homes_list: [
                { imgsrc: require('../../../../assets/images/2.jpg').default,id: 1,name: '绿地景天府',address: '锦江区 攀成钢',titel: [ '南北通透','临近地铁口' ],price: '19000/平' },
                { imgsrc: require('../../../../assets/images/2.jpg').default,id: 2,name: '东湖尚城壹号',address: '锦江区 攀成钢',titel: [ '南北通透','临近地铁口' ],price: '19000/平' },
                { imgsrc: require('../../../../assets/images/2.jpg').default,id: 3,name: '东湖远达',address: '锦江区 攀成钢',titel: [ '南北通透','临近地铁口' ],price: '19000/平' },
                { imgsrc: require('../../../../assets/images/2.jpg').default,id: 4,name: '南湖七彩虹',address: '锦江区 攀成钢',titel: [ '南北通透','临近地铁口' ],price: '19000/平' },
                { imgsrc: require('../../../../assets/images/2.jpg').default,id: 5,name: '南湖恒大',address: '锦江区 攀成钢',titel: [ '南北通透','临近地铁口' ],price: '19000/平' },
                { imgsrc: require('../../../../assets/images/2.jpg').default,id: 6,name: '北湖尚城',address: '锦江区 攀成钢',titel: [ '南北通透','临近地铁口' ],price: '19000/平' },
                { imgsrc: require('../../../../assets/images/2.jpg').default,id: 7,name: '西湖公园',address: '锦江区 攀成钢',titel: [ '南北通透','临近地铁口' ],price: '19000/平' },
                { imgsrc: require('../../../../assets/images/2.jpg').default,id: 8,name: '时间广场',address: '锦江区 攀成钢',titel: [ '南北通透','临近地铁口' ],price: '19000/平' },
            ]
        }
    }

    componentDidMount() {
        var _this = this
        // simulate img loading
        setTimeout(() => {
            this.setState({
                data: [require('../../../../assets/images/my_icon/1.jpg').default,
                require('../../../../assets/images/my_icon/3.jpg').default,
                require('../../../../assets/images/my_icon/1.jpg').default,
                require('../../../../assets/images/my_icon/3.jpg').default],
            });
        }, 100);
        //初始化地图时，若center属性缺省，地图默认定位到用户所在城市的中心
        //实例化城市查询类
        var citysearch = new window.AMap.CitySearch();
        //自动获取用户IP，返回当前城市
        citysearch.getLocalCity(function (status, result) {
            if (status === 'complete' && result.info === 'OK') {
                if (result && result.city && result.bounds) {
                    var cityinfo = result.city;
                    var citybounds = result.bounds;
                    _this.setState({
                        the_city: cityinfo
                    })
                    //  map.setBounds(citybounds);  
                }
            }
        });
    }
    render() {
        return (
            <div>
                <Flex className="head_div" justify="around">
                    <span onClick={this.toNewPage.bind(this, '城市')}>{this.state.the_city}⮟</span>
                    <Flex onClick={this.toNewPage.bind(this, '搜索')} className="head_center">
                        <img src={require('../../../../assets/images/icon_serch.png').default} alt="" />
                        挑好房，上 I住房产app
                    </Flex>
                    <img onClick={this.toNewPage.bind(this, '地图')} className="map_img" src={require('../../../../assets/images/icon_map.png').default} alt="" />
                </Flex>
                <Carousel
                    autoplay
                    infinite
                    afterChange={index => console.log()}
                >
                    {this.state.data.map(val => (
                        <a
                            key={val}
                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                            <img
                                src={ val }
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                }}
                            />
                        </a>
                    ))}
                </Carousel>
                <Grid data={this.state.Grid_list}
                    columnNum={4}
                    hasLine={false}
                    renderItem={dataItem => (
                        <div style={{}}>
                            <img src={dataItem.icon} style={{ width: '50px', height: '50px' }} alt="" />
                            <div style={{ color: '#888', fontSize: '14px' }}>
                                <span>{dataItem.text}</span>
                            </div>
                        </div>
                    )}
                />
                <WhiteSpace />
                <Flex className="wiki_tel">
                    <h3>房产全百科</h3>
                    <p>专业的买房攻略</p>
                </Flex>
                <Grid data={this.state.wiki_list}
                    columnNum={4}
                    hasLine={false}
                    renderItem={dataItem => (
                        <div style={{}}>
                            <img src={dataItem.icon} style={{ width: '50px', height: '50px' }} alt="" />
                            <div style={{ color: '#888', fontSize: '14px' }}>
                                <span>{dataItem.text}</span>
                            </div>
                        </div>
                    )}
                />
                <WhiteSpace />
                <h3 className="h3">猜你喜欢</h3>
{/* { imgsrc: require('../../../../assets/images/2.jpg').default,name: '绿地景天府',address: '锦江区 攀成钢',titel: [ '南北通透','临近地铁口' ],price: '19000/平' } */}
                {
                    this.state.homes_list.map(item => <div onClick={ this.addlist.bind(this,item) } key={ item.name }><Homes key={ item.id } item={ item } /></div>)
                }
            </div>
        )
    }

    toNewPage(val) {
        switch (val) {
            case '城市': this.props.history.push('/city')
                break
            case '搜索': this.props.history.push('/serch')
                break
            case '地图': this.props.history.push('/map')
        }

    }

    addlist(item){
        this.props.dispatch({
            type: 'pushlist',
            item
        })
    }

    componentWillUnmount(){
        this.setState = () => { return }
    }

}

function filter(state){
    return {
        historylist: state.historylist
    }
}

export default connect(filter)(Home)