import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {Line} from 'react-chartjs-2';
import request from 'request';
import MetricsGraphics from 'react-metrics-graphics';

class Page extends React.Component {
    render() {
        return (
            <div>
                <p>starting...</p>
                <div><Sensors /></div>
            </div>
        );
    }
}

var gdata = 
[
    {
        "date": "10/5/2017",
        "value": 1
    },
    {
        "date": "10/6/2017",
        "value": 5
    },
    {
        "date": "10/7/2017",
        "value": 100
    }
]

class NewGraph extends React.Component {
    render() {
        return (
            <div>
                Hi, new component.<br/>
                <div>
                <MetricsGraphics
                    title="Temps"
                    chart_type='line'
                    data={gdata}
                    width={600}
                    height={250}
                    x_accessor="date"
                    y_accessor="value"
                />
                </div>
            </div>
        );
    }
}

class Sensors extends React.Component {
    constructor(props) {
        super(props);
        var me = this; //provide handle to state functions within callbacks.
        var url = 'http://74.208.159.205:5000/Sensors'
        //var url = 'https://jsonplaceholder.typicode.com/posts/1'
        me.state = {body: {"_items":{}}}
        request(url, function(err, resp, body) {
            me.setState({err: err, resp: resp, body: body})
            console.log('page returned!')
            console.log('err', err)
            console.log('resp', resp)
            console.log('body', body)
        })
    }

    render() {
        return(
            <div>
                <p>yo! sensor data</p><br/>
                <p>state = {this.state.body[0]}</p><br/>
                <p><Line data={cdata} options={copts} /></p>
            </div>
        );
    }
}

var cdata = {
    labels: ["Thu", "Fri", "Sat", "Sun", "Mon", "Tue"],
    datasets: [{
        label: 'Hi Temp',
        fill: false,
        data: [77, 79, 65, 67, 70, 85],
        borderColor: '#ff0000',
        borderWidth: 2
    },
    {
        label: 'Low Temp',
        fill: false,
        data: [57, 60, 55, 56, 60, 65],
        borderColor: '#000076',
        borderWidth: 2
        }]
}

var copts = {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero:false,
                min: 30
            }
        }]
    },
    layout: {
        padding: {
            left: 50, right: 50, top: 10, bottom: 10
        }
    },
    legend: {
        display: false
    }
}


class MyChart extends React.Component {
    render() {
        return <Line data={cdata} options={copts} width="100" height="50" />
    }    
}

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <a href="#menu" className="box-shadow-menu" alt="" />
                Maine
            </div>
        );
    }
}

class Temps extends React.Component {
    render() {
        return (
            <div className="top">
                <div className ="left">
                    <span className="big">65F</span><br/>
                    <span className="small">Living Room</span>
                </div>
                <div className ="right">
                    <span className="big">55F</span><br/>
                    <span className="small">Cellar</span>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Page />, document.getElementById('root'));
registerServiceWorker();
