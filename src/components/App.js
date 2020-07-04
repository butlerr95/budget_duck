import React from 'react';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';

import Color from '../styles/color';
import Font from '../styles/font';

import Navbar from './Navbar/Navbar';
import Card from './Generic/Card';
import WeeklyCard from './WeeklyCard/WeeklyCard';

import styles from '../styles/App.css';
import BarGraph from './Graphs/BarGraph';
import MonthlyCard from './MonthlyCard/MonthlyCard';

import WeekSelector from './WeeklyCard/WeekSelector';

const testData = [
    { x: 'Mon', y: 4.25 },
    { x: 'Tues', y: 9 },
    { x: 'Wed', y: 13.50 },
    { x: 'Thurs', y: 23.45 },
    { x: 'Fri', y: 23.45 },
    { x: 'Sat', y: 27.84 },
    { x: 'Sun', y: 44.78 }
];

class App extends React.Component {

    render() {
        return (
            <div style={mainContentStyle}>
                <div style={gridStyle}>
                    <Navbar style={navbarStyle} />
                    <WeeklyCard />
                    <Card style={annualStyle} title={"Annual Spending"}>
                        {/* Replace with Year Selector!! */}
                        <WeekSelector />
                        <BarGraph width={800} height={275} />
                    </Card>
                    <MonthlyCard style={monthlyStyle} />
                </div>
            </div>
        );
    }
}

const mainContentStyle = {
    margin: 0,
    backgroundColor: Color.backgroundColor,
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column'
};

// 'row-start / column-start / row-end / column-end'

const gridStyle = {
    display: 'grid',
    gridTemplateColumns: '0px repeat(3, 1fr) 0px',
    gridTemplateRows: 'auto repeat(2, 1fr) 0px',
    gridColumnGap: 40,
    gridRowGap: 40,
    flexGrow: 1,
    flexShrink: 1
};

const navbarStyle = {
    gridArea: '1 / 1 / 2 / 6'
};

const annualStyle = {
    gridArea: '2 / 3 / 2 / 5',
    display: 'flex'
};

const monthlyStyle = {
    gridArea: '3 / 3 / 3 / 5',
    display: 'flex'
};

export default App; 