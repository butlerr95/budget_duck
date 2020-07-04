import React from 'react';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';


import Font from '../../styles/font';
import Color from '../../styles/color';

import styles from '../../styles/WeekSelector.css';
import DatePicker from '../Generic/DatePicker';

const dateFormat = 'dd/MM/yyyy';

class WeekSelector extends React.Component {

    state = { 
        date: new Date(),
        forwardArrowDisabled: true
    };

    // When the date is changed by the child DayPickerInput element, update the state
    handleChildDateChange = (date) => {
        this.setState({ date: date });
    }
    
    // Given a date return the Monday of that week
    getMonday = (date) => {
        date = new Date(date);
        var day = date.getDay(),
            diff = date.getDate() - day + (day == 0 ? -6:1); // adjust when day is sunday
        return new Date(date.setDate(diff));
    }

    // Set the state of forwardArrowDisabled
    setForwardArrowDisabled = () => {
        // Get the current date
        let currentDate = new Date();
        // Set the time to default as we only care about the date
        currentDate.setHours(12,0,0,0);
        // Get the Monday of the current week
        let lastMonday = this.getMonday(currentDate);

        // If the current date is before the Monday of the current week, then enable the forward arrow
        if(this.state.date < lastMonday) {
            this.setState({ forwardArrowDisabled: false })
        }
        else {
            this.setState({ forwardArrowDisabled: true })
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.date !== this.state.date) {
            this.setForwardArrowDisabled();
        }
    }

    handleClickBack = (event) => {
        let newDate = new Date(this.state.date);
        newDate.setDate(this.state.date.getDate() - 7);
        this.setState({ date: newDate });
    }

    handleClickForward = (event) => {
        let newDate = new Date(this.state.date);
        newDate.setDate(this.state.date.getDate() + 7);
        this.setState({ date: newDate });
    }

    render() {
        return (
            <div className={'week_selector'}>
                <MdArrowBack className={'week_selector_button'} onClick={this.handleClickBack} />
                <DatePicker date={this.state.date} onChange={this.handleChildDateChange} />
                <MdArrowForward 
                    className={`week_selector_button${this.state.forwardArrowDisabled ? '_disabled' : ''}`} 
                    onClick={this.state.forwardArrowDisabled ? undefined : this.handleClickForward} 
                />
            </div>
        );
    }
}

export default WeekSelector;