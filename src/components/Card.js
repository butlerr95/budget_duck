import React from 'react';
import Color from '../styles/color';
import Font from '../styles/font';

class Card extends React.Component {
    render() {
        return (
            <div style={this.props.style}>
                <div style={cardStyle}>
                    <div style={titleStyle}>{this.props.title}</div>
                    <div style={contentStyle}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

const titleStyle = {
    fontFamily: Font.family,
    fontSize: Font.headingSize,
    fontWeight: Font.headingWeight,
    color: Color.headingColor,
    backgroundColor: Color.primaryColor,
    userSelect: 'none',
    padding: 15,
    boxShadow: '0px 1px 3px 0px #000',
    textAlign: 'center'
}

const cardStyle = {
    backgroundColor: Color.backgroundColor,
    boxShadow: '2px 2px 7px 0.5px #000',
    display: 'flex',
    flexDirection: 'column'
};

const contentStyle = {
    padding: 30
};

export default Card;