import React from 'react';
import { VictoryPie, VictoryLabel, VictoryLegend, VictoryTooltip } from 'victory';

import styles from '../../styles/DonutChart.css';

class DonutChart extends React.Component {
    render() {
        return (
            <div className={'donut_chart'}>
                <svg viewBox={`0 0 ${this.props.width} ${this.props.height}`} width={this.props.width}>
                    <VictoryPie
                        origin={{
                            x: this.props.width / 2,
                            y: this.props.height / 2
                        }}
                        standalone={false}
                        labels={this.props.labels}
                        data={this.props.data}
                        innerRadius={this.props.innerRadius}
                    />
                    <VictoryLabel
                        className={'donut_chart_label'}
                        textAnchor='middle'
                        x={this.props.width/2}
                        y={this.props.height/2.1}
                        text={`£${this.props.data[0].y.toFixed(2)}`}
                        style={{
                            fill: null,
                            stroke: null
                        }}
                     />
                     <VictoryLabel
                        className={'donut_chart_sub_label'}
                        textAnchor='middle'
                        x={this.props.width/2}
                        y={this.props.height/1.8}
                        text='Remaining'
                        style={{
                            fill: null,
                            stroke: null
                        }}
                     />
                </svg>
            </div>
        );
    }
}

DonutChart.defaultProps = {
    height: 375,
    width: 500,
    innerRadius: 100,
    labels: () => null
}

export default DonutChart;