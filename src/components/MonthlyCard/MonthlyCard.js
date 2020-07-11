import React from 'react';

import Card from '../Generic/Card';
import LineGraph from './LineGraph';

import MonthSelector from './MonthSelector';

import budgeting from '../../api/budgeting';

class MonthlyCard extends React.Component {
    
    state = {
        date: new Date(),
        hasData: true,
        data: []
    }

    componentDidMount() {
        this.getMonthlySummary();
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.date !== this.state.date) {
            this.getMonthlySummary();
        }
    }

    getFirstOfMonthString(date) {
        const day = "01";
        const month = ("0" + (date.getMonth() + 1)).slice(-2);
        const year = date.getFullYear();

        const dateString = `${year}-${month}-${day}`

        return dateString;
    }

    getMonthlySummary() {
        budgeting.get(`/monthly/summary`, { params: { month_start: this.getFirstOfMonthString(this.state.date) } })
            .then((response) => {
                const result = [];
                for (const [key, value] of Object.entries(response.data)) {
                    result.push({ x: key, y: value });
                }
                this.setState({ data: result });
                this.setHasData();
            });
    }

    // When the date is changed, update the state
    handleDateChange(newDate) {
        this.setState({ date: newDate });
    }
    
    objectArraySum(array, key) {
        return array.reduce((a, b) => a + (b[key] || 0), 0);
    }

    setHasData() {
        if(this.objectArraySum(this.state.data, "y") === 0) {
            this.setState({ hasData: false });
        }
        else {
            this.setState({ hasData: true });
        }
    }

    render() {
        return (
            <Card className={this.props.className} title={"Monthly Spending"}>
                <MonthSelector onChange={this.handleDateChange.bind(this)} />
                {this.state.hasData ? <LineGraph width={600} height={250} data={this.state.data} /> : <div className={'no_data'}><div>No data</div></div>}
            </Card>
        );
    }
}

export default MonthlyCard;