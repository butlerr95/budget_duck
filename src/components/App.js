import React from 'react';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';

import Color from '../styles/color';
import Font from '../styles/font';

import Navbar from './Navbar/Navbar';
import Card from './Generic/Card';
import WeeklyCard from './WeeklyCard/WeeklyCard';

class App extends React.Component {

    render() {
        return (
            <div style={mainContentStyle}>
                <div style={gridStyle}>
                    <Navbar style={navbarStyle} />
                    {/* WeeklyCard */}
                    <WeeklyCard />
                    <Card style={annualStyle} title={"Annual Spending"} />
                    <Card style={monthlyStyle} title={"Monthly Spending"} />
                </div>
                
                {/* <Card style={thisWeekStyle} title={"This Week"} />
                <ThisWeek style={thisWeekStyle} spent={12.45} remaining={45.70}/>
                <Card style={annualExpenditureStyle} title={'Annual Expenditure'}>
                    <div>
                        <label>Year</label>
                        <select>
                            <option>2017</option>
                            <option>2018</option>
                            <option>2019</option>
                            <option>2020</option>
                        </select>
                    </div>
                    
                </Card>
                <Card style={monthlyExpenditureStyle} title={'Monthly Expenditure'}>
                    <div>
                        <label>Year</label>
                        <select>
                            <option>2017</option>
                            <option>2018</option>
                            <option>2019</option>
                            <option>2020</option>
                        </select>
                    </div>
                    <LineGraph data={lineData} height={300} width={700} />  
                </Card>*/}
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

const lineData = [
    {
        "id": "This Week",
        "data": [
            {
                "x": "Mon",
                "y": 15.65
            },
            {
                "x": "Tues",
                "y": 23.40
            },
            {
                "x": "Wed",
                "y": 24.56
            },
            {
                "x": "Thurs",
                "y": 24.56
            },
            {
                "x": "Fri",
                "y": 31.22
            },
            {
                "x": "Sat",
                "y": 41.70
            },
            {
                "x": "Sun",
                "y": 41.70
            }
        ]
    }
];

export default App; 