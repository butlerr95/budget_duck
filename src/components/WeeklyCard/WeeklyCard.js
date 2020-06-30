import React from 'react';
import Card from '../Generic/Card';
import Font from '../../styles/font';
import Color from '../../styles/color';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';

class WeeklyCard extends React.Component {
    
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
            <Card style={weeklyStyle} title={"Weekly Spending"}>
                <div style={weekSelectorStyle}>
                    <div style={this.state.hoverBack ? weeklySelectorButtonHover : weeklySelectorButtonStyle} onMouseEnter={this.toggleHoverBack} onMouseLeave={this.toggleHoverBack}>
                        <MdArrowBack />
                    </div>
                    <input style={inputStyle} value={"29-06-2020"} onChange={(event) => { console.log(event) }} />
                    <div style={this.state.hoverForward ? weeklySelectorButtonHover : weeklySelectorButtonStyle} onMouseEnter={this.toggleHoverForward} onMouseLeave={this.toggleHoverForward}>
                        <MdArrowForward />
                    </div>
                </div>
            </Card>
        );
    }
}

const weeklyStyle = {
    gridArea: '2 / 2 / 4 / 2',
    display: 'flex',
    flexGrow: 1,
    flexShrink: 1
};

const weekSelectorStyle = {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    boxSizing: 'border-box',
    backgroundColor: 'rgb(119, 140, 163, 0.3)',
};

const weeklySelectorButtonStyle = {
    fontFamily: Font.family,
    fontSize: Font.iconSmall,
    fontWeight: 600,
    color: 'rgb(75, 101, 132, 0.7)',
    flexGrow: 1,
    padding: 10,
    textAlign: 'center'
};

const weeklySelectorButtonHover = {
    fontFamily: Font.family,
    fontSize: Font.iconSmall,
    fontWeight: 600,
    color: '#fff',
    backgroundColor: 'rgb(75, 101, 132, 0.7)',
    flexGrow: 1,
    padding: 10,
    textAlign: 'center'
};

const inputStyle = {
    fontFamily: Font.family,
    fontSize: Font.normalSize,
    fontWeight: 600,
    backgroundColor: 'rgb(0,0,0,0)',
    border: 'none',
    textAlign: 'center',
    color: 'rgb(75, 101, 132, 0.7)',
    width: '30%',
    minWidth: '100px',
    letterSpacing: 0.6
};

export default WeeklyCard;