import React, {Component} from 'react';
import {Row} from "react-bootstrap";
import RubberBand from 'react-reveal/RubberBand';

import './HeaderMobile.css';

import header_background from '../../../img/background/header-mobile-bg.png';
import phone_icon from '../../../img/icones/phone-call.svg';
import down_arrow from '../../../img/icones/down-arrow.svg';

class HeaderMobile extends Component {
    render() {
        return (
            <>

                <header className="mobile-header">
                    <div
                        style={{
                            backgroundImage: `url(${header_background})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                        }}
                        className="mobile-header-background">
                        <Row>
                            <RubberBand>
                                <div className="center mx-auto btn btn-call">
                                    <a className="link-call text-white" title="lien pour appeler ab-ramonage" href="tel:+33650176772">COMMANDER<img className="icon-phone ml-3" src={phone_icon} alt="telephoner"/></a>
                                </div>
                            </RubberBand>
                        </Row>
                        <Row className="center">
                            <img className="down-icon"  src={down_arrow} alt="flèche vers le bas"/>
                        </Row>
                    </div>
                </header>
            </>
        );
    }
}

export default HeaderMobile;