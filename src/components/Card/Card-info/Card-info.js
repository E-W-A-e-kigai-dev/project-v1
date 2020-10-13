import React, {Component} from 'react';
import {Row, Col} from "react-bootstrap";

import './Card-info.css';

class CardInfo extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <div className="card card-info mb-3 w-100">
                    <Row>
                        <Col xs={6}>
                            <h4><u>Nos sauces :</u></h4>
                            <p>
                                Ketchup, Mayonnaise, Samuraï, Andalouse, Barbecue, Burger, Ranch, Moutarde
                            </p>
                        </Col>
                        <Col className="p-0" xs={6}>
                            <Row>
                                <Col className="p-0" xs={9}>
                                    <h4><u>Suppléments : </u></h4>
                                </Col>
                                <Col className="p-0 mt-1" xs={3}>
                                    <div className="high-price"><span className="price-supp">0,50€<br/><span className="low-text center">l'unité</span></span></div>
                                </Col>
                            </Row>
                            <p>
                                Cheddar, Bacon,
                                Oignons grillés, Oignons caramélisés, crudités
                            </p>
                        </Col>
                    </Row>
                </div>
            </>
        );
    }
}

export default CardInfo;