import React from 'react';
import styles from '../../styles/List.css';

class List extends React.Component {
    render() {
        return (
            <div className={'list'}>
                {this.props.children}
            </div>
        );
    }
}

export default List;