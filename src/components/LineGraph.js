import React from 'react';
import { ResponsiveLine } from '@nivo/line'
import Font from '../styles/font';
import Color from '../styles/color';

class LineGraph extends React.Component {

    render() {
        return (
            <div style={{width: this.props.width, height: this.props.height, userSelect: 'none'}}>
                <ResponsiveLine
                    data={this.props.data}
                    theme={lineGraphSettings.theme}
                    animate={true}
                    xScale={{ type: 'point' }}
                    yScale={{ type: 'linear', min: 0, max: 'auto' }}
                    margin={{ top: 20, right: 30, bottom: 40, left: 50 }}
                    curve={'natural'}
                    colors={Color.primaryColor}
                    lineWidth={2}
                    enableArea={true}
                    areaOpacity={0.3}
                    enablePoints={true}
                    pointSize={6}
                    isInteractive={true}
                    useMesh={true}
                    enableCrosshair={false}
                    axisLeft={{
                        format: (value) => {
                            return "£" + value;
                        }
                    }}
                    tooltip = {(input) => {
                        return (
                            <div style={tooltipStyle}>{`£${input.point.data.y.toFixed(2)}`}</div>
                        )
                    }}
                />
            </div>
        );
    }
}

const tooltipStyle = {
    fontFamily: Font.family,
    fontWeight: Font.normalWeight,
    fontSize: Font.graphSize,
    backgroundColor: Color.backgroundColor,
    color: Color.primaryColor,
    padding: 5,
    borderWidth: 1,
    borderColor: Color.primaryColor,
    borderStyle: 'solid',
    borderRadius: 3
}

const lineGraphSettings = {
    theme: {
        fontSize: Font.graphSize,
        textColor: Color.primaryColor,
        fontFamily: Font.family
    }
}

export default LineGraph;