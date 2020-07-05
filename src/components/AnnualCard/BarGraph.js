import React from 'react';
import { VictoryChart, VictoryAxis, VictoryBar } from 'victory';

class BarGraph extends React.Component {
    render() {
        return (
            <div className={'bar_graph'}>
            <VictoryChart
                padding={{ top: 20, left: 40, right: 30, bottom: 40 }}
                domainPadding={{x: 30, y: [0, 20]}}
                width={this.props.width}
                height={this.props.height}
                data={this.props.data}
            >
                <VictoryAxis 
                    orientation="bottom"
                    style={{
                        axis: { strokeWidth: 1 },
                    }}
                />
                <VictoryAxis dependentAxis
                    orientation="left"
                    style={{ 
                        axis: { strokeWidth: 0 },
                    }}
                />
                <VictoryBar />
            </VictoryChart>
        </div>
        );
    }
}

export default BarGraph;