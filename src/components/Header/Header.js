import React from 'react';
//import './header.css';

class Header extends React.Component {

    render() {
        return (
            <div id="nav" className="pure-u">
            <div className="pure-menu custom-width">
                <span className="pure-menu-heading">
                    <button className="primary-button pure-button">Sensors</button>
                </span>
                <ul className="pure-menu-list">
                    <li className="pure-menu-item">Sensor 1</li>
                    <li className="pure-menu-item">Sensor 2</li>
                    <li className="pure-menu-item">Sensor 3</li>
                    <li className="pure-menu-item">Sensor 4</li>
                    <li className="pure-menu-item">Sensor 5</li>
                </ul>
            </div>
            </div>
        );
    }
}

export default Header;
