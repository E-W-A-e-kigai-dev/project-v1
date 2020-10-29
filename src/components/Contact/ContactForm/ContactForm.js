import React, {useState} from 'react';
import {Col, Row} from "react-bootstrap";
import{ init } from 'emailjs-com';
import * as emailjs from "emailjs-com";
import {MAIL_CONTACT_KEY, CONTACT_TEMPLATE_ID, MAIL_SERVICE_ID } from '../../../config';
import './ContactForm.css';
import {toast} from "react-toastify";

init(MAIL_CONTACT_KEY);


const ContactForm = ({history})=> {

    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [email, setEmail] = useState("");

    const isEmail = () =>{
        let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if(email.match(regex)){
            return true;
        }else{
            toast.error("Problème dans le format de votre email");
            return false;
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        if(name && message && isEmail()){
            sendFeedback(CONTACT_TEMPLATE_ID, {
                name,
                email,
                message,
            });
        }else {
            toast.error("Tous les champs du formulaire sont obligatoires");
        }
    };
    const sendFeedback = (templateId, variables) => {

        emailjs
            .send(MAIL_SERVICE_ID, templateId, variables)
            .then((res) => {
                toast.success("Message envoyé")
                setName("");
                setEmail("");
                setMessage("");
                history.replace("/");
            })
            .catch(
                (err) =>
                    toast.error("Une erreur est survenue lors de l'envoi"));
    };

    return (
        <>
            <div className="contact-section ">
                <div className="center col-12">
                    <h2 className="section-title text-center">Contactez-nous</h2>
                </div>
                <div className="col-12">
                    <form className="row justify-content-around form-contact">
                        <Col className="contact-form-card" xs={12} md={{span: "4", offset: 1}} lg={{span: "3", offset: 2}}>
                            <Row className="justify-content-center mt-2">
                                <div className="form-group col-10 col-md-12">
                                    <label className="form-label contact-label w-100">&nbsp;Nom :
                                        <input value={name} placeholder="Votre nom..."
                                               onChange={(e)=> setName(e.target.value)}
                                               className="form-control contact-input" type="text" name="name"/>
                                    </label>
                                </div>
                                <div className="form-group col-10 col-md-12">
                                    <label className="form-label contact-label w-100">&nbsp;Email :
                                        <input value={email} placeholder="Votre email..."
                                               onChange={(e)=> setEmail(e.target.value)}
                                               className="form-control contact-input" type="email" name="email"/>
                                    </label>
                                </div>
                            </Row>
                        </Col>
                        <Col className="contact-form-card" xs={12} md={5}>
                            <Row className="justify-content-center mt-2">
                                <div className="form-group col-10 col-md-12">
                                    <label className="form-label contact-label">&nbsp;Message :
                                        <textarea value={message} placeholder="Votre message..."
                                                  onChange={(e)=> setMessage(e.target.value)}
                                                  className="form-control textarea-contact" rows={10} cols={50}
                                                  name="message"/>
                                    </label>
                                </div>
                            </Row>
                        </Col>
                        <Col className="center mt-3 mb-3" xs={12}>
                            <button onClick={handleSubmit} className="btn btn-lg btn-submit"
                                    type="submit">ENVOYER
                            </button>
                        </Col>
                    </form>
                </div>
            </div>

        </>
    );
}


export default ContactForm;