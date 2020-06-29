import React from 'react';
import { ResponsivePie } from '@nivo/pie'
import Font from '../styles/font';
import Color from '../styles/color';

class PieChart extends React.Component {
    render() {
        return (
            <div style={graphContainerStyle}>
                <ResponsivePie 
                    data={this.props.data}
                    margin={{ top: 70, right: 0, bottom: 70, left: 0 }}
                    colors={['#fff', '#000', '#ddd']}
                    innerRadius={0.5}
                    padAngle={1}
                    sortByValue={true}
                    radialLabel={'category'}
                    radialLabelsLinkDiagonalLength={25}
                    radialLabelsLinkHorizontalLength={10}
                    radialLabelsTextXOffset={10}
                    radialLabelsLinkStrokeWidth={2}
                    enableSlicesLabels={false}
                    legends={[
                        {
                            anchor: 'bottom',
                            direction: 'row',
                            translateY: 55,
                            itemWidth: 100,
                            itemHeight: 18,
                            itemTextColor: '#999',
                            symbolSize: 18,
                            symbolShape: 'circle',
                            effects: [
                                {
                                    on: 'hover',
                                    style: {
                                        itemTextColor: '#000'
                                    }
                                }
                            ]
                        }
                    ]}
                />
            </div>
        );
    }
}

const graphContainerStyle = {
    height: 300, 
    width: 500,
    fontFamily: Font.family,
    fontWeight: Font.normalWeight,
    fontSize: 14,
    minWidth: 0,
    userSelect: 'none'
};

export default PieChart;