import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './mg.css';
import registerServiceWorker from './registerServiceWorker';
import request from 'request';
import MetricsGraphics from 'react-metrics-graphics';
import dateformat from 'dateformat';

var url = 'http://74.208.159.205:5000/sensor/51?skip=10&type=F'
//var url = 'http://74.208.159.205:5000/Sensors?page=IDX&where={"type":"F","time":{"$gte":1507953600}}'
//var url = 'http://localhost:5000/test'
var curData = []

class Page extends React.Component {
    render() {
        return (
            <div>
                <p>starting...</p>
                <div><App /></div>
            </div>
        );
    }
}

class App extends React.Component {
	constructor(props){
		super(props);
		//this.state=null;
		console.log('requesting data...');
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
					<p>Waiting for data...</p>
				</div>
			);
		}

		var curData = this.state.data;	
		return (
			<div>
				<MetricsGraphics
					title="Line Chart"
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
	
	fmtTemp(temp) {
		return temp.replace("\'","").replace("\'","").replace('b','').trim()    
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
