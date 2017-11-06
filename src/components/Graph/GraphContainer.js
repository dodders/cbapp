import React from 'react';
import request from 'request'
import Graph from './Graph'
import { Alert } from 'reactstrap'

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
        if (this.state.data.length <= 1) {
            return (
                <div>
                    <Alert color="info">
                        No data found for {this.props.type}
                    </Alert>
                </div>
            );
        } else {
            return (
                <div>
                    <Graph data={this.state.data} sensor={this.props.sensor} type={this.props.type} />
                </div>
            );
        }
    }
}

export default GraphContainer;