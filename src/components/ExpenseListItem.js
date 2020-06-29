import React from 'react';
import Color from '../styles/color';
import Font from '../styles/font';

class ExpenseListItem extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            hover: false
        }
    }

    toggleHover = () => {
        this.setState({ hover: !this.state.hover });
    }

    handleClick = (event) => {
        if(event.button === 0) {
            event.preventDefault();
            console.log("Left click");
        }
        else if(event.button === 2) {
            event.preventDefault();
            console.log("Right click");
        }
    }

    render() {
        return (
            <div style={this.state.hover ? expenseContainerHover : expenseContainer} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} onContextMenu={this.handleClick} onClick={this.handleClick}>
                <div>{this.props.expense.date}</div>
                <div>{this.props.expense.category}</div>
                <div>{this.props.expense.description}</div>
                <div>£{this.props.expense.amount}</div>
            </div>
        );
    }
}

// Styles
const expenseContainer = {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-start'
    
    // padding: 10,
    // display: 'flex',
    // flexDirection: 'row',
    // backgroundColor: Color.backgroundColor,
    // fontSize: Font.normalSize,
    // fontFamily: Font.family,
    // color: Color.textColor,
    // justifyContent: 'space-around',
    // alignSelf: 'end',
    // alignItems: 'center',
    // verticalAlign: 'middle',
    // flexGrow: 1
}

const expenseContainerHover = {
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#e1e8f9',
    fontSize: 16,
    fontFamily: 'sans-serif',
    color: '#2b5dd2',
    justifyContent: 'space-around',
    alignItems: 'center',
    verticalAlign: 'middle',
    flewGrow: 1
}

export default ExpenseListItem;