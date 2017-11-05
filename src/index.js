import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {Container, Row, Col} from 'reactstrap';
import GraphList from './components/GraphList/GraphList'
import SideBarContainer from './components/Sidebar/SidebarContainer'
import Header from './components/Header/Header'

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
			<Container>
				<Row>
					<Col>
						<Header/>
					</Col>
				</Row>
				<Row>
					<Col className="col-2">
						<SideBarContainer sensorClick={this.sensorClick} />
					</Col>
					<Col>
						{graphs}
					</Col>
				</Row>
			</Container>
        );
    }
}

ReactDOM.render(<Page />, document.getElementById('root'));
registerServiceWorker();
