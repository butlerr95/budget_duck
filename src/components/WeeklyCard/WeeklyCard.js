import React from 'react';

import Card from '../Generic/Card';
import WeekSelector from './WeekSelector';
import WeekSummary from './WeekSummary';
import LineGraph from '../Graphs/LineGraph';
import DonutChart from '../Graphs/DonutChart';
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

const exampleData = [
    { x: "Remaining", y: 15 },
    { x: "Spent", y: 47.50 }
];


class WeeklyCard extends React.Component {
    
    render() {
        return (
            <Card style={weeklyCardStyle} title={"Weekly Spending"}>
                <WeekSelector />
                <DonutChart height={375} width={500} data={exampleData} />
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

const weeklyCardStyle = {
    display: 'flex',
    gridArea: '2 / 2 / 4 / 2',
    flexGrow: 1,
    flexShrink: 1
}

export default WeeklyCard;
