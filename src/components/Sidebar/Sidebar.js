import React from 'react';
import { Button } from 'reactstrap';
import './sidebar.css'


class Sidebar extends React.Component {

  handleClick = (evt) => {
    this.props.sensorClick(evt.target.textContent)
  }

  render = () => {
    return (
      <div className="sidebar">
        {this.props.sensors.map(sensor => {
          return (
            <Button key={sensor}
              color="primary"
              onClick={this.handleClick}>
              {sensor}
            </Button>
          );
        })}
      </div>
    );
  }
}

export default Sidebar;