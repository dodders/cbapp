import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import MetricsGraphics from 'react-metrics-graphics';
import {ButtonToolbar, Button} from 'reactstrap';
import SensorPicker from './components/SensorPicker/SensorPicker'
import TypePicker from './components/TypePicker/TypePicker'
import Graph from './components/Graph/Graph'
import SideBar from './components/Sidebar/Sidebar'
import Header from './components/Header/Header'

var appstate = {selected: '', sensors: '', data: '', type: ''}

class Page extends React.Component {
	constructor(props) {
		super(props)
		this.handleSensorChange = this.handleSensorChange.bind(this)
		this.loadSensors = this.loadSensors.bind(this)
		this.loadGraph = this.loadGraph.bind(this)
		this.state = appstate
	}

	handleSensorChange(sens) {
		console.log('sensor selected:', sens)
		var mystate = this.state
		mystate.selected = sens
		mystate.data = ''
		this.setState(mystate)
	}

	loadSensors(sensors) {
		var mystate = this.state
		mystate.sensors = sensors
		this.setState(mystate)
	}

	loadGraph(data) {
		var mystate = this.state
		mystate.data = data
		this.setState(mystate)
	}

	loadType(type) {
		var mystate = this.state
		mystate.data = type
		this.setState(mystate)
	}
	
	render() {
        return (
            <div>
				<div>
					<Header />
				</div>
				<div>
					<SideBar />
				</div>
                <div display="inline"><SensorPicker
					handleSensorChange={this.handleSensorChange}
					loadSensors = {this.loadSensors}
					selected = {this.state.selected}
					sensors = {this.state.sensors} />
				</div>
				<div display="inline">
					<TypePicker /></div>
                <div><Graph
					loadGraph = {this.loadGraph}
					selected = {this.state.selected}
					data = {this.state.data} />
				</div>
            </div>
        );
    }
}

ReactDOM.render(<Page />, document.getElementById('root'));
registerServiceWorker();
