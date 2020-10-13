import React, {Component} from 'react';

import './Card.css';

import CardInfo from "./Card-info/Card-info";
import FriesCard from "./FriesCard/FriesCard";
import fries_banner_bg from "../../img/images/fries-card-bg.jpg";

class Card extends Component {


    render() {
        return (
            <>
                <div className="fries-section">
                    <div className="center col-12">
                        <h2 className="section-title text-center">Nos frites</h2>
                    </div>
                    <CardInfo lowPrice={0.50}/>
                    <FriesCard/>
                    <div
                        style={{
                            backgroundImage: `url(${fries_banner_bg})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                        }}
                        className="card-separator-banner mt-3">

                    </div>
                </div>
                <div className="menu-section">
                    <div className="center col-12">
                        <h2 className="section-title text-center">Nos Menus</h2>
                    </div>
                </div>
            </>
        );
    }
}

export default Card;