import React from 'react';

import styles from '../../styles/WeekSummary.css';

class WeekSummary extends React.Component {
    render() {
        return (
            <div className={'week_summary'}>
                <div className={'week_summary_item grid_item_1'}>{`Spent: £${this.props.spent.toFixed(2)}`}</div>
                <div className={'week_summary_item grid_item_2'}>{`Remaining: £${this.props.remaining.toFixed(2)}`}</div>
            </div>
        );
    }
}

export default WeekSummary;