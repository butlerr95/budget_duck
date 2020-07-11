import React from 'react';
import { VictoryChart, VictoryArea, VictoryAxis, VictoryLine } from 'victory';

import styles from '../../styles/LineGraph.css';

class LineGraph extends React.Component {
    render() {
        return (
            <div className={'line_graph'}>
                <VictoryChart
                    padding={{ top: 0, left: 70, right: 30, bottom: 20 }}
                    domainPadding={{y: [0, 30]}}
                    width={this.props.width}
                    height={this.props.height}
                >   
                    <VictoryAxis 
                        orientation="bottom"
                        style={{
                            axis: { strokeWidth: 0.75 },
                        }}
                        tickFormat={() => ''}
                    />
                    <VictoryAxis dependentAxis
                        orientation="left"
                        style={{ 
                            axis: { strokeWidth: 1 },
                            grid: { stroke: "#818e99", strokeWidth: 0.5 },
                        }}
                        tickFormat={t => `£${t.toFixed(2)}`}
                    />
                    <VictoryArea
                        style={{ data: {
                            // Overwritten by CSS
                            stroke: '#000'
                        }}}
                        interpolation="linear"
                        data={this.props.data}
                    />
                </VictoryChart>
            </div>
        );
    }
}

export default LineGraph;