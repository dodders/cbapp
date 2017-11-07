import React from 'react';
import dateformat from 'dateformat'
import MetricsGraphics from 'react-metrics-graphics'
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
		var title = this.props.type
		var data = fmtData(this.props.data)
		console.log('sensor ' + this.props.sensor + ' graph rendering...')
		return (
			<div>
				<div className="content-box-header panel-warning">
					<div className="panel-title">Type {this.props.type}</div>
					<div className="panel-options">
						<a href="#" data-rel="collapse">
							<i className="glyphicon glyphicon-refresh" />
						</a>
					</div>
				</div>
				<div className="content-box-large box-with-header">
					<MetricsGraphics
						title={title}
						description="This is a simple line chart."
						data={data}
						width={500}
						height={200}
						x_accessor="date"
						y_accessor="value"
					/>
				</div>
			</div>
	 	);
	}
}

export default Graph;
