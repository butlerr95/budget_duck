import React from 'react';

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
    padding: '10px 25px 10px 25px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyItems: 'end'
};

export default List;