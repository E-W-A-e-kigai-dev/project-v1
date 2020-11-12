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
import NavbarMobile from "../Navbar/NavbarMobile/NavbarMobile";
import NavbarDesktop from "../Navbar/NavbarDesktop/NavbarDesktop";
import HeaderMobile from "../Header/HeaderMobile/HeaderMobile";
import HeaderDesktop from "../Header/HeaderDesktop/HeaderDesktop";

class Card extends Component {

    componentDidMount() {
        window.scrollTo(0,0);
    }

    render() {
        const isMobile = window.innerWidth <= 768;
        return (
            <>
                {isMobile ? <NavbarMobile/>: <NavbarDesktop/>}
                {isMobile ? <HeaderMobile title={'La Carte'}/> : <HeaderDesktop/>}
                <div className="fries-section">
                    <AttentionSeeker effect={"rubberBand"}>
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
                <AttentionSeeker effect={"rubberBand"}>
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
                    <AttentionSeeker effect={"rubberBand"}>
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