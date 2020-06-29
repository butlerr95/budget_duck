import React from 'react';
import NavbarItem from './NavbarItem';
import { MdHome, MdArrowBack, MdSettings } from 'react-icons/md';
import Color from '../styles/color';
import Font from '../styles/font';

class Navbar extends React.Component {

    handleBack = (event) => {
        console.log('Back clicked.');
    }

    handleHome = (event) => {
        console.log('Home clicked.');
    }

    handleSettings = (event) => {
        console.log('Settings clicked.')
    }

    render() {
        return (
            <div style={NavbarStyle}>
                <NavbarItem onClick={this.handleBack}>
                    <MdArrowBack style={iconStyle} />
                </NavbarItem>
                <NavbarItem onClick={this.handleHome}>
                    <MdHome style={iconStyle} />
                </NavbarItem>
                <NavbarItem onClick={this.handleSettings}>
                    <MdSettings style={iconStyle} />
                </NavbarItem>
            </div>
        );
    }
}



const NavbarStyle = {
    display: 'flex',
    backgroundColor: Color.primaryColor,
    width: '100%',
    height: 50,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    boxShadow: '0px 1px 5px 0.5px #000'
};

const iconStyle = {
    fontSize: Font.iconLarge,
    color: Color.headingColor,
};

const textStyle = {
    fontSize: Font.navbarSize,
    color: Color.headingColor,
    fontFamily: Font.family,
    fontWeight: Font.headingWeight,
    userSelect: 'none'
}

export default Navbar;