import React, {Component} from 'react';
import {Card, Col, Row} from "react-bootstrap";

class DishesCard extends Component {
    render() {
        const dishes = [
            {
                id: 1,
                name: 'Sandwich (baguette)',
                contentType: 'Au choix',
                content: 'Saucisse, Merguez, Steack haché, Poulet, Pull Pork',
                price: '4€50'
            },
            {
                id: 2,
                name: 'Burger',
                contentType: 'Ingrédients',
                content: 'Pain bun’s, Steack haché 180 gr, Oignons, Cornichons, Tomate, Salade, sauce Burger',
                price: '4€50'
            },
            {
                id: 3,
                name: 'Cheese Burger',
                contentType: 'Ingrédients',
                content: 'Pain bun’s, Steack haché 180 gr, Oignons, Cornichons, Tomate, Cheddar, ketchup, moutarde',
                price: '4€50'
            },
            {
                id: 4,
                name: 'Bacon Burger',
                contentType: 'Ingrédients',
                content: 'Pain bun’s, Steack haché 180 gr, Oignons, Cornichons, Tomate, Salade, Cheddar, Bacon, ketchup, moutarde',
                price: '5€20'
            },
            {
                id: 5,
                name: 'Mushroom Burger',
                contentType: 'Ingrédients',
                content: 'Pain bun’s, Steack haché 180 gr, Oignons, Cornichons, Tomate, Salade, Cheddar, Champignons, sauce au choix',
                price: '5€20'
            },
            {
                id: 6,
                name: 'Double Cheese',
                contentType: 'Ingrédients',
                content: 'Pain bun’s, 2 Steacks hachés 180 gr, Oignons, Cornichons, Tomate, Cheddar, Bacon, ketchup, moutarde',
                price: '6€50'
            },
            {
                id: 7,
                name: 'Bison Burger',
                contentType: 'Ingrédients',
                content: 'Pain bun’s, Steack haché de bison 250gr, Oignons, Cornichons, Tomate, Salade, Cheddar, Sauce barbecue',
                price: '7€50'
            },
            {
                id: 8,
                name: 'Big Burger',
                contentType: 'Ingrédients',
                content: 'Pain bun’s, 3 Steacks hachés 180gr, Oignons, Cornichons, Tomate, Salade, Cheddar, Sauce au choix',
                price: '8€50'
            },
            {
                id: 9,
                name: 'Prok Burger',
                contentType: 'Ingrédients',
                content: 'Pain bun’s, Effiloché de porc, Oignons, Cornichons, Tomate, Salade, Sauce barbecue',
                price: '7€50'
            },
            {
                id: 10,
                name: 'Tomahawk',
                contentType: 'Ingrédients',
                content: 'Pain bun’s, Effiloché de porc, Steack haché, Oignons, Cornichons, Tomate, Salade, Sauce barbecue',
                price: '8€50'
            },
            {
                id: 11,
                name: 'Vegan Burger',
                contentType: 'Ingrédients',
                content: 'Pain bun’s, Steack végétal, Oignons, Cornichons, Tomate, Salade, Sauce au choix',
                price: '7€50'
            },
            {
                id: 12,
                name: 'Pull Soja',
                contentType: 'Ingrédients',
                content: 'Pain bun’s, Tofu façon pull pork, Oignons, Cornichons, Tomate, Salade, Sauce barbecue',
                price: '7€50'
            },
            {
                id: 13,
                name: 'César Bowl',
                contentType: 'Ingrédients',
                content: 'Salade, Tofu mariné et grillés, maïs, tomates cerises, parmesan, oeufs durs, sauce Cesear',
                price: '7€50'
            }
        ]

        const listDishes = dishes.map(dish=>(
            <Col className="mt-5 mb-3" xs={12} key={dish.id}>
                <Card className="border-0">
                    <Row>
                        <Col className="menu-title mt-1" xs={8}>
                            <h3 className="product-name">- {dish.name}</h3>
                        </Col>
                        <Col className="menu-price-logo" xs={4}>
                            <div className="menu-price text-black"><span className="menu-price-content">{dish.price}</span></div>
                        </Col>
                    </Row>
                    <Row className="menu-section-content">
                        <Col className="menu-description" xs={10}>
                            <u className="menu-type">{dish.contentType} :</u><br/>
                            <p className="menu-content">{dish.content}</p>
                        </Col>
                    </Row>
                </Card>
            </Col>
        ))
        return (
            <>
                <div className="container">
                    <Row>
                        {listDishes}
                    </Row>
                </div>
            </>
        );
    }
}

export default DishesCard;