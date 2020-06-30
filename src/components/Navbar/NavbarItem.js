import React from 'react';
import { MdHome, MdArrowBack } from 'react-icons/md';

class NavbarItem extends React.Component {

    state = { hover: false };

    onHover = (event) => {
        this.setState({ hover: !this.state.hover })
    }

    render() {
        return (
            <div style={this.state.hover ? hoverStyle : defaultStyle} onMouseLeave={this.onHover} onMouseEnter={this.onHover} onClick={this.props.onClick}>
                {this.props.children}
            </div>
        );
    }
}

const defaultStyle = {
    flexGrow: 1,
    height: '100%',
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    opacity: 0.75
}

const hoverStyle = {
    flexGrow: 1,
    height: '100%',
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'rgb(0,0,0,0.075)'
}

export default NavbarItem;