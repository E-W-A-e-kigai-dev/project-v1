import React from 'react';
import {Col, Row} from "react-bootstrap";
import {withFormik} from "formik";
import * as Yup from "yup";

import './ContactForm.css';

const ContactForm = (props)=> {

    return (
        <>
            <form className="row justify-content-around form-contact">
                <Col className="contact-form-card" xs={12} md={{span: "4", offset: 1}} lg={{span: "3", offset: 2}}>
                    <Row className="justify-content-center mt-2">
                        <div className="form-group col-10 col-md-12">
                            <label className="form-label contact-label w-100">&nbsp;Nom :
                                <p className="errors-message">{props.errors.name && props.touched.name && props.errors.name}</p>
                                <input value={props.values.name} placeholder="Votre nom..."
                                       onBlur={props.handleBlur} onChange={props.handleChange}
                                       className="form-control contact-input" type="text" name="name"/>
                            </label>
                        </div>
                        <div className="form-group col-10 col-md-12">
                            <label className="form-label contact-label w-100">&nbsp;Email :
                                <p className="errors-message">{props.errors.email && props.touched.email && props.errors.email}</p>
                                <input value={props.values.email} placeholder="Votre email..."
                                       onBlur={props.handleBlur} onChange={props.handleChange}
                                       className="form-control contact-input" type="email" name="email"/>
                            </label>
                        </div>
                    </Row>
                </Col>
                <Col className="contact-form-card" xs={12} md={5}>
                    <Row className="justify-content-center mt-2">
                        <div className="form-group col-10 col-md-12">
                            <label className="form-label contact-label">&nbsp;Message :
                                <p className="errors-message">{props.errors.message && props.touched.message && props.errors.message}</p>
                                <textarea value={props.values.message} placeholder="Votre message..."
                                          onBlur={props.handleBlur} onChange={props.handleChange}
                                          className="form-control textarea-contact" rows={10} cols={50}
                                          name="message"/>
                            </label>
                        </div>
                    </Row>
                </Col>
                <Col className="center mt-3 mb-3" xs={12}>
                        <button onClick={props.handleSubmit} className="btn btn-lg btn-submit"
                                type="submit">ENVOYER
                        </button>
                </Col>
            </form>
        </>
    );
}


export default withFormik({
    mapPropsToValues: () =>({
        name: '',
        email: '',
        message: ''
    }),
    validationSchema : Yup.object().shape({
        name: Yup.string()
            .min(3, '! Votre nom doit contenir au moins 3 caractères')
            .max(50, '! Nom trop long')
            .required('! Obligatoire'),
        email: Yup.string()
            .email("! L'email n’a pas le bon format")
            .required('! Obligatoire'),
        message: Yup.string()
            .min(3, '! Le message doit contenir au moins 3 caractères')
            .max(1500, '! Le message est trop long')
            .required('! Obligatoire'),
    }),
    handleSubmit: (values, {props}) => {
        const message = {
            nom : values.name,
            email: values.email,
            subject: 'Contact french fries - ' + values.email,
            contenu: values.message
        }
        props.sendMail(message);
    }
})(ContactForm);