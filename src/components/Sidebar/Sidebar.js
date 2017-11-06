import React from 'react';
import { Button } from 'reactstrap';
import './sidebar.css'

class Sidebar extends React.Component {

  handleClick = (evt) => {
    this.props.sensorClick(evt.target.textContent)
  }

  render = () => {
    return (
      <div className="sidebar content-box sidebar-block">
        <ul className="nav">
          {this.props.sensors.map(sensor => {
            return (
              <li className="current"><a href="#"><i className="glyphicon glyphicon-home"></i>{sensor}</a></li>
                  // onClick={this.handleClick}>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Sidebar;