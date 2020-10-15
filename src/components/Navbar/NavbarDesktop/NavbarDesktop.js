import React, {Component} from 'react';
import {Col, Navbar, Nav} from "react-bootstrap";
import {Link} from "react-router-dom";
import logo from '../../../img/logos/logo-resto.svg';

import './NavbarDesktop.css';

class NavbarDesktop extends Component {
    render() {
        return (
            <>
                <Navbar className="p-0 top-bar-desktop" sticky="top">
                    <Col xs={3} xl={4} className="">
                        <Navbar.Brand as={Link} to="/">
                            <img className="nav-desk-logo ml-2" src={logo} alt="ab-ramonage logo"/>
                        </Navbar.Brand>
                    </Col>
                    <Col xs={9} xl={8}>
                        <Nav
                            className="nav-desktop ml-5"
                            activeKey="/"
                        >
                            <Nav.Item className="btn-nav-desk mr-3 mr-xl-5">
                                <Nav.Link className="nav-desktop-item text-center btn" as={Link} to="/">Accueil</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="btn-nav-desk mr-3 mr-xl-5 ml-3 ml-xl-5">
                                <Nav.Link className="nav-desktop-item btn" as={Link} to="/carte" eventKey="/carte">La Carte</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="btn-nav-desk mr-3 ml-3 mr-xl-5 ml-xl-5">
                                <Nav.Link className="nav-desktop-item btn" as={Link} to="/apropos" eventKey="/apropos">A Propos</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="btn-nav-desk mr-3 ml-3 mr-xl-5 ml-xl-5">
                                <Nav.Link className="nav-desktop-item btn" as={Link} to="/contact" eventKey="/contact">Nous contacter</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                </Navbar>
            </>
        );
    }
}

export default NavbarDesktop;