import React from 'react';
import {ButtonToolbar, Button} from 'reactstrap'

class TypePicker extends React.Component {
	constructor(props, context) {
		super(props, context)
		this.state = {value: ['BAT', 'F', 'H', 'P', 'RSSI']}
	}

	onChange(val) {
		console.log(JSON.stringify(val))
	}

	render() {
		return (
			<div>
				<ButtonToolbar>
					<Button bsStyle='primary'>BAT</Button>
					<Button bsStyle='primary'>F</Button>
					<Button bsStyle='primary'>H</Button>
					<Button bsStyle='primary'>P</Button>
					<Button bsStyle='primary'>RSSI</Button>
				</ButtonToolbar>
			</div>
		);	
	}
}

export default TypePicker;