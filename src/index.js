import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './mg.css';
import registerServiceWorker from './registerServiceWorker';
import request from 'request';
import MetricsGraphics from 'react-metrics-graphics';
import dateformat from 'dateformat';

var url = 'http://74.208.159.205:5000/Sensors?page=IDX&where={"type":"F","time":{"$gte":1507953600}}'
var oct14start = 1507953600.0
var oct14end = 1508040000.0
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
		this.state=null;
		this.getPage(1, this.state);
	}
	
	getPage(page, mystate) {
		console.log('requesting page ', page);
		var actualURL = url.replace('IDX',page);

		request(actualURL, function(err, resp, body) {
			console.log('returned from request call!');
			var rawdata = JSON.parse(body);
			for (var i = 0; i < body._items.length; i++) {
				var el = body._items[i]
				curData.push({'date': new Date(this.fmtDate(el.time)), 'value': this.fmtTemp(el.value)})
			}
			if (body._links.next !== null) {
				page = page + 1;
				this.getPage(page);
			} else {
				mystate.setState({"data": curData});				
			}
		});
	}

	changeDateRange(minDate,maxDate){
		//this.setState({minDate:minDate, maxDate:maxDate});
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
				{/* <div className="exampleToolBox">
					<button className="isimple-btn" onClick={this.changeDateRange.bind(this,minDate,new Date('2014-01-15')) }>
						Set Max Date to 1/15/2014
					</button>
					<button className="isimple-btn" onClick={this.changeDateRange.bind(this,minDate,new Date('2014-01-30')) }>
						Set Max Date to 1/30/2014
					</button>
				</div> */}
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
