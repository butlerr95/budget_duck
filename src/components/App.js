import React from 'react';
import Navbar from './Navbar';
import Card from './Card';
import MainContent from './MainContent';
import ThisWeek from './ThisWeek';
import Color from '../styles/color';
import { MdBlock } from 'react-icons/md';
import LineGraph from './LineGraph';

class App extends React.Component {

    render() {
        return (
            <div style={backgroundStyle}>
                <Navbar />
                <div style={mainContentStyle}>
                    <ThisWeek style={thisWeekStyle} spent={12.45} remaining={45.70}/>
                    {/*<Card style={annualExpenditureStyle} title={'Annual Expenditure'}>
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
                    </Card> */}
                </div>
            </div>
        );
    }
}

const mainContentStyle = {
    display: 'grid',
    gridTemplateRows: '10% 100% 100%',
    gridTemplateColumns: '30% 30% 30%',
}

const thisWeekStyle = {
    gridColumnStart: 2,
    gridColumnEnd: 'span 1',
    gridRowStart: 2,
    gridRowEnd: 'span 1',
};

const annualExpenditureStyle = {
    gridColumnStart: 4,
    gridColumnEnd: 'span 3',
    gridRowStart: 2,
    gridRowEnd: 'span 1',
};

const monthlyExpenditureStyle = {
    gridColumnStart: 4,
    gridColumnEnd: 'span 3',
    gridRowStart: 4,
    gridRowEnd: 'span 1',
};

const backgroundStyle = {
    display: 'inline-block',
    position: 'relative',
    height: 'calc(100%-30px)',
    width: '100%',
    margin: 0
};

const lineData = [
    {
        "id": "Annual spending",
        "data": [
            {
                "x": "Jan",
                "y": 600
            },
            {
                "x": "Feb",
                "y": 500
            },
            {
                "x": "Mar",
                "y": 300
            },
            {
                "x": "Apr",
                "y": 450
            },
            {
                "x": "May",
                "y": 475
            },
            {
                "x": "Jun",
                "y": 590
            },
            {
                "x": "Jul",
                "y": 1000
            },
            {
                "x": "Aug",
                "y": 700
            },
            {
                "x": "Sep",
                "y": 800
            },
            {
                "x": "Oct",
                "y": 560
            },
            {
                "x": "Nov",
                "y": 576
            },
            {
                "x": "Dec",
                "y": 645
            }
        ]
    }
];

export default App; 