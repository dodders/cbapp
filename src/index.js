import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {Container, Row, Col} from 'reactstrap';
import GraphList from './components/GraphList/GraphList'
import SideBarContainer from './components/Sidebar/SidebarContainer'
import Header from './components/Header/Header'
// import './assets/css/bootstrap-social.css'
// import './assets/css/bootstrap-theme.css'
// import './assets/css/bootstrap.css'
// import './assets/css/font-awesome.css'
import './newassets/css/bootstrap.min.css'
import './newassets/css/styles.css'

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
		console.log('index rendering with sensor ' + this.state.sensor)
		let graphs = null;
		if (this.state.sensor === '') {
			graphs = <div>Empty graph!</div>
		} else {
			graphs = <GraphList sensor={this.state.sensor} key={this.state.sensor} />
		}

        return (	
			<div>		
				<Header />
				<div className="page-content">
					<Row>
						<Col xs="col-md-2">
							<SideBarContainer sensorClick={this.sensorClick} />
						</Col>
						<Col xs="col-md-10">
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
