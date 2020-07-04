import React from 'react';

import Card from '../Generic/Card';
import LineGraph from '../Graphs/LineGraph';

import WeekSelector from '../WeeklyCard/WeekSelector';

class MonthlyCard extends React.Component {
    render() {
        return (
            <Card style={this.props.style} title={"Monthly Spending"}>
                {/* Replace with Month Selector! */}
                <WeekSelector />
                <LineGraph width={800} height={275} />
            </Card>
        );
    }
}

export default MonthlyCard;