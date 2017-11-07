import React from 'react';
import Sidebar from './Sidebar'
import request from 'request'

const sensorlisturl = 'http://74.208.159.205:5000/sensorlist'

class SidebarContainer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            sensors: []
        }
    }

    componentDidMount() {
        var _this = this
        request(sensorlisturl, function(err, resp, body) {
            console.log('got sensor list:', body);
            _this.setState({sensors: JSON.parse(body)})
		})
    }

    render() {
        return(
                <Sidebar
                 sensors={this.state.sensors.sort()}
                 sensorClick={this.props.sensorClick} />
        );
    }
}

export default SidebarContainer;