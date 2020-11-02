import React, {Component} from 'react';

import './Contact.css';

import ContactForm from "./ContactForm/ContactForm";
import NavbarMobile from "../Navbar/NavbarMobile/NavbarMobile";
import NavbarDesktop from "../Navbar/NavbarDesktop/NavbarDesktop";
import HeaderMobile from "../Header/HeaderMobile/HeaderMobile";
import HeaderDesktop from "../Header/HeaderDesktop/HeaderDesktop";

class Contact extends Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }

    render() {
        const isMobile = window.innerWidth <= 768;
        return (
            <>
                {isMobile ? <NavbarMobile/>: <NavbarDesktop/>}
                {isMobile ? <HeaderMobile title={'Nous contacter'}/> : <HeaderDesktop/>}
                <div className="contact-section ">
                    <div className="center col-12">
                        <h2 className="section-title text-center">Contactez-nous</h2>
                    </div>
                    <div className="col-12">
                        <ContactForm/>
                    </div>
                </div>
            </>
        );
    }
}

export default Contact;