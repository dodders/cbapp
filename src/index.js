import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {Line} from 'react-chartjs-2';

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

class Page extends React.Component {
    render() {
        return (
            <div>
                <div><Header /></div>
                <div><Temps /></div>
                <div><MyChart /></div>
            </div>
        );
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
//ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
