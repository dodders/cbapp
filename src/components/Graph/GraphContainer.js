import React from 'react';
import request from 'request'
import Graph from './Graph'

const baseurl = 'http://74.208.159.205:5000/sensor/'

class GraphContainer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [],
            loaded: false
        }
    }

    fetchData() {
        console.log('graph loading for ' + this.props.sensor)
        if (this.props.sensor === '') {
            return
        }
        var _this = this
        var newurl = baseurl + this.props.sensor + '?type=F'
        console.log('fetching sensor data from ' + newurl)
        request(newurl, function(err, resp, body) {
            console.log('got sensor list:', body);
            _this.setState({data: JSON.parse(body), loaded: true})
		})
    }

	render() {
        if (this.state.loaded === false) {
            this.fetchData()
        }
        if (this.props.sensor === '') {
            return (
                <div>
                    graph stuff!
                </div>
            );
        } else {
            return (
                <div>
                   <Graph data={this.state.data} sensor={this.props.sensor} type='F' />
                </div>
            );
        }
    }
}

export default GraphContainer;