import React from 'react';
import { VictoryChart, VictoryArea, VictoryAxis } from 'victory';

import styles from '../../styles/LineGraph.css';

class LineGraph extends React.Component {
    render() {
        return (
            <div className={'line_graph'}>
                <VictoryChart
                    padding={{ top: 20, left: 40, right: 30, bottom: 40 }}
                    domainPadding={{y: [0, 20]}}
                    width={this.props.width}
                    height={this.props.height}
                >
                    <VictoryAxis
                        orientation="bottom"
                        style={{ 
                            grid: {
                                // Overwritten by CSS
                                stroke: '#000',
                            },
                            axis: { strokeWidth: 0 },
                        }}
                    />
                    <VictoryAxis dependentAxis
                        orientation="left"
                        style={{ 
                            axis: { strokeWidth: 0 },
                        }}
                    />
                    <VictoryArea
                        style={{ data: {
                            // Overwritten by CSS
                            stroke: '#000'
                        }}}
                        interpolation="natural"
                        data={this.props.data}
                    />
                </VictoryChart>
            </div>
        );
    }
}

export default LineGraph;