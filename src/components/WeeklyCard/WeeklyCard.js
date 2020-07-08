import React from 'react';

import Card from '../Generic/Card';
import WeekSelector from './WeekSelector';
import DonutChart from './DonutChart';
import List from '../Generic/List';
import Expense from './Expense';
import RecentExpenses from './RecentExpenses';

import budgeting from '../../api/budgeting';
import getMonday from '../../utils/DateUtils';

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
    
    state = {
        weekStartDate: getMonday(new Date()),
        recentExpenses: [],
        weeklySpending: [
            { x: "Remaining", y: 0 },
            { x: "Spent", y: 0 }
        ],
        hasData: false
    }

    componentDidMount() {
        this.getWeeklySummary();
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.weekStartDate !== this.state.weekStartDate) {
            this.getWeeklySummary();
        }
    }

    getWeeklySummary() {
        budgeting.get(`/weekly/summary`, { params: { week_start: this.getDateString(this.state.weekStartDate) } })
            .then((response) => {
                if(response.data) {
                    this.setState({
                        weeklySpending: [
                            { x: "Remaining", y: response.data.remaining },
                            { x: "Spent", y: response.data.spent }
                        ],
                        recentExpenses: response.data.recent,
                        hasData: true
                    });
                }
                else {
                    this.setState({
                        weeklySpending: null,
                        recentExpenses: null,
                        hasData: false
                    });
                }
            });
        
    }

    getDateString = (date) => {
        const day = ("0" + date.getDate()).slice(-2);
        const month = ("0" + (date.getMonth() + 1)).slice(-2);
        const year = date.getFullYear();

        const dateString = `${year}-${month}-${day}`

        return dateString;
    }

    // When the date is changed, update the state
    handleDateChange(date) {
        this.setState({ weekStartDate: date });
    }
    
    renderContent() {
        if(this.state.hasData) {
            return (
                <Card className={this.props.className} title={"Weekly Spending"}>
                    <WeekSelector onChange={this.handleDateChange.bind(this)} />
                    <DonutChart height={350} width={500} data={this.state.weeklySpending} />
                    <RecentExpenses />
                    <List>
                    {this.state.recentExpenses.map((expense) => {
                            return <Expense expense={expense} />
                        })}
                    </List>
                </Card>
            );
        }
        else {
            return (
                <Card className={this.props.className} title={"Weekly Spending"}>
                    <WeekSelector onChange={this.handleDateChange.bind(this)} />
                    <div className={'no_data'}><div>No data</div></div>
                </Card>
            );
        }
    }

    render() {
        return (
            this.renderContent()
        );
    }
}

export default WeeklyCard;
