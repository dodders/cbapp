import React from 'react';
import request from 'request'
import Graph from './Graph'
import { Col } from 'reactstrap'

const baseurl = 'http://74.208.159.205:5000/sensor/'

class GraphContainer extends React.Component {

    constructor(props) {
        super(props)
        console.log('graph container constructor...')
        this.state = {
            data: [],
            period: 1
        }
    }

    setWeek = () => {
        this.setState({
            data: this.state.data,
            period: 7
        })
    }

    componentDidMount() {
        console.log('graph container componentDidMount for ' + this.props.sensor)
        var _this = this
        var newurl = baseurl + this.props.sensor + '?type=' + this.props.type + '&skip=0&period=31'
        console.log('fetching sensor data from ' + newurl)
        request(newurl, function(err, resp, body) {
            _this.setState({data: JSON.parse(body), period: _this.state.period})
		})
    }

    refresh = () => {
        this.componentDidMount()
    }

	render = () => {
        console.log('graph container render...')
        if (this.state.data.length <= 1) {
            return (
                <div></div>
            );
        } else {
            return (
                <div className="row">
                    <Col xs="md-10">
                        <Graph data={this.state.data} sensor={this.props.sensor} 
                            type={this.props.type} refresh={this.refresh}
                            setweek={this.setweek} />
                    </Col>
                </div>
            );
        }
    }
}

export default GraphContainer;