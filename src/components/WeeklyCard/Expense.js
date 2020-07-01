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
    padding: '4px 0px 4px 0px',
    maxWidth: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    gridTemplateRows: '1',
    gridColumnGap: 20,
    gridRowGap: 20,
    borderColor: Color.primaryColor,
    borderStyle: 'solid',
    borderWidth: 0,
    borderTopWidth: 4,
    alignItems: 'center',
    fontFamily: Font.family,
    fontSize: 14,
    backgroundColor: 'rgba(56, 103, 214, 0.1)'
};

const dateStyle = {
    gridArea: '1 / 1 / 1 / 2',
    padding: 10
}

const categoryStyle = {
    gridArea: '1 / 2 / 1 / 4',
    padding: 10
}

const descriptionStyle = {
    gridArea: '1 / 4 / 1 / 7',
    padding: 10
}

const amountStyle = {
    gridArea: '1 / 7 / 1 / 8',
    padding: 10
}

export default Expense;