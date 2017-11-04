import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {Container, Row, Col} from 'reactstrap';
import GraphContainer from './components/Graph/GraphContainer'
import SideBarContainer from './components/Sidebar/SidebarContainer'
import Header from './components/Header/Header'

var appstate = {sensor: ''}

class Page extends React.Component {
	constructor(props) {
		super(props)
		this.sensorClick = this.sensorClick.bind(this)
		this.state = appstate
	}

	sensorClick(sens) {
		console.log('sensor selected:', sens)
		this.setState({sensor: sens})
	}
	
	render() {
        return (			
			<Container>
				<Row>
					<Col>
						<Header/>
					</Col>
				</Row>
				<Row>
					<Col className="col-2">
						<SideBarContainer sensorClick={this.sensorClick} />
					</Col>
					<Col>
						<GraphContainer sensor={this.state.sensor} />
					</Col>
				</Row>
			</Container>
            // <div>
			// 	<div>
			// 		<Header />
			// 	</div>
				// <div>
				// 	<SideBar />
				// </div>
                // <div display="inline"><SensorPicker
				// 	handleSensorChange={this.handleSensorChange}
				// 	loadSensors = {this.loadSensors}
				// 	selected = {this.state.selected}
				// 	sensors = {this.state.sensors} />
				// </div>
				// <div display="inline">
				// 	<TypePicker /></div>
                // <div><Graph
				// 	loadGraph = {this.loadGraph}
				// 	selected = {this.state.selected}
				// 	data = {this.state.data} />
				// </div>
            // </div>
        );
    }
}

ReactDOM.render(<Page />, document.getElementById('root'));
registerServiceWorker();
