import React from 'react';
import { MdAddCircleOutline } from 'react-icons/md';
import Color from '../../styles/color';
import Font from '../../styles/font';

class WeekSummary extends React.Component {
    render() {
        return (
            <div style={weekSummaryStyle}>
                <div style={spentStyle}>{`Spent: £${this.props.spent.toFixed(2)}`}</div>
                <div style={remainingStyle}>{`Remaining: £${this.props.remaining.toFixed(2)}`}</div>
            </div>
        );
    }
}

const weekSummaryStyle = {
    width: '100%',
    boxSizing: 'border-box',
    display: 'grid',
    gridTemplateColumns: '0px repeat(4, 1fr) 0px',
    gridTemplateRows: '0px auto 0px',
    gridColumnGap: 30,
    gridRowGap: 15,
    alignItems: 'stretch',
    justifyItems: 'center'
};

const spentStyle = {
    gridArea: '2 / 2 / 2 / 4',
    color: Color.primaryColor,
    fontFamily: Font.family,
    fontSize: Font.normalSize,
    padding: 8,
    justifySelf: 'stretch',
    textAlign: 'center',
    userSelect: 'none',
    borderColor: Color.primaryColor,
    borderStyle: 'solid',
    borderWidth: 1,
    borderTopWidth: 8,
    borderRadius: 3
};

const remainingStyle = {
    gridArea: '2 / 4 / 2 / 6',
    color: Color.primaryColor,
    fontFamily: Font.family,
    fontSize: Font.normalSize,
    padding: 8,
    justifySelf: 'stretch',
    textAlign: 'center',
    userSelect: 'none',
    borderColor: Color.primaryColor,
    borderStyle: 'solid',
    borderWidth: 1,
    borderTopWidth: 8,
    borderRadius: 3
};

export default WeekSummary;