import React from 'react';

class MainContent extends React.Component {
    render() {
        return (
            <div style={this.props.style}>
                {this.props.children}
            </div>
        );
    }
}

export default MainContent;