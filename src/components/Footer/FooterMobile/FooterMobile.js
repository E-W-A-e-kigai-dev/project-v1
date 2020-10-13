import React, {Component} from 'react';
import {Row, Col, Nav} from "react-bootstrap";
import {Link} from "react-router-dom";

import './FooterMobile.css';

import logo from '../../../img/logos/logo-resto.svg';


class FooterMobile extends Component {
    render() {
        return (
            <>
                <footer className="footer-section">
                    <Row className="footer-mobile-section row p-0">
                        <Col className="mt-2" xs={4}>
                            <img className="footer-logo w-100" alt="AB-ramonage logo" src={logo}/>
                        </Col>
                        <Col className="p-0 mt-2" xs={8}>
                            <Nav className="nav-footer-mobile">
                                <Col xs={6} className="p-0">
                                    <Nav.Link as={Link} className='nav-footer-mobile-link text-center mt-1 p-0' to="/" eventKey="/">- Accueil</Nav.Link>
                                    <Nav.Link as={Link} className='nav-footer-mobile-link text-center mt-3 p-0' to="/carte" eventKey="/carte">- La Carte</Nav.Link>
                                </Col>
                                <Col xs={6} className="p-0">
                                    <Nav.Link as={Link} className='nav-footer-mobile-link text-center mt-1 p-0' to="/apropos" eventKey="/apropos">- Nous contacter</Nav.Link>
                                    <Nav.Link as={Link} className='nav-footer-mobile-link text-center mt-3 p-0' to="/contact" eventKey="/contact">- Nous contacter</Nav.Link>
                                </Col>
                            </Nav>
                        </Col>
                        <Col xs={12}>
                            <p className="text-center mt-1 mb-0 company-sentence">Made by e-kigaï-dev © 2020 - Tous droits réservés</p>
                        </Col>
                    </Row>
                </footer>
            </>
        );
    }
}

export default FooterMobile;