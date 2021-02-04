import React, { Component } from 'react'
import { WingBlank, WhiteSpace,Flex } from 'antd-mobile'

export default class Map extends Component {
    constructor() {
        super()
        this.state = {
            the_city: '定位中'
        }
    }

    componentDidMount() {
        var _this = this
        var map = new window.AMap.Map('myAddress', {
            resizeEnable: true
        });
        window.AMap.plugin('AMap.Geolocation', function () {
            var geolocation = new window.AMap.Geolocation({
                enableHighAccuracy: true,//是否使用高精度定位，默认:true
                timeout: 10000,          //超过10秒后停止定位，默认：5s
                buttonPosition: 'RB',    //定位按钮的停靠位置
                buttonOffset: new window.AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
                zoomToAccuracy: true,   //定位成功后是否自动调整地图视野到定位点

            });
            map.addControl(geolocation);
            geolocation.getCurrentPosition(function (status, result) {
                if (status == 'complete') {
                    onComplete(result)
                } else {
                    onError(result)
                }
            });
        });
        //解析定位结果
        function onComplete(data) {
            // document.getElementById('status').innerHTML='定位成功'
            var str = [];
            str.push('定位结果：' + data.position);
            str.push('定位类别：' + data.location_type);
            if (data.accuracy) {
                str.push('精度：' + data.accuracy + ' 米');
            }//如为IP精确定位结果则没有精度信息
            str.push('是否经过偏移：' + (data.isConverted ? '是' : '否'));
            // document.getElementById('result').innerHTML = str.join('<br>');
        }
        //解析定位错误信息
        function onError(data) {
            // document.getElementById('status').innerHTML='定位失败'
            // document.getElementById('result').innerHTML = '失败原因排查信息:'+data.message;
        }
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
                    map.setBounds(citybounds);
                }
            }
        });
    }
    render() {
        return (
            <div>
                <WingBlank>
                    <WhiteSpace />
                    <Flex justify="between" style={{ height: '30px', lineHeight: '30px', backgroundColor: '#e1e1e1' }}>
                        我的位置：{this.state.the_city}
                        <img src={ require('../../assets/images/icon_back.png').default } onClick={ this.back.bind(this) } />
                    </Flex>
                    <WhiteSpace />
                    <div id="myAddress" style={{ width: "100%", height: '600px', backgroundColor: '' }}>

                    </div>
                </WingBlank>
            </div>
        )
    }

    back(){
        this.props.history.push('/')
    }
}
