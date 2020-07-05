import React from 'react';

import Card from '../Generic/Card';
import LineGraph from './LineGraph';

import MonthSelector from './MonthSelector';

const testData = [
    { x: 1, y: 1 },
    { x: 2, y: 3 },
    { x: 3, y: 4 },
    { x: 4, y: 7 },
    { x: 5, y: 9 },
    { x: 6, y: 9 },
    { x: 7, y: 14 },
    { x: 8, y: 15 },
    { x: 9, y: 16 },
    { x: 10, y: 18 },
    { x: 11, y: 22 },
    { x: 12, y: 22 },
    { x: 13, y: 22 },
    { x: 14, y: 23 },
    { x: 15, y: 26 },
    { x: 16, y: 29 },
    { x: 17, y: 30 },
    { x: 18, y: 31 },
    { x: 19, y: 39 },
    { x: 20, y: 40 },
    { x: 21, y: 40 },
    { x: 22, y: 41 },
    { x: 23, y: 42 },
    { x: 24, y: 42 },
    { x: 25, y: 44 },
    { x: 26, y: 47 },
    { x: 27, y: 51 },
    { x: 28, y: 51 },
    { x: 29, y: 52 },
    { x: 30, y: 55 },
    { x: 31, y: 56 }
];

class MonthlyCard extends React.Component {
    render() {
        return (
            <Card className={this.props.className} title={"Monthly Spending"}>
                <MonthSelector />
                <LineGraph width={600} height={250} data={testData} />
            </Card>
        );
    }
}

export default MonthlyCard;