import React from 'react';

import Card from '../Generic/Card';
import YearSelector from './YearSelector';
import BarGraph from './BarGraph';

const testData = [
    { x: 'Jan', y: 4.25 },
    { x: 'Feb', y: 9 },
    { x: 'Mar', y: 13.50 },
    { x: 'Apr', y: 23.45 },
    { x: 'May', y: 23.45 },
    { x: 'Jun', y: 27.84 },
    { x: 'Jul', y: 44.78 },
    { x: 'Aug', y: 13.50 },
    { x: 'Sep', y: 23.45 },
    { x: 'Oct', y: 23.45 },
    { x: 'Nov', y: 27.84 },
    { x: 'Dec', y: 44.78 }
];

class AnnualCard extends React.Component {
    render() {
        return (
            <Card className={this.props.className} title={"Annual Spending"}>
                {/* Replace with Year Selector!! */}
                <YearSelector />
                <BarGraph width={600} height={275} data={testData} />
            </Card>
        );
    }
}

export default AnnualCard;