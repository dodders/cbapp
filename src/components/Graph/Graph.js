import React from 'react';
import dateformat from 'dateformat'
//import MetricsGraphics from 'react-metrics-graphics'
import { Line } from 'react-chartjs-2'
import './mg.css'

function fmtDate(epochtime) {
    var d = new Date(epochtime * 1000)
    return dateformat(d, "yyyy-mmm-dd HH:MM:ss")
}

function fmtData(data) {
	var curData = []
	for (var i = 1; i < data.length; i++) { //ignore 1st item
		var el = data[i]
		curData.push({'x': new Date(fmtDate(el.time)), 'y': el.value})
	}
	return curData
}

const opts = {
	scales: {
		xAxes: [{
			type: 'time',
			time: {unit:'day'}
		}]
	}
}

class Graph extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {
		var title = this.props.type
		var points = fmtData(this.props.data)
		var data = {
			datasets: [
				{
				  label: title,
				  data: points,
				  fill: false,
				  lineTension: 0.1,
				  backgroundColor: 'rgba(75,192,192,0.4)',
				  borderColor: 'rgba(75,192,192,1)',
				  borderCapStyle: 'butt',
				  borderDash: [],
				  borderDashOffset: 0.0,
				  borderJoinStyle: 'miter',
				  pointBorderColor: 'rgba(75,192,192,1)',
				  pointBackgroundColor: '#fff',
				  pointBorderWidth: 1,
				  pointHoverRadius: 5,
				  pointHoverBackgroundColor: 'rgba(75,192,192,1)',
				  pointHoverBorderColor: 'rgba(220,220,220,1)',
				  pointHoverBorderWidth: 2,
				  pointRadius: 1,
				  pointHitRadius: 10
				}
			]
		}
		console.log('sensor ' + this.props.sensor + ' graph rendering...')
		return (
			<div>
				<div className="content-box-header panel-warning">
					<div className="panel-title">Type {this.props.type}</div>
					<div className="panel-options">
						<a href="#" data-rel="collapse" onClick={this.props.refresh}>
							<i className="glyphicon glyphicon-refresh" />
						</a>
					</div>
				</div>
				<div className="content-box-large box-with-header">
					<Line data={data} options={opts}/>
					{/* <MetricsGraphics
						title={title}
						description="This is a simple line chart."
						data={data}
						width={500}
						height={200}
						x_accessor="date"
						y_accessor="value"
					/> */}
				</div>
			</div>
	 	);
	}
}

export default Graph;
