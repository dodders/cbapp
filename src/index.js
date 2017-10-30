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

var url = 'http://74.208.159.205:5000/sensor/51?skip=10&type=F'
var sensorlisturl = 'http://74.208.159.205:5000/sensorlist'
var curData = []

class Page extends React.Component {
	handleSensorChange(sens) {
		console.log('sensor selected:', sens)
		this.setState = {selected: sens}
	}

	constructor(props) {
		super(props)
		this.handleSensorChange = this.handleSensorChange.bind(this)
	}

    render() {
		var data = {selected: ''}	
        return (
            <div>
                <div><SensorPicker inp={data} /></div>
                <div><Graph inp={data} /></div>
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
			me.setState({"sensors": JSON.parse(body)});
		})
	}

	render() {
		if (this.state == null) {
			return(
				<div>
					<p>Waiting for sensor list...</p>
				</div>
			)
		}
		var list = this.state.sensors.sort();
		var opts = []
		list.forEach(function(v) {
			opts.push({value: v, label: v});
		})

		function selChange(val) {
			console.log('selected:' + JSON.stringify(val));
			Select.value = val.value;
		}

		return (
			<div className="sensor-header">
				Select a sensor: 
				<Select
					name='select-box-name'
					options={opts}
					onChange={selChange}
				/>
			</div>
		);
	};
}

class Graph extends React.Component {
	constructor(props){
		super(props);
		var actualURL = url;
		var me = this;

		request(actualURL, function(err, resp, body) {
			console.log('returned from request call!');
			var rawdata = JSON.parse(body);
			//first item is the count so skip that...
			for (var i = 1; i < rawdata.length; i++) {
				var el = rawdata[i]
				curData.push({'date': new Date(me.fmtDate(el.time)), 'value': el.value})
			}
			me.setState({"data": curData});				
		});
	}

	render () {
		if (this.state == null) {
			console.log('empty items list... skipping graph.')
			return (
				<div>
				</div>
			);
		}
		var curData = this.state.data;	
		return (
			<div>
				<MetricsGraphics
					title="Sensor Data"
					description="This is a simple line chart."
					data={curData}
					width={600}
					height={200}
					right={40}
					x_accessor="date"
					y_accessor="value"
				/>
			</div>
		);
	}

	fmtDate(epochtime) {
		var d = new Date(epochtime * 1000)
		return dateformat(d, "yyyy-mmm-dd HH:MM:ss")
		//return dateformat(d, "yyyymmmddHHMMss")
	}
}

ReactDOM.render(<Page />, document.getElementById('root'));
registerServiceWorker();
