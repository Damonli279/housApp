import React, { Component } from 'react'
import { Flex } from 'antd-mobile'
import './Homes.css'

export default class Homes extends Component {
    render() {
        let { item } = this.props
        return (
            <Flex className="like_div" justify="between" align="start" style={{ marginBottom: '10px' }}>
                <img src={ item.imgsrc } alt="" />
                <Flex direction='column' justify="around" align="start" className="like_div_center">
                    <h3 className="like_h3">{ item.name }</h3>
                    <p>{ item.address }</p>
                    <Flex justify="between">
                        { 
                            item.titel.map(i => <span style={{ display: 'inline-block',border: "1px solid #ccc",marginRight: '10px' }} key={ i }>{ i }</span>)
                        }
                        
                    </Flex>
                </Flex>
                <span style={{ color: 'red' }}>{ item.price }</span>
            </Flex>
        )
    }
}
