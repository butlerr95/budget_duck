import React from 'react';
import Card from './Card';
import Font from '../styles/font';
import Color from '../styles/color';
import { MdFullscreenExit } from 'react-icons/md';
import LineGraph from './LineGraph';
import PieChart from './PieChart';
import ExpenseListItem from './ExpenseListItem';
import ExpenseList from './ExpenseList';
import Table from './Table';

const expenses = [
    {
        id: 1,
        date: "2020-06-10",
        category: "Travel",
        description: "Train",
        amount: 45.67
    },
    {
        id: 2,
        date: "2020-06-10",
        category: "Food & Drink",
        description: "Lunch",
        amount: 4.55
    },
    {
        id: 3,
        date: "2020-06-15",
        category: "Travel",
        description: "Train",
        amount: 19.87
    }
]

class ThisWeek extends React.Component {
    render() {
        return (
            <Card style={this.props.style} title="This Week">
                <div style={textContainerStyle}>
                    <div style={textStyle}>Spent: £{this.props.spent.toFixed(2)}</div>
                    <div style={textStyle}>Budget Remaining: £{this.props.remaining.toFixed(2)}</div>
                </div>
                <LineGraph data={lineData} height={300} width={500} />
                <div style={textStyle}>Recent</div>
                <ExpenseListItem expense={expenses[0]} />
                <ExpenseListItem expense={expenses[1]} />
                <ExpenseListItem expense={expenses[2]} />
            </Card>
        );
    }
}

const textStyle = {
    fontFamily: Font.family,
    fontWeight: 600,
    letterSpacing: 0.60,
    fontSize: Font.normalSize,
    color: Color.primaryColor,
    userSelect: 'none',
    paddingBottom: 10
};

const textContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'
};

const lineData = [
    {
        "id": "Weekly spending",
        "data": [
            {
                "x": "Mon",
                "y": 9.65
            },
            {
                "x": "Tues",
                "y": 15.45
            },
            {
                "x": "Wed",
                "y": 15.45
            },
            {
                "x": "Thurs",
                "y": 23.78
            },
            {
                "x": "Fri",
                "y": 27.90
            },
            {
                "x": "Sat",
                "y": 27.90
            },
            {
                "x": "Sun",
                "y": 50.10
            }
        ]
    }
];

export default ThisWeek;