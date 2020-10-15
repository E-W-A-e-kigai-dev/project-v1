import React, {Component} from 'react';
import {Row, Col, Card, CardImg} from "react-bootstrap";

import './FriesCard.css';

import small_price from '../../../img/images/small-size.svg';
import medium_price from '../../../img/images/medium-size.svg';
import high_price from '../../../img/images/large-size.svg';

class FriesCard extends Component {
    render() {
        const fries= [
            {
                id: 1,
                name: 'Frites nature',
                lowPrice: '2€50',
                mediumPrice: '3€',
                highPrice: '3€50'
            },
            {
                id: 2,
                name: 'Frites au Cheddar',
                lowPrice: '3€',
                mediumPrice: '3€50',
                highPrice: '4€'
            },
            {
                id: 3,
                name: 'Frites aux oigons grillés',
                lowPrice: '3€',
                mediumPrice: '3€50',
                highPrice: '4€'
            },
            {
                id: 4,
                name: 'Frites avec Bacon grillé',
                lowPrice: '3€50',
                mediumPrice: '4€',
                highPrice: '4€50'
            },
            {
                id: 5,
                name: 'Frites, avec tous les suppléments',
                lowPrice: '4€',
                mediumPrice: '4€50',
                highPrice: '5€'
            },
            {
                id: 6,
                name: 'Frites, pour deux avec un supplément',
                lowPrice: '4€50',
                mediumPrice: '5€',
                highPrice: '5€50'
            }
        ];

        const listFries = fries.map(frie =>(
            <Col xs={12} key={frie.id}>
                <Col xs={12}>
                    <h3 className="product-name">- {frie.name}</h3>
                </Col>
               <Row>
                   <Col xs={4}>
                       <Card className="card-product center">
                           <CardImg src={small_price} alt="ecusson prix petite taille"/>
                           <Card.ImgOverlay className="center">
                               <Card.Title className="price-card text-white">{frie.lowPrice}</Card.Title>
                           </Card.ImgOverlay>
                       </Card>
                   </Col>
                   <Col xs={4}>
                       <Card className="card-product center">
                           <CardImg className="price-img" src={medium_price} alt="ecusson prix taille moyenne"/>
                           <Card.ImgOverlay className="center">
                               <Card.Title className="price-card mt-2 text-white">{frie.mediumPrice}</Card.Title>
                           </Card.ImgOverlay>
                       </Card>
                   </Col>
                   <Col xs={4}>
                       <Card className="card-product center">
                           <CardImg src={high_price} alt="ecusson prix grande taille"/>
                           <Card.ImgOverlay className="center">
                               <Card.Title className="price-card mt-2 text-white">{frie.highPrice}</Card.Title>
                           </Card.ImgOverlay>
                       </Card>
                   </Col>
               </Row>
            </Col>
        ))

        return (
            <>
                <div className="container">
                    <Row>
                        {listFries}
                    </Row>
                </div>
            </>
        );
    }
}

export default FriesCard;