import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class Header extends React.Component {

    render() {
        return (
            <div>
                <Navbar color="primary">
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="#">Linky</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}

export default Header;
