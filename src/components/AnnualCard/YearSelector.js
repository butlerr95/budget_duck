import React from 'react';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';

import styles from '../../styles/Selector.css';

class YearSelector extends React.Component {

    state = { 
        date: new Date(),
        forwardArrowDisabled: true
    };

    // When the year is changed, update the state
    handleDateChange = () => {
        this.props.onChange(this.state.date.getFullYear());
    }

    // Set the state of forwardArrowDisabled
    setForwardArrowDisabled = () => {
        // Get the current date
        let currentDate = new Date();
        // Get the current year
        let currentYear = currentDate.getFullYear();

        // If the current year is less than this.state.date.getFullYear(), then enable the forward arrow
        if(this.state.date.getFullYear() < currentYear) {
            this.setState({ forwardArrowDisabled: false })
        }
        else {
            this.setState({ forwardArrowDisabled: true })
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.date !== this.state.date) {
            this.handleDateChange();
            this.setForwardArrowDisabled();
        }
    }

    handleClickBack = (event) => {
        let newDate = new Date(this.state.date);
        newDate.setFullYear(this.state.date.getFullYear() - 1);
        this.setState({ date: newDate });
    }

    handleClickForward = (event) => {
        let newDate = new Date(this.state.date);
        newDate.setFullYear(this.state.date.getFullYear() + 1);
        this.setState({ date: newDate });
    }

    render() {
        return (
            <div className={'selector'}>
                <MdArrowBack className={'selector_button'} onClick={this.handleClickBack} />
                <div className={'selector_text'}>{this.state.date.getFullYear()}</div>
                <MdArrowForward 
                    className={`selector_button${this.state.forwardArrowDisabled ? '_disabled' : ''}`} 
                    onClick={this.state.forwardArrowDisabled ? undefined : this.handleClickForward} 
                />
            </div>
        );
    }
}

export default YearSelector;