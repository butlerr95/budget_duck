import React from 'react';
import { VictoryChart, VictoryAxis, VictoryBar } from 'victory';

import styles from '../../styles/BarGraph.css';

class BarGraph extends React.Component {
    render() {
        return (
            <div className={'bar_graph'}>
            <VictoryChart
                padding={{ top: 0, left: 70, right: 30, bottom: 40 }}
                domainPadding={{x: 30, y: [0, 30]}}
                width={this.props.width}
                height={this.props.height}
            >
                <VictoryAxis 
                    orientation="bottom"
                    style={{
                        axis: { strokeWidth: 0.75 },
                    }}
                />
                <VictoryAxis dependentAxis
                    orientation="left"
                    style={{ 
                        axis: { strokeWidth: 0 },
                        grid: { stroke: "#818e99", strokeWidth: 0.5 },
                    }}
                    tickFormat={t => `£${t.toFixed(2)}`}
                    grid={{
                        
                    }}
                />
                <VictoryBar 
                    data={this.props.data}
                />
            </VictoryChart>
        </div>
        );
    }
}

export default BarGraph;