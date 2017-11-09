import React from 'react'
import request from 'request'
import { Line } from 'react-chartjs-2'

const url = 'http://74.208.159.205:5000/sensor/54?type=F&skip=10'

const data = {
    datasets: [
      {
        label: 'ChartJS Test',
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
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  }

class ChartContainer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    // componentDidMount() {
    //     var _this = this
    //     console.log('fetching sensor data from ' + url)
    //     request(url, function(err, resp, body) {
    //         _this.setState({data: JSON.parse(body)})
	// 	})
    // }

    render() {
        return (
            <Line data={data} />
        );
    }
}

export default ChartContainer;