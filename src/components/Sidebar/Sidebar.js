import React from 'react';
import { Col } from 'reactstrap';
import './sidebar.css'

class Sidebar extends React.Component {

  handleClick = (evt) => {
    this.props.sensorClick(evt.target.textContent.replace('Sensor', '').trim())
  }

  render = () => {
    return (
      <Col>
      <div id="sidebar" className="sidebar content-box">
        <ul>
          {this.props.sensors.map(sensor => {
            return (
              <li id="sensor-item" className="current" key={sensor}>
                <button onClick={this.handleClick} className="btn btn-info">{sensor}</button>
              </li>
            );
          })}
        </ul>
      </div>
      </Col>
    );
  }
}

export default Sidebar;