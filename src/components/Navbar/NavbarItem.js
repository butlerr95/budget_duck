import React from 'react';
import { MdHome, MdArrowBack } from 'react-icons/md';
import styles from '../../styles/Navbar.css';

class NavbarItem extends React.Component {
    render() {
        return (
            <div className={'navbar_item'} onClick={this.props.onClick}>
                {this.props.children}
            </div>
        );
    }
}

export default NavbarItem;