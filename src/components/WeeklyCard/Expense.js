import React from 'react';
import styles from '../../styles/Expense.css';

class Expense extends React.Component {
    render() {
        return (
            <div className={'expense'}>
                <div className={'expense_date'} >{this.props.expense.date}</div>
                <div className={'expense_category'} >{this.props.expense.category}</div>
                <div className={'expense_description'} >{this.props.expense.description}</div>
                <div className={'expense_amount'} >{this.props.expense.amount >= 0 ? `£${this.props.expense.amount.toFixed(2)}` : `- £${(this.props.expense.amount * -1).toFixed(2)}`}</div>
            </div>
        );
    }
}

export default Expense;