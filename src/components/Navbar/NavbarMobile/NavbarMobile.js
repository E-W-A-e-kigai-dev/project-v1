import React, {Component} from 'react';
import {Navbar, Nav, Col} from 'react-bootstrap';
import {Link} from "react-router-dom";
import { slide as Menu } from 'react-burger-menu';

import './NavbarMobile.css';

import logo from '../../../img/logos/logo-resto.svg';
import icon_menu from '../../../img/icones/menu.svg';
import close_menu from '../../../img/icones/close.svg';


class NavbarMobile extends Component {
    render() {
        const closeMenu = () => document.querySelector(".closeMenu").click();
        const isMobile = window.innerWidth < 768;
        return (
            <>
                <Navbar className="p-0 top-bar-mobile" sticky="top">
                    <Col xs={8} className="">
                        <Navbar.Brand as={Link} to="/">
                            <img className="nav-mobile-logo w-50" src={logo} alt="french fries logo"/>
                        </Navbar.Brand>

                    </Col>
                    <Menu
                        style={{height: '88vh'}}
                        overlayClassName={"closeMenu"}
                        className="nav-mobile"
                        customBurgerIcon={<img className="menu-icon" src={icon_menu} alt="icone menu"/> }
                        customCrossIcon={<img className="menu-icon-close" src={close_menu} alt="icone croix"/> }
                        width={isMobile? '200px' : '250px'}
                        right
                    >
                        <Nav.Link onClick={closeMenu} as={Link} className='nav-mobile-link btn btn-menu text-center mt-5' to="/" eventKey="/">Accueil</Nav.Link>
                        <Nav.Link onClick={closeMenu} as={Link} className='nav-mobile-link btn btn-menu text-center mt-3' to="/prestations" eventKey="/carte">La Carte</Nav.Link>
                        <Nav.Link onClick={closeMenu} as={Link} className='nav-mobile-link btn btn-menu text-center mt-3' to="/contact" eventKey="/contact">Nous contacter</Nav.Link>
                        <Nav.Link onClick={closeMenu} as={Link} className='nav-mobile-link btn btn-menu text-center mt-3' to="/apropos" eventKey="/apropos">A Propos</Nav.Link>
                        <div className="card card-menu mx-auto">
                            <div className="card-title text-center activities-title">
                                <h2><u>HORAIRES</u></h2>
                            </div>
                            <div className="card-body mx-auto card-contact">
                                Du mardi au vendredi :<br/>
                                MIDI: 11h - 15h<br/>
                                SOIR: 18h - 23h<br/><br/>
                                Samedi : 11h - minuit<br/><br/>
                                Dimanche : 18h - 22h
                            </div>
                        </div>
                        <p className="maker mt-3 text-center">Made by e-kigaï-dev © 2020 - Tous droits réservés</p>
                    </Menu>
                </Navbar>
            </>
        );
    }
}

export default NavbarMobile;