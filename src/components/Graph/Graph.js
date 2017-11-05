import React from 'react';
import dateformat from 'dateformat'
import MetricsGraphics from 'react-metrics-graphics'
import { Alert } from 'reactstrap'
import './mg.css'

function fmtDate(epochtime) {
    var d = new Date(epochtime * 1000)
    return dateformat(d, "yyyy-mmm-dd HH:MM:ss")
}

function fmtData(data) {
	var curData = []
	for (var i = 1; i < data.length; i++) { //ignore 1st item
		var el = data[i]
		curData.push({'date': new Date(fmtDate(el.time)), 'value': el.value})
	}
	return curData
}

class Graph extends React.Component {

	constructor(props) {
		super(props)
		console.log('graph constructor fired.')
	}

	render() {
		console.log('graph render fired...')
		var title = 'Sensor ' + this.props.sensor
		var data = fmtData(this.props.data)
		console.log('sensor ' + this.props.sensor + ' graph rendering...')
		return (
			<div>
				<Alert color='info'>{title}</Alert>
	 			<MetricsGraphics
	 				title={title}
	 				description="This is a simple line chart."
	 				data={data}
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

export default Graph;
