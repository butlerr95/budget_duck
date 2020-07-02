import React from 'react';
import NavbarItem from './NavbarItem';
import { MdHome, MdArrowBack, MdSettings } from 'react-icons/md';
import styles from '../../styles/Navbar.css';

class Navbar extends React.Component {

    render() {
        return (
            <div style={this.props.style}>
                <div className={'navbar'}>
                    <NavbarItem onClick={this.handleBack}>
                        <MdArrowBack className={'navbar_icon'} />
                    </NavbarItem>
                    <NavbarItem onClick={this.handleHome}>
                        <MdHome className={'navbar_icon'} />
                    </NavbarItem>
                    <NavbarItem onClick={this.handleSettings}>
                        <MdSettings className={'navbar_icon'} />
                    </NavbarItem>
                </div>
            </div>
        );
    }
}

export default Navbar;