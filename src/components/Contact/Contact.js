import React, {Component} from 'react';

import './Contact.css';

import ContactForm from "./ContactForm/ContactForm";

class Contact extends Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }

    render() {
        return (
            <>
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