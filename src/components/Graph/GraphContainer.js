import React from 'react';
import request from 'request'
import Graph from './Graph'
import { Row, Col } from 'reactstrap'

const baseurl = 'http://74.208.159.205:5000/sensor/'

class GraphContainer extends React.Component {

    constructor(props) {
        super(props)
        console.log('graph container constructor...')
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        console.log('graph container componentDidMount for ' + this.props.sensor)
        var _this = this
        var newurl = baseurl + this.props.sensor + '?type=' + this.props.type + '&skip=10'
        console.log('fetching sensor data from ' + newurl)
        request(newurl, function(err, resp, body) {
            _this.setState({data: JSON.parse(body), loaded: true})
		})
    }

	render() {
        console.log('graph container render...')
        let ct = 0
        if (this.state.data.length <= 1) {
            return (
                <div></div>
            );
        } else {
            return (
                <div className="row">
                    <Col xs="md-6">
                        <Graph data={this.state.data} sensor={this.props.sensor} type={this.props.type} />
                    </Col>
                </div>
            );
        }
    }
}

export default GraphContainer;