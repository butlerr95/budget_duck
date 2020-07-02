import React from 'react';
import Color from '../../styles/color';
import Font from '../../styles/font';

class Expense extends React.Component {
    render() {
        return (
            <div style={expenseStyle}>
                <div style={dateStyle} >{this.props.expense.date}</div>
                <div style={categoryStyle} >{this.props.expense.category}</div>
                <div style={descriptionStyle} >{this.props.expense.description}</div>
                <div style={amountStyle} >{`£${this.props.expense.amount.toFixed(2)}`}</div>
            </div>
        );
    }
}

const expenseStyle = {
    margin: 6,
    padding: '12px 15px 12px 15px',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gridTemplateRows: '1',
    gridColumnGap: 10,
    gridRowGap: 10,
    alignItems: 'center',
    justifyItems: 'start',
    fontFamily: Font.family,
    boxShadow: '0px 1px 3px 0px #000',
    borderStyle: 'solid',
    borderColor: Color.primaryColor,
    borderWidth: 0,
    borderLeftWidth: 7,
    userSelect: 'none',
    borderRadius: 2
};

const dateStyle = {
    gridArea: '1 / 1 / 1 / 2',
    color: Color.textColor,
    fontSize: 13,
    opacity: 0.8
}

const categoryStyle = {
    gridArea: '1 / 2 / 1 / 3',
    color: Color.textColor,
    fontSize: 13,
}

const descriptionStyle = {
    gridArea: '1 / 3 / 1 / 5',
    color: Color.textColor,
    fontSize: 12
}

const amountStyle = {
    gridArea: '1 / 5 / 1 / 6',
    color: Color.primaryColor,
    fontWeight: 600,
    fontSize: 13,
    justifySelf: 'end'
}

export default Expense;