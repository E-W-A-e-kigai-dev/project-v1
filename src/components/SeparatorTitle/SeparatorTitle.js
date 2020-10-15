import React from 'react';

import './SeparatorTitle.css';

class SeparatorTitle extends React.Component {

    render() {
        const { title } = this.props;
        return <div className="separator-title-container section-title text-center">
            <div className="half-separator-h"></div>
            <p>{title}</p>
            <div className="half-separator-h"></div>
        </div>;
    }
}

export default SeparatorTitle;