import React, {Component} from 'react';
import {Row, Col} from "react-bootstrap";

import './LoaderPage.css';

import logo from '../../img/logos/logo-resto.svg';

class LoaderPage extends Component {
    render() {
        return (
            <div className="loader-section center">
                <Row className="loader-content center">
                    <Col className="center" xs={6}>
                        <img className="w-100 mx-auto" src={logo} alt="french fries logo"/>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default LoaderPage;