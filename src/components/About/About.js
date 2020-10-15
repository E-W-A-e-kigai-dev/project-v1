import React, {Component} from 'react';
import {Row, Col, Card} from "react-bootstrap";
import { Carousel } from 'react-responsive-carousel';

import './About.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


import left_quote from '../../img/icones/left-quote.svg';
import right_quote from '../../img/icones/right-quote.svg';
import shop_front from '../../img/images/front.jpg';
import about_separator_bg from '../../img/images/about-separator-bg.jpg';
import fb_publi_one from '../../img/images/facebook-1.jpg';
import left_arrow from '../../img/images/left-chevron.svg';
import right_arrow from '../../img/images/right-chevron.svg';

import Contact from "../Contact/Contact";

class About extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentSlide: 0,
            autoPlay: false,
        };
    }

    next = () => {
        this.setState((state) => ({
            currentSlide: state.currentSlide + 1,
        }));
    };

    previous = () => {
        this.setState((state) => ({
            currentSlide: state.currentSlide - 1,
        }));
    };

    updateCurrentSlide = (index) => {
        const { currentSlide } = this.state;

        if (currentSlide !== index) {
            this.setState({
                currentSlide: index,
            });
        }
    };

    render() {
        return (
            <>
                <div className="about-presentation mt-3">
                    <Row className="center">
                        <Col className="center" xs={12}>
                            <h2 className="section-title text-center">Notre restaurant</h2>
                        </Col>
                        <Col className="center" xs={10}>
                            <img className="front-img rounded w-100" src={shop_front} alt="facade restaurant french fries"/>
                        </Col>
                    </Row>
                    <Row className='mt-3'>
                        <Col xs={2} xl={3} className="left-quotes">
                            <img className="icon-quote icon-quote-left" src={left_quote} alt="guillemets gauche"/>
                        </Col>
                        <Col>
                            <p className="about-presentation-text text-center">
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
                <div
                    style={{
                        backgroundImage: `url(${about_separator_bg})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                    className="about-separator-banner mt-3">

                </div>
                <div className="open-hours-section">
                    <Row className="center">
                        <Col className="about-horaires-card mt-5 mb-5" xs={10}>
                            <Row>
                                <Col className="center" xs={12}>
                                    <h2 className="section-title text-center">Nos horaires</h2>
                                </Col>
                                <Col xs={12}>
                                    <p>
                                        <u>Mardi / Mercredi / Jeudi / Vendredi</u> :<br/>
                                        MIDI : 11h - 15h.  SOIR : 18h - 23h
                                    </p>
                                </Col>
                                <Col xs={12}>
                                    <p>
                                        <u>Samedi </u>:<br/>
                                        Journée continue 11h - minuit
                                    </p>
                                </Col>
                                <Col xs={12}>
                                    <p>
                                        <u>Dimanche </u>:<br/>
                                        Fermé le midi, ouvert le soir 18h - 22h<br/>
                                        <u>FERMÉ LE LUNDI</u>
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
                <div className="about-network-section mb-5">
                    <Col className="center" xs={12}>
                        <h2 className="section-title text-center">Nos réseaux</h2>
                    </Col>
                    <Row className="center">
                        <Col xs={2} >
                            <img className="carousel-arrow" onClick={this.previous} src={left_arrow} alt="flèche vers la gauche"/>
                        </Col>
                        <Col xs={8}>
                            <Carousel
                                showThumbs={false}
                                autoPlay={this.state.autoPlay}
                                selectedItem={this.state.currentSlide}
                                onChange={this.updateCurrentSlide}
                                {...this.props}
                            >

                                    <Card className="card-fb-publication">
                                        <Card.Title>
                                            Publication du 11/10/2020
                                        </Card.Title>
                                        <Card.Img alt="publication facebook" src={fb_publi_one}/>
                                        <Card.Body>
                                            Fermeture estivale durant le mois d’août, on se retrouve pour la rentrée
                                        </Card.Body>
                                    </Card>
                                    <Card className="card-fb-publication">
                                        <Card.Title>
                                            Publication du 11/10/2020
                                        </Card.Title>
                                        <Card.Img alt="publication facebook" src={fb_publi_one}/>
                                        <Card.Body>
                                            Fermeture estivale durant le mois d’août, on se retrouve pour la rentrée
                                        </Card.Body>
                                    </Card>
                                    <Card className="card-fb-publication">
                                        <Card.Title>
                                            Publication du 11/10/2020
                                        </Card.Title>
                                        <Card.Img alt="publication facebook" src={fb_publi_one}/>
                                        <Card.Body>
                                            Fermeture estivale durant le mois d’août, on se retrouve pour la rentrée
                                        </Card.Body>
                                    </Card>
                                    <Card className="card-fb-publication">
                                        <Card.Title>
                                            Publication du 11/10/2020
                                        </Card.Title>
                                        <Card.Img alt="publication facebook" src={fb_publi_one}/>
                                        <Card.Body>
                                            Fermeture estivale durant le mois d’août, on se retrouve pour la rentrée
                                        </Card.Body>
                                    </Card>
                            </Carousel>
                        </Col>
                        <Col xs={2} >
                            <img className="carousel-arrow" onClick={this.next} src={right_arrow} alt="flèche vers la gauche"/>
                        </Col>
                    </Row>
                </div>
                <Contact/>
            </>
        );
    }
}

export default About;