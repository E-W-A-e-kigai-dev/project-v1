import React, {Component} from 'react';
import {Link} from "react-router-dom";

class NotFound extends Component {
    render() {
        return (
            <>
                <div className="not-found-section">
                    <p>Oops... Vous semblez perdu</p>
                    <Link to="/" className="btn btn-lg btn-back">Retour vers le site</Link>
                </div>
            </>
        );
    }
}

export default NotFound;