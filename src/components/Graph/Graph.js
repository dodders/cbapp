import React from 'react';
import dateformat from 'dateformat'
import request from 'request'
import MetricsGraphics from 'react-metrics-graphics'

const baseurl = 'http://74.208.159.205:5000/sensor/'

function fmtDate(epochtime) {
    var d = new Date(epochtime * 1000)
    return dateformat(d, "yyyy-mmm-dd HH:MM:ss")
}

class Graph extends React.Component {
	render() {
		return (
			<div>
				graphs for sensor {this.props.sensor}
			</div>
		);
	}
	// render () {
	// 	if (this.props.selected === '') {
	// 		console.log('no sensor selected.')
	// 		return (
	// 			<div>
	// 				No graph data to display or load...
	// 			</div>
	// 		);
	// 	}
	// 	if (this.props.data === '') {
	// 		var actualURL = baseurl + this.props.selected.value + '?type=F'
	// 		console.log('requesting sensor data from ' + actualURL)
	// 		var curData = []
	// 		var lg = this.props.loadGraph
	// 		request(actualURL, function(err, resp, body) {
	// 			var rawdata = JSON.parse(body);
	// 			console.log(rawdata[0], ' sensor points returned.');				
	// 			//first item is the count so skip that...
	// 			for (var i = 1; i < rawdata.length; i++) {
	// 				var el = rawdata[i]
	// 				curData.push({'date': new Date(fmtDate(el.time)), 'value': el.value})
	// 			}
	// 			lg(curData);
	// 		});

	// 		return (
	// 			<div />
	// 		)
	// 	}
	// 	//render graph data if we have it.
	// 	var title = 'Sensor ' + this.props.selected.value
	// 	return (
	// 		<div>
	// 			<MetricsGraphics
	// 				title={title}
	// 				description="This is a simple line chart."
	// 				data={this.props.data}
	// 				width={600}
	// 				height={200}
	// 				right={40}
	// 				x_accessor="date"
	// 				y_accessor="value"
	// 			/>
	// 		</div>
	// 	);
	//}
}

export default Graph;
