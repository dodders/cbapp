import React from 'react';
import request from 'request'
import Graph from './Graph'

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
        var newurl = baseurl + this.props.sensor + '?type=F'
        console.log('fetching sensor data from ' + newurl)
        request(newurl, function(err, resp, body) {
            console.log('got sensor list with ', body[0], ' items');
            _this.setState({data: JSON.parse(body), loaded: true})
		})
    }

	render() {
        console.log('graph container render...')
        return (
            <div>
                <Graph data={this.state.data} sensor={this.props.sensor} type='F' />
            </div>
        );
    }
}

export default GraphContainer;