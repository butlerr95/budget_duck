import React from 'react';
import Color from '../styles/color';
import Font from '../styles/font';

class ExpenseListHeader extends React.Component {
    render() {
        return (
            <div style={headerStyle}>
                <div>Date</div>
                <div>Category</div>
                <div>Description</div>
                <div>Amount</div>
            </div>
        );
    }
}

const headerStyle = {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: Color.textColor,
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: Color.backgroundColor,
    fontSize: Font.normalSize,
    fontFamily: Font.family,
    color: Color.textColor,
    justifyContent: 'space-between',
    alignItems: 'center',
    verticalAlign: 'middle'
}

export default ExpenseListHeader;