import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {Row, Col} from 'reactstrap';
import GraphList from './components/GraphList/GraphList'
import SideBarContainer from './components/Sidebar/SidebarContainer'
import Header from './components/Header/Header'
// import './assets/css/bootstrap-social.css'
// import './assets/css/bootstrap-theme.css'
// import './assets/css/bootstrap.css'
// import './assets/css/font-awesome.css'
import './newassets/css/bootstrap.min.css'
import './newassets/css/styles.css'
import './index.css'
import ChartContainer from './components/Chart/ChartContainer'

var appstate = {sensor: ''}

class Page extends React.Component {
	constructor(props) {
		super(props)
		this.sensorClick = this.sensorClick.bind(this)
		this.state = appstate
	}

	sensorClick(sens) {
		console.log('sensor selected:', sens)
		this.setState({sensor: sens})
	}
	
	render() {
		// return (
		// 	<ChartContainer />
		// )
		console.log('index rendering with sensor ' + this.state.sensor)
		let graphs = null;
		if (this.state.sensor === '') {
			graphs = <div></div>
		} else {
			graphs = <GraphList sensor={this.state.sensor} key={this.state.sensor} />
		}

        return (	
			<div>		
				<Header />
				<div className="page-content">
					<Row>
						<Col xs="md-2">
							<SideBarContainer sensorClick={this.sensorClick} />
						</Col>
						<Col xs="md-10">
							{graphs}
						</Col>
					</Row>
				</div>
			</div>
        );
    }
}

ReactDOM.render(<Page />, document.getElementById('root'));
registerServiceWorker();
