import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {Row, Col} from "react-bootstrap";

import './Homepage.css';

import left_quote from '../../img/icones/left-quote.svg';
import right_quote from '../../img/icones/right-quote.svg';
import banner_bg from '../../img/background/separator-homepage-bg.jpg';
import shop_front from '../../img/images/front.jpg';
import find from '../../img/images/find.png';
import Contact from "../Contact/Contact";

class Homepage extends Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }
    render() {
        return (
            <>
                <Row className="homepage-presentation-section container-fluid mt-5">
                    <Col xs={2} xl={3} className="left-quotes">
                        <img className="icon-quote icon-quote-left" src={left_quote} alt="guillemets gauche"/>
                    </Col>
                    <Col xs={8} xl={6} className="homepage-presentation w-75 center text-center mx-auto">
                        <p>      Chez French Fries nous mettons à l’honneur la frite en la travaillant dans le respect des traditions et avec des producteurs locaux.
                            Juste envie de déguster une frite ou vous laisser tenter par un de nos merveilleux sandwichs pour accompagner vos frites.
                            Car oui, chez nous l’ accompagnement ne sont pas les frites… </p>
                    </Col>
                    <Col xs={2} xl={3} className="right-quotes">
                        <img className="icon-quote" src={right_quote} alt="guillemets droit"/>
                    </Col>
                </Row>
                <div className="homepage-banner-separator-text text-center center mt-3">
                    <p>Notre carte évolue fréquemment, la seule chose permanente reste la qualité de nos frites</p>
                </div>
                <div
                    style={{
                        backgroundImage: `url(${banner_bg})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                    className="homepage-banner-separator">
                    <Link className="btn btn-lg btn-mobile-banner text-white btn-contact-desk" to="/carte">La carte</Link>
                </div>
                <Row>
                    <div className="center col-12">
                        <h2 className="section-title text-center">Nous trouver</h2>
                    </div>
                    <Col xs={12} md={12} className="center">
                        <Col xs={12} md={6} className="mx-auto">
                            <img className="mx-auto w-100" src={shop_front} alt="facade french fries"/>
                        </Col>
                    </Col>
                </Row>
                <Row className="mt-5 center">
                    <Col className="center" xs={8} md={3}>
                        <img className="find-img w-100" alt="carte pour situer french fries" src={find}/>
                    </Col>
                    <Col className="center" xs={12} md={3}>
                        <p className="adress-find">
                            11 avenue du 14 juillet<br/>
                            59000 Lille<br/>
                            03 34 54 21 38 / 06 75 43 21 89
                        </p>
                    </Col>
                </Row>
                <Contact/>
            </>
        );
    }
}

export default Homepage;