import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './mg.css';
import registerServiceWorker from './registerServiceWorker';
import request from 'request';
import MetricsGraphics from 'react-metrics-graphics';
import dateformat from 'dateformat';
import 'react-select/dist/react-select.css';
import Select from 'react-select';

//full url is http://74.208.159.205:5000/sensor/51?skip=10&type=F'
var baseurl = 'http://74.208.159.205:5000/sensor/'
var sensorlisturl = 'http://74.208.159.205:5000/sensorlist'

class Page extends React.Component {
	constructor(props) {
		super(props)
		this.handleSensorChange = this.handleSensorChange.bind(this)
		this.loadSensors = this.loadSensors.bind(this)
		this.loadGraph = this.loadGraph.bind(this)
		this.state = {selected: '', sensors: '', data: ''}
	}

	handleSensorChange(sens) {
		console.log('sensor selected:', sens)
		this.setState({selected: sens, sensors: this.state.sensors, data: ''})
	}

	loadSensors(sensors) {
		this.setState({selected: this.state.selected, sensors: sensors, data: this.state.data})
	}

	loadGraph(points) {
		this.setState({selected: this.state.selected, sensors: this.state.sensors, data: points})
	}

    render() {
        return (
            <div>
                <div><SensorPicker
					handleSensorChange={this.handleSensorChange}
					loadSensors = {this.loadSensors}
					selected = {this.state.selected}
					sensors = {this.state.sensors} />
				</div>
				<div><TypePicker /></div>
                <div><Graph
					loadGraph = {this.loadGraph}
					selected = {this.state.selected}
					data = {this.state.data} />
				</div>
            </div>
        );
    }
}

class TypePicker extends React.Component {
	render() {
		var types = ['BAT', 'F', 'H', 'P', 'RSSI']		
		return (
			<div>
				{JSON.stringify(types)}
			</div>
		);	
	}
}

class SensorPicker extends React.Component {
	constructor(props) {
		super(props);
		var me = this;
		request(sensorlisturl, function(err, resp, body) {
			console.log('got sensor list:', body);
			me.props.loadSensors(JSON.parse(body));
		})
	}

	render() {
		if (this.props.sensors === '') {
			return(
				<div>
					<p>Waiting for sensor list...</p>
				</div>
			)
		}
		var list = this.props.sensors.sort();
		var opts = []
		list.forEach(function(v) {
			opts.push({value: v, label: v});
		})

		return (
			<div className="sensor-header">
				Select a sensor: 
				<Select
					name='select-box-name'
					options={opts}
					onChange={this.props.handleSensorChange}
					value = {this.props.selected}
				/>
			</div>
		);
	};
}

class Graph extends React.Component {
	render () {
		if (this.props.selected === '') {
			console.log('no sensor selected.')
			return (
				<div>
					No graph data to display or load...
				</div>
			);
		}
		if (this.props.data === '') {
			var fmtDate = function(epochtime) {
				var d = new Date(epochtime * 1000)
				return dateformat(d, "yyyy-mmm-dd HH:MM:ss")
			}	
			var actualURL = baseurl + this.props.selected.value + '?type=F'
			console.log('requesting sensor data from ' + actualURL)
			var curData = []
			var lg = this.props.loadGraph
			request(actualURL, function(err, resp, body) {
				var rawdata = JSON.parse(body);
				console.log(rawdata[0], ' sensor points returned.');				
				//first item is the count so skip that...
				for (var i = 1; i < rawdata.length; i++) {
					var el = rawdata[i]
					curData.push({'date': new Date(fmtDate(el.time)), 'value': el.value})
				}
				lg(curData);
			});

			return (
				<div />
			)
		}
		//render graph data if we have it.
		var title = 'Sensor ' + this.props.selected.value
		return (
			<div>
				<MetricsGraphics
					title={title}
					description="This is a simple line chart."
					data={this.props.data}
					width={600}
					height={200}
					right={40}
					x_accessor="date"
					y_accessor="value"
				/>
			</div>
		);
	}
}

ReactDOM.render(<Page />, document.getElementById('root'));
registerServiceWorker();
