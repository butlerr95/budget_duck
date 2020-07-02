import React from 'react';
import { MdAdd, MdFormatListBulleted } from 'react-icons/md';

import Font from '../../styles/font';

class RecentExpenses extends React.Component {
    render() {
        return (
            <div style={recentExpensesStyle}>
                <div style={textStyle}>Recent</div>
                <div>
                    <MdFormatListBulleted style={iconStyle} />
                    <MdAdd style={iconStyle} />
                </div>
            </div>
        );
    }
}
 
const recentExpensesStyle = {
    padding: '15px 10px 5px 10px',
    fontSize: Font.headingSize,
    fontFamily: Font.family,
    width: '95%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
    userSelect: 'none'
};

const iconStyle = {
    fontSize: Font.iconMedium,
    paddingLeft: 10,
    paddingRight: 10,
    color: 'rgb(75, 101, 132, 1)',
    fontWeight: Font.normalWeight
};

const textStyle = {
    paddingLeft: 10,
    color: 'rgb(75, 101, 132, 1)',
    fontWeight: Font.normalWeight
};

export default RecentExpenses;