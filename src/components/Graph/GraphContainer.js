import React from 'react';
import request from 'request'
import Graph from './Graph'

const baseurl = 'http://74.208.159.205:5000/sensor/'

class GraphContainer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    fetchData() {
        console.log('graph updated...')
        if (this.props.sensor === '') {
            return
        }
        var _this = this
        var newurl = baseurl + this.props.sensor + '?type=F'
        console.log('fetching sensor data from ' + newurl)
        request(newurl, function(err, resp, body) {
            console.log('got sensor list:', body);
            _this.setState({data: JSON.parse(body)})
		})
    }

	render() {
        if (this.props.sensor === '') {
            return (
                <div>
                    graph stuff!
                </div>
            );
        } else {
            return (
                <div>
                   <Graph sensor={this.props.sensor} />
                </div>
            );
        }
    }
}

export default GraphContainer;