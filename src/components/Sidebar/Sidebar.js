import React, {Component} from 'react';
import {Nav, NavItem, NavLink} from 'reactstrap';

class Sidebar extends Component {

  render() {
    // sidebar-nav root
    return (
      <div className="sidebar">
        <Nav className="sidebar-nav">
            <NavItem>
                <NavLink href="#">Link</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#">Link</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#">Another Link</NavLink>
            </NavItem>
            <NavItem>
                <NavLink disabled href="#">Disabled Link</NavLink>
            </NavItem>
        </Nav>
      </div>
    )
  }
}

export default Sidebar;