import React from 'react';
import ExpenseListHeader from './ExpenseListHeader';

class ExpenseList extends React.Component {
    render() {
        return (
            <div style={expenseListStyle}>
                <div>
                    {this.props.children}
                </div>    
            </div>
        );
    }
}

const expenseListStyle = {
    paddingTop: 30,
    display: 'flex',
    flexDirection: 'column'
}

export default ExpenseList;