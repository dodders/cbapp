import React from 'react';
import request from 'request'
import Select from 'react-select'
import 'react-select/dist/react-select.css';

const sensorlisturl = 'http://74.208.159.205:5000/sensorlist'

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
			<div>
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

export default SensorPicker;