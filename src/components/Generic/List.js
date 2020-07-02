import React from 'react';
import Color from '../../styles/color';

class List extends React.Component {
    render() {
        return (
            <div style={listStyle}>
                {this.props.children}
            </div>
        );
    }
}

const listStyle = {
    padding: '5px 25px 10px 25px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyItems: 'end',
    boxSixing: 'border-box',
    width: '87.5%'
};

export default List;