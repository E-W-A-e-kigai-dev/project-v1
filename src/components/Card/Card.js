import React, {Component} from 'react';
import {Fade, AttentionSeeker} from 'react-awesome-reveal';


import './Card.css';

import CardInfo from "./Card-info/Card-info";
import FriesCard from "./FriesCard/FriesCard";
import MenuCard from './MenuCard/MenuCard';
import fries_banner_bg from "../../img/images/fries-card-bg.jpg";
import menus_banner_bg from '../../img/images/menus-card-bg.jpg';
import DishesCard from "./DishesCard/DishesCard";
import ContactForm from "../Contact/ContactForm/ContactForm";
import SeparatorTitle from "../SeparatorTitle/SeparatorTitle";

class Card extends Component {


    render() {
        return (
            <>
                <div className="fries-section">
                    <AttentionSeeker rubberBand>
                        <div className="center col-12">
                        <SeparatorTitle title="Nos frites"/>
                        </div>
                    </AttentionSeeker>
                    <CardInfo/>
                    <FriesCard/>
                </div>
                <Fade>
                <div
                    style={{
                        backgroundImage: `url(${fries_banner_bg})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                    className="card-separator-banner mt-3">

                </div>
                </Fade>
                <div className="menu-section mb-5">
                <AttentionSeeker rubberBand>
                    <div className="center col-12">
                        <SeparatorTitle title="Nos Menus"/>
                    </div>
                </AttentionSeeker>    
                    <CardInfo/>
                    <MenuCard/>
                </div>
                <Fade>
                <div
                    style={{
                        backgroundImage: `url(${menus_banner_bg})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                    className="card-separator-banner mt-3">

                </div>
                </Fade>
                <div className="dishes-section">
                    <AttentionSeeker rubberBand>
                    <div className="center col-12">
                        <SeparatorTitle title="Sans frites"/>
                    </div>
                    </AttentionSeeker>
                    <CardInfo/>
                    <DishesCard/>
                </div>
                <ContactForm/>
            </>
        );
    }
}

export default Card;