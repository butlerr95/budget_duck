import React from 'react';
import NavbarItem from './NavbarItem';
import { MdHome, MdSettings } from 'react-icons/md';
import { IoIosMoon, IoIosSunny } from 'react-icons/io';
import styles from '../../styles/Navbar.css';

import { setTheme, darkTheme, lightTheme } from '../../styles/Theme';

class Navbar extends React.Component {
    
    state = {
        theme: 'light'
    }

    // Switch between light and dark themes
    toggleTheme = () => {
        if(this.state.theme === 'light') {
            setTheme(darkTheme);
            this.setState({ theme: 'dark' });
        }
        else {
            setTheme(lightTheme);
            this.setState({ theme: 'light' });
        }
    }

    render() {
        return (
            <div className={this.props.className}>
                <div className={'navbar'}>
                    <NavbarItem>
                        <MdSettings className={'navbar_icon'} />
                    </NavbarItem>
                    <NavbarItem onClick={this.handleHome}>
                        <MdHome className={'navbar_icon'} />
                    </NavbarItem>
                    <NavbarItem onClick={this.toggleTheme}>
                        { this.state.theme === 'light' ? <IoIosMoon className={'navbar_icon'} /> : <IoIosSunny className={'navbar_icon'} />}
                    </NavbarItem>
                </div>
            </div>
        );
    }
}

export default Navbar;