import React, {Component} from 'react';
import axios from 'axios';

import './Contact.css';

import ContactForm from "./ContactForm/ContactForm";

class Contact extends Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }

    handleEnvoiMail = (message) =>{
        axios.post("http://localhost/Client-project/server-ab-ramonage/front/sendMessage", message)
            .then(res => {
                console.log(res);
                this.props.history.push('/');
            })
            .catch(error=>{
                console.log(error)
            });
    }
    render() {
        return (
            <>
                <div className="contact-section mt-5">
                    <div className="center col-12">
                        <h2 className="section-title text-center">Contactez-nous</h2>
                    </div>
                    <div className="col-12">
                        <ContactForm sendMail={this.handleEnvoiMail}/>
                    </div>
                </div>
            </>
        );
    }
}

export default Contact;