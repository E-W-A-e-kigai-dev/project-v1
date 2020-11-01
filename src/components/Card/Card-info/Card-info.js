import React, {Component} from 'react';
import {Row, Col} from "react-bootstrap";
import {AttentionSeeker} from 'react-awesome-reveal';


import './Card-info.css';


class CardInfo extends Component {

    render() {
        return (

            <>
                <AttentionSeeker shakeX>
                    <div className="card mx-auto card-info mb-3">
                        <Row>
                            <Col xs={6}>
                                <h4 className="sauce-title"><u>Nos sauces :</u></h4>
                                <p className="sauces-content">
                                    Ketchup, Mayonnaise, Samuraï, Andalouse, Barbecue, Burger, Ranch, Moutarde
                                </p>
                            </Col>
                            <Col className="p-0" xs={6}>
                                <Row>
                                    <Col className="p-0" xs={9}>
                                        <h4 className="sauce-title"><u>Suppléments : </u></h4>
                                    </Col>
                                    <Col className="p-0 mt-1" xs={3}>
                                        <div className="high-price"><span className="price-supp text-dark">0,50€<br/><span className="low-text center text-dark">l'unité</span></span></div>
                                    </Col>
                                </Row>
                                <p className="sauces-content">
                                    Cheddar, Bacon,
                                    Oignons grillés, Oignons caramélisés, crudités
                                </p>
                            </Col>
                        </Row>
                    </div>
                </AttentionSeeker>

            </>
        );
    }
}

export default CardInfo;