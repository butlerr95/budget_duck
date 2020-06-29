import React from 'react';
import Font from '../styles/font';
import Color from '../styles/color';

class Table extends React.Component {
    render() {
        console.log(this.props.data[0]);
        return (
            <div>
                <table style={tableStyle}>
                    <thead style={tableHeaderStyle}>
                        {Object.keys(this.props.data[0]).map((name) => {
                            return (
                                <th style={columnHeaderStyle}>{name[0].toUpperCase() + name.slice(1)}</th>
                            );
                        })}
                    </thead>
                    <tbody style={tableBodyStyle}>
                        {this.props.data.map((object) => {
                            return (
                                <tr style={rowStyle}>{Object.values(object).map((item) => {
                                    return (
                                        <td style={rowItemStyle}>{item}</td>
                                    );
                                })}</tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

const tableStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    marginTop: 20
} 

const tableHeaderStyle = {
    backgroundColor: Color.primaryColor,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
};

const columnHeaderStyle = {
    padding: 10,
    fontFamily: Font.family,
    fontWeight: Font.headingWeight,
    fontSize: Font.normalSize,
    color: Color.headingColor
}

const tableBodyStyle = {
    display: 'flex',
    flexDirection: 'column',
}

const rowStyle = {
    backgroundColor: Color.backgroundColor,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    borderStyle: 'solid',
    borderColor: Color.textColor,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderTopWidth: 0
}

const rowItemStyle = {
    alignItems: 'center',
    color: Color.textColor,
    padding: 10,
    fontFamily: Font.family,
    fontWeight: Font.headingWeight,
    fontSize: Font.normalSize,
}

export default Table;
