import React from 'react';
import './header.css'
import { Container, Row, Col } from 'reactstrap'

class Header extends React.Component {

    render() {
        return (
            <div id="header" className="header">
                <Container>
                    <Row>
                        <Col xs="col-md-5">
                            <div id="title" className="logo title">
                                <h1>Sensor Console</h1>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            // <div className="header">
            //     <div className="container">
            //     <div className="row">
            //         <div className="col-md-5">
            //             <div className="logo title">
            //                 <h1>Sensor Console</h1>
            //             </div>
            //         </div>
            //         <div className="col-md-5">
            //         </div>
            //         <div className="col-md-5">
            //         </div>
            //         <div className="col-md-2">
            //             <div className="navbar navbar-inverse" role="banner">
            //                 <nav className="collapse navbar-collapse bs-navbar-collapse navbar-right" role="navigation">
            //                     <ul className="nav navbar-nav">
            //                     <li className="dropdown">
            //                         <a href="#" className="dropdown-toggle" data-toggle="dropdown">My Account <b className="caret"></b></a>
            //                         <ul className="dropdown-menu animated fadeInUp">
            //                             <li><a href="profile.html">Profile</a></li>
            //                             <li><a href="login.html">Logout</a></li>
            //                         </ul>
            //                     </li>
            //                     </ul>
            //                 </nav>
            //             </div>
            //         </div>
            //     </div>
            //     </div>
            // </div>
        );
    }
}

export default Header;

