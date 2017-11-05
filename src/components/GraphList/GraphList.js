import React from 'react';
import GraphContainer from '../Graph/GraphContainer'
import { Alert } from 'reactstrap'

class GraphList extends React.Component {

    constructor(props) {
        super(props)
        this.types = ['F', 'H', 'P', 'BAT', 'RSSI']        
    }

    render = () => {
        return (
            <div>
                <Alert color='info'>Sensor {this.props.sensor}</Alert>
                <div>
                    {this.types.map(type => {
                        return (
                            <div>
                                <GraphContainer sensor={this.props.sensor} type={type} />
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default GraphList