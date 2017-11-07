import React from 'react';
import { Button } from 'reactstrap';
import './sidebar.css'

class Sidebar extends React.Component {

  handleClick = (evt) => {
    this.props.sensorClick(evt.target.textContent.replace('Sensor', '').trim())
  }

  render = () => {
    return (
      <div className="sidebar content-box ">
        <ul className="nav">
          {this.props.sensors.map(sensor => {
            return (
              <li className="current" key={sensor}>
                <a href="#" onClick={this.handleClick}>
                  <i className="glyphicon glyphicon-hand-right"></i>
                  &nbsp;Sensor {sensor}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Sidebar;