import React, {Component} from 'react';
import {Row, Col} from "react-bootstrap";

import './About.css';

import left_quote from '../../img/icones/left-quote.svg';
import right_quote from '../../img/icones/right-quote.svg';
import shop_front from '../../img/images/front.jpg';

class About extends Component {
    render() {
        return (
            <>
                <div className="about-presentation mt-3">
                    <Row>
                        <Col className="center" xs={12}>
                            <h2 className="section-title text-center">Notre restaurant</h2>
                        </Col>
                        <Col>
                            <img className="front-img" src={shop_front} alt="facade restaurant french fries"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={2} xl={3} className="left-quotes">
                            <img className="icon-quote icon-quote-left" src={left_quote} alt="guillemets gauche"/>
                        </Col>
                        <Col>
                            <p className="about-presentation-text">
                                Situé au coeur du centre ville de Lille, face à la gare. Nous vous accueillons dans un cadre chaleureux et convivial.
                                Nous conjuguons notre goût pour la cuisine américaine et notre savoir faire en cuisine française.
                                Que ce soit pour un repas express ou prendre le temps entre amis nous répondrons à vos attentes
                            </p>
                        </Col>
                        <Col xs={2} xl={3} className="right-quotes">
                            <img className="icon-quote" src={right_quote} alt="guillemets droit"/>
                        </Col>
                    </Row>
                </div>
            </>
        );
    }
}

export default About;