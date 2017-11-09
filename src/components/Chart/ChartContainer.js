import React from 'react'
import request from 'request'
import { Line } from 'react-chartjs-2'

const url = 'http://74.208.159.205:5000/sensor/54?type=F&skip=10'

const data = {
    //labels: ['m', 't','w','t','f'],
    datasets: [
      {
        label: 'ChartJS Test',
        //data: [{x: 1, y:80}, {x:2, y:81}, {x:3, y:56}, {x:4, y:55}, {x:5, y:40}],
        data: [{
            x: new Date(2017,10,1),
            y: 10
        }, {
            x: new Date(2017,10,2),
            y: 13
        },{
            x: new Date(2017,10,3),
            y:15
        }, {
            x: new Date(2017,10,4),
            y:20
        }],
        fill: true,
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

const opts = {
        scales: {
            xAxes: [{
                type: 'time',
                time: {unit:'day'}
            }]
        }
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
            <Line data={data} options={opts}  
            />
        );
    }
}

export default ChartContainer;