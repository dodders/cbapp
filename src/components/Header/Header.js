import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

class Header extends React.Component {

    render() {
        return (
            <div>
                <Navbar color="faded">
                    <NavbarBrand href="/">Sensor Dashboard</NavbarBrand>
                </Navbar>
            </div>
        );
    }
}

export default Header;

