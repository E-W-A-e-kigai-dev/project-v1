import React, {Component} from 'react';
import {Card, Col, Row} from "react-bootstrap";

import './MenuCard.css';

class MenuCard extends Component {

    render() {
        const menus = [
            {
                id: 1,
                name: 'Menu petite faim',
                contentType: 'Au choix',
                content: 'Saucisse, Merguez, Steack haché, Poulet, Pull Pork',
                price: '6€50'
            },
            {
                id: 2,
                name: 'Menu American',
                contentType: 'Au choix',
                content: 'Saucisse, Merguez, Steack haché, Poulet, Pull Pork',
                price: '7€50'
            },
            {
                id: 3,
                name: 'Menu Burger',
                contentType: 'Au choix',
                content: 'Burger, Cheese Burger, Bacon Burger, Mushroom Burger',
                price: '8€50'
            },
            {
                id: 4,
                name: 'Menu Grande faim',
                contentType: 'Au choix',
                content: 'Double cheese, Bison Burger, Big burger, Pork Burger, Tomahawk',
                price: '9€50'
            },
            {
                id: 5,
                name: 'Menu Carnivore',
                contentType: 'Inclus',
                content: 'Pull Pork 350 gr, Steack haché 180 gr, Poulet rôti 180 gr, Bacon 2 tranches',
                price: '12€'
            },
            {
                id: 6,
                name: 'Menu Végétarien',
                contentType: 'Au choix',
                content: 'Vegan Burger, Pull soja, César Bowl',
                price: '9€50'
            }
        ]

        const listMenus = menus.map(menu =>(
            <Col className="mt-3" xs={12} key={menu.id}>
                <Card className="border-0">
                    <Row>
                        <Col className="menu-title mt-1" xs={8}>
                            <h3 className="product-name">- {menu.name}</h3>
                        </Col>
                        <Col className="menu-price-logo" xs={4}>
                            <div className="menu-price text-black"><span className="menu-price-content">{menu.price}</span></div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="menu-description" xs={6}>
                            <u className="menu-type">{menu.contentType}</u><br/>
                            <p className="menu-content">{menu.content}</p>
                        </Col>
                        <Col className="plus-logo mt-4" xs={1}>
                            +
                        </Col>
                        <Col className="standard-menu mt-4" xs={4}>
                            1 Frite<br/>
                            et<br/>
                            1 boisson
                        </Col>
                    </Row>
                </Card>
            </Col>
        ))

        return (
            <>
                <div className="container">
                    <Row>
                        {listMenus}
                    </Row>
                </div>
            </>
        );
    }
}

export default MenuCard;