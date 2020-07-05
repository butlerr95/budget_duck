import React from 'react';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';

import Navbar from './Navbar/Navbar';
import Card from './Generic/Card';
import WeeklyCard from './WeeklyCard/WeeklyCard';
import MonthlyCard from './MonthlyCard/MonthlyCard';
import AnnualCard from './AnnualCard/AnnualCard';

import styles from '../styles/App.css';

class App extends React.Component {

    render() {
        return (
            <div className={'app_grid'}>
                <Navbar className={'app_grid_navbar'} />
                <WeeklyCard className={'app_grid_weekly_card'} />
                <AnnualCard className={'app_grid_annual_card'} />
                <MonthlyCard className={'app_grid_monthly_card'} />
            </div>
        );
    }
}

export default App; 