import React from 'react';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';

import styles from '../../styles/Selector.css';

class MonthSelector extends React.Component {

    state = { 
        date: new Date(),
        forwardArrowDisabled: true
    };

    // Given a javascript Date object, get the date string in the format MMM-yyyy
    getDateString = (date) => {
        let monthNames =["Jan","Feb","Mar","Apr",
                      "May","Jun","Jul","Aug",
                      "Sep", "Oct","Nov","Dec"];

        console.log(date);

        const month = date.getMonth();
        const year = date.getFullYear();

        const dateString = monthNames[month] + "-" + year;

        return dateString;

    }

    // When the date is changed by the child DayPickerInput element, update the state
    handleChildDateChange = (date) => {
        this.setState({ date: date });
        // Call this.props.onChange to pass value to parent
    }

    // Set the state of forwardArrowDisabled
    setForwardArrowDisabled = () => {
        // Get the current date
        let currentDate = new Date();
        // Get the current month
        let currentMonth = currentDate.getMonth();
        // Get the current year
        let currentYear = currentDate.getFullYear();

        // If the current year is equal to this.state.date.getFullYear() and the 
        // current month is greater than or equal to this.state.date.getMonth()
        // then disable the forward arrow
        if(this.state.date.getFullYear() === currentYear && this.state.date.getMonth() >= currentMonth) {
            this.setState({ forwardArrowDisabled: true });
        }
        else {
            this.setState({ forwardArrowDisabled: false });
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.date !== this.state.date) {
            this.setForwardArrowDisabled();
        }
    }

    handleClickBack = (event) => {
        let newDate = new Date(this.state.date);
        newDate.setMonth(this.state.date.getMonth() - 1);
        this.setState({ date: newDate });
    }

    handleClickForward = (event) => {
        let newDate = new Date(this.state.date);
        newDate.setMonth(this.state.date.getMonth() + 1);
        this.setState({ date: newDate });
    }

    render() {
        return (
            <div className={'selector'}>
                <MdArrowBack className={'selector_button'} onClick={this.handleClickBack} />
                <div className={'selector_text'} >{this.getDateString(this.state.date)}</div>
                <MdArrowForward 
                    className={`selector_button${this.state.forwardArrowDisabled ? '_disabled' : ''}`} 
                    onClick={this.state.forwardArrowDisabled ? undefined : this.handleClickForward} 
                />
            </div>
        );
    }
}

export default MonthSelector;