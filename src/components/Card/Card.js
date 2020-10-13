import React, {Component} from 'react';

import './Card.css';

import CardInfo from "./Card-info/Card-info";
import FriesCard from "./FriesCard/FriesCard";
import MenuCard from './MenuCard/MenuCard';
import fries_banner_bg from "../../img/images/fries-card-bg.jpg";
import menus_banner_bg from '../../img/images/menus-card-bg.jpg';
import DishesCard from "./DishesCard/DishesCard";
import Contact from "../Contact/Contact";

class Card extends Component {


    render() {
        return (
            <>
                <div className="fries-section">
                    <div className="center col-12">
                        <h2 className="section-title text-center">Nos frites</h2>
                    </div>
                    <CardInfo/>
                    <FriesCard/>
                </div>
                <div
                    style={{
                        backgroundImage: `url(${fries_banner_bg})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                    className="card-separator-banner mt-3">

                </div>
                <div className="menu-section">
                    <div className="center col-12">
                        <h2 className="section-title text-center">Nos Menus</h2>
                    </div>
                    <CardInfo/>
                    <MenuCard/>
                </div>
                <div
                    style={{
                        backgroundImage: `url(${menus_banner_bg})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                    className="card-separator-banner mt-3">

                </div>
                <div className="dishes-section">
                    <div className="center col-12">
                        <h2 className="section-title text-center">Sans frites</h2>
                    </div>
                    <CardInfo/>
                    <DishesCard/>
                </div>
                <Contact/>
            </>
        );
    }
}

export default Card;