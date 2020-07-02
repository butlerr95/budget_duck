import React from 'react';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';

import Font from '../../styles/font';
import Color from '../../styles/color';

class WeekSelector extends React.Component {

    state = { hoverBack: false, hoverForward: false, hoverDate: false };

    toggleHoverBack = () => {
        this.setState({ hoverBack: !this.state.hoverBack });
    }
    toggleHoverForward = () => {
        this.setState({ hoverForward: !this.state.hoverForward });
    }
    toggleHoverDate = () => {
        this.setState({ hoverDate: !this.state.hoverDate });
    }

    render() {
        return (
            <div style={weekSelectorStyle}>
                <div style={this.state.hoverBack ? weeklySelectorButtonHover : weeklySelectorButtonStyle} onMouseEnter={this.toggleHoverBack} onMouseLeave={this.toggleHoverBack}>
                    <MdArrowBack />
                </div>
                <input style={inputStyle} value={"29-06-2020"} onChange={(event) => { console.log(event) }} />
                <div style={this.state.hoverForward ? weeklySelectorButtonHover : weeklySelectorButtonStyle} onMouseEnter={this.toggleHoverForward} onMouseLeave={this.toggleHoverForward}>
                    <MdArrowForward />
                </div>
            </div>
        );
    }
}

const weekSelectorStyle = {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    boxSizing: 'border-box',
};

const weeklySelectorButtonStyle = {
    fontFamily: Font.family,
    fontSize: Font.iconSmall,
    fontWeight: 600,
    color: 'rgb(75, 101, 132, 0.9)',
    flexGrow: 1,
    padding: 15,
    textAlign: 'center'
};

const weeklySelectorButtonHover = {
    fontFamily: Font.family,
    fontSize: Font.iconSmall,
    fontWeight: 600,
    color: 'rgb(75, 101, 132, 0.9)',
    backgroundColor: 'rgb(75, 101, 132, 0.2)',
    flexGrow: 1,
    padding: 15,
    textAlign: 'center'
};

const inputStyle = {
    fontFamily: Font.family,
    fontSize: Font.normalSize,
    fontWeight: 600,
    backgroundColor: 'rgb(0,0,0,0)',
    border: 'none',
    textAlign: 'center',
    color: 'rgb(75, 101, 132, 0.9)',
    width: '30%',
    minWidth: '100px',
    paddingTop: 5,
    letterSpacing: 0.6
};

export default WeekSelector;