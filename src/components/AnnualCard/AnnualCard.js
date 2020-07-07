import React from 'react';

import Card from '../Generic/Card';
import YearSelector from './YearSelector';
import BarGraph from './BarGraph';

import budgeting from '../../api/budgeting';

const monthMapping = {
    "01": "Jan",
    "02": "Feb",
    "03": "Mar",
    "04": "Apr",
    "05": "May",
    "06": "Jun",
    "07": "Jul",
    "08": "Aug",
    "09": "Sep",
    "10": "Oct",
    "11": "Nov",
    "12": "Dec"
};

class AnnualCard extends React.Component {

    state = { 
        year: new Date().getFullYear(),
        hasData: true,
        data: [
            { x: 'Jan', y: 0 },
            { x: 'Feb', y: 0 },
            { x: 'Mar', y: 0 },
            { x: 'Apr', y: 0 },
            { x: 'May', y: 0 },
            { x: 'Jun', y: 0 },
            { x: 'Jul', y: 0 },
            { x: 'Aug', y: 0 },
            { x: 'Sep', y: 0 },
            { x: 'Oct', y: 0 },
            { x: 'Nov', y: 0 },
            { x: 'Dec', y: 0 }
        ]
    };
    
    componentDidMount() {
        this.getAnnualSummary();
    }

    objectArraySum(array, key) {
        return array.reduce((a, b) => a + (b[key] || 0), 0);
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.year !== this.state.year) {
            this.getAnnualSummary(this.state.year);
        }
    }

    handleYearChange(newYear) {
        this.setState({ year: newYear });
    }

    getAnnualSummary() {
        budgeting.get(`/annual`, { params: { year: this.state.year } })
            .then((response) => {
                const result = [];
                const months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
                for(const month of months) {
                    result.push({ x: monthMapping[month], y: response.data[month] });
                }
                this.setState({ data: result });
                this.setHasData();
            });
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
            <Card className={this.props.className} title={"Annual Spending"}>
                <YearSelector onChange={this.handleYearChange.bind(this)} />
                {this.state.hasData ? <BarGraph width={600} height={250} data={this.state.data} /> : <div className={'no_data'}><div>No data</div></div>}
            </Card>
        );
    }
}

export default AnnualCard;