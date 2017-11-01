import React from 'react';
import ReactDOM from 'react-dom';
import './mg.css';
import registerServiceWorker from './registerServiceWorker';
import Sidebar from '../src/components/Sidebar/Sidebar.js'
import Footer from '../src/components/Footer/Footer.js'
import './scss/allstyles.css'

class Page extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
        return (
            <div>
                <div>
					<Sidebar />
				</div>
                <div>
					<Footer />
				</div>
            </div>
        );
    }
}
ReactDOM.render(<Page />, document.getElementById('root'));
registerServiceWorker();
