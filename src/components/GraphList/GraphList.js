import React from 'react';
import GraphContainer from '../Graph/GraphContainer'
import { Col } from 'reactstrap'
import './graphlist.css'

class GraphList extends React.Component {

    constructor(props) {
        super(props)
        this.types = ['F', 'H', 'P', 'BAT', 'RSSI']        
    }

    render() {
        return (
            <div>
            <div className="row">
                <Col xs="md-10" className="panel-warning">
                    <div className="content-box-header panel-heading">
                        <div className="panel-title">Sensor {this.props.sensor}</div>
                        <div className="panel-options">
                            <button id="timebtn" className="btn btn-info time-btn">Day</button>
                            <button id="timebtn" className="btn btn-info time-btn">Week</button>
                            <button id="timebtn" className="btn btn-info time-btn">Month</button>
                        </div>
                    </div>
                </Col>
            </div>
            <div>
                {this.types.map(type => {
                    return (
                            <GraphContainer sensor={this.props.sensor} type={type} />
                        );
                    })}
            </div>
            </div>
        );
    }
}

export default GraphList