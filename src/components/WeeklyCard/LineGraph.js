import React from 'react';
import { VictoryChart, VictoryArea, VictoryScatter, VictoryGroup, VictoryTooltip, VictoryAxis } from 'victory';
import Color from '../../styles/color';
import Font from '../../styles/font';
import Expense from './Expense';

const testData = [
    { x: 'Mon', y: 4.25 },
    { x: 'Tues', y: 9 },
    { x: 'Wed', y: 13.50 },
    { x: 'Thurs', y: 23.45 },
    { x: 'Fri', y: 23.45 },
    { x: 'Sat', y: 27.84 },
    { x: 'Sun', y: 44.78 }
];

class LineGraph extends React.Component {
    render() {
        return (
            <div>
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
                                stroke: Color.textColor,
                                strokeWidth: 1.5,
                                strokeOpacity: 0.1
                            },
                            axis: { strokeWidth: 0 },
                            tickLabels: {
                                fill: Color.primaryColor,
                                fontFamily: Font.family,
                                fontSize: Font.graphSize,
                                fontWeight: 600
                            }
                        }}
                    />
                    <VictoryAxis dependentAxis
                        orientation="left"
                        style={{ 
                            axis: { strokeWidth: 0 },
                            tickLabels: {
                                fill: Color.textColor,
                                opacity: 0.55,
                                fontFamily: Font.family,
                                fontWeight: 600,
                                fontSize: Font.graphSize
                            }
                        }}
                    />
                    <VictoryArea 
                        style={{ data: { 
                            fill: Color.primaryColor, 
                            fillOpacity: 0.3, 
                            stroke: Color.primaryColor, 
                            strokeWidth: 2.5
                        }}}
                        interpolation="natural"
                        data={testData}
                    />
                    <VictoryScatter 
                        style={{ data: { 
                            fill: '#fff',
                            stroke: Color.primaryColor,
                            strokeWidth: 2
                        }}}
                        size={4}
                        data={testData}
                        labels={({ datum }) => datum.y.toFixed(2)}
                        labelComponent={<VictoryTooltip/>}
                    />
                </VictoryChart>
            </div>
        );
    }
}

export default LineGraph;