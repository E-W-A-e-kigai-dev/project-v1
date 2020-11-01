import React, {Component} from 'react';
import {Row, Col} from "react-bootstrap";
import RubberBand from 'react-reveal/RubberBand';

import './HeaderDesktop.css';

import header_desk_background from '../../../img/background/header-desk-bg.jpg';

class HeaderDesktop extends Component {
    render() {
        return (
            <>

                <header className="desktop-header">
                    <div
                        style={{
                            backgroundImage: `url(${header_desk_background})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                        }}
                        className="desktop-header-background">
                        <Row>

                            <Col xs={{span: 4, offset: 5}} xl={{span: 3, offset: 6}} className="pt-5">
                                <RubberBand>
                                    <div className="card card-main-title-desk mx-auto">
                                        <div className="card-body">
                                            <h1 className="main-title-desk text-center"><u>COMMANDEZ AU :</u> <br/> 03 34 54 21 38</h1>
                                        </div>
                                    </div>
                                </RubberBand>
                            </Col>
                        </Row>
                    </div>
                </header>

            </>
        );
    }
}

export default HeaderDesktop;
