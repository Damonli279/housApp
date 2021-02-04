import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card } from 'antd-mobile'
import Homes from '../../../../components/homes/Homes'

class History extends Component {
    render() {
        return (
            <div style={{ height: "100%" }}>

                <Card style={{ height: "100%" }}>
                    <Card.Header
                        title="我看过的房子"
                    />
                    <Card.Body style={{ height: "100%" }}>
                        {
                            this.props.historylist.map( item => <Homes key={item.name} item={item} />)
                        }
                    </Card.Body>
                </Card>
            </div>
        )
    }
}


export default connect(state => {
    return {
        historylist: state.historylist
    }
})(History)
