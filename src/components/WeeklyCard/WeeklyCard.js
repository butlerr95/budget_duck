import React from 'react';

import Font from '../../styles/font';
import Color from '../../styles/color';

import Card from '../Generic/Card';
import WeekSelector from './WeekSelector';
import WeekSummary from './WeekSummary';
import LineGraph from './LineGraph';
import List from '../Generic/List';
import Expense from './Expense';
import RecentExpenses from './RecentExpenses';

const expenses = [
    {
        id: 1,
        date: "03/07/2020",
        category: "Food & Drink",
        description: "Dinner for two",
        amount: 28.79
    },
    {
        id: 2,
        date: "02/07/2020",
        category: "Travel",
        description: "Train to London",
        amount: 56.70
    },
    {
        id: 3,
        date: "30/06/2020",
        category: "Entertainment",
        description: "Cinema",
        amount: 11.99
    },
    {
        id: 4,
        date: "29/06/2020",
        category: "Education",
        description: "Udemy React Course",
        amount: 14.99
    },
    {
        id: 5,
        date: "29/06/2020",
        category: "Leisure",
        description: "Raleigh Bike 29\"",
        amount: 1095.87
    },
];


class WeeklyCard extends React.Component {
    
    render() {
        return (
            <Card style={weeklyStyle} title={"Weekly Spending"}>
                <WeekSelector />
                <WeekSummary spent={45.60} remaining={32.20} />
                <LineGraph width={500} height={300} />
                <RecentExpenses />
                <List>
                    {expenses.map((expense) => {
                        return <Expense expense={expense} />
                    })}
                </List>
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

export default WeeklyCard;
