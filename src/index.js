import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {Container, Row, Col} from 'reactstrap';
import GraphContainer from './components/Graph/GraphContainer'
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
		let mygraph = null;
		if (this.state.sensor === '') {
			mygraph = <div>Empty graph!</div>
		} else {
			mygraph = <GraphContainer sensor={this.state.sensor} key={this.state.sensor} />
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
						{mygraph}
					</Col>
				</Row>
			</Container>
        );
    }
}

ReactDOM.render(<Page />, document.getElementById('root'));
registerServiceWorker();
