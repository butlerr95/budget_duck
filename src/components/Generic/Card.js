import React from 'react';
import styles from '../../styles/Card.css';

class Card extends React.Component {
    render() {
        return (
            <div style={this.props.style}>
                <div className={'card'}>
                    <div className={'card_title'}>{this.props.title}</div>
                    <div className={'card_content'}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;