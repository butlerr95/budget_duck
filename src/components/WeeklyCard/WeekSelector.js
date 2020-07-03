import React from 'react';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';


import Font from '../../styles/font';
import Color from '../../styles/color';

import styles from '../../styles/WeekSelector.css';
import DatePicker from '../Generic/DatePicker';

const dateFormat = 'dd/MM/yyyy';

class WeekSelector extends React.Component {
    render() {
        return (
            <div className={'week_selector'}>
                <MdArrowBack className={'week_selector_button'} />
                <DatePicker date={new Date()} />
                <MdArrowForward className={'week_selector_button'} />
            </div>
        );
    }
}

const inputStyle = {
    fontFamily: Font.family,
    fontSize: Font.normalSize,
    fontWeight: 600,
    backgroundColor: 'rgb(0,0,0,0)',
    border: 'none',
    textAlign: 'center',
    color: 'rgb(75, 101, 132, 0.9)',
    width: '30%',
    minWidth: '100px',
    paddingTop: 5,
    letterSpacing: 0.6
};

export default WeekSelector;