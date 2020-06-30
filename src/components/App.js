import React from 'react';
import Navbar from './Navbar';
import Card from './Card';
import MainContent from './MainContent';
import ThisWeek from './ThisWeek';
import Color from '../styles/color';
import LineGraph from './LineGraph';

class App extends React.Component {

    render() {
        return (
            <div style={mainContentStyle}>
                <div style={gridStyle}>
                    <Navbar style={navbarStyle} />
                    <Card style={thisWeekStyle} title={"This Week"}>
                        <div>Hello World!</div>
                    </Card>
                    <Card style={annualStyle} title={"Annual Expenditure"} />
                    <Card style={monthlyStyle} title={"Monthly Expenditure"} />
                </div>
                
                {/* <ThisWeek style={thisWeekStyle} spent={12.45} remaining={45.70}/>
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
                </Card>*/}
            </div>
        );
    }
}

const mainContentStyle = {
    margin: 0,
    maxHeight: '100vh',
    width: '100%',
    backgroundColor: Color.backgroundColor
};

// 'row-start / column-start / row-end / column-end'

const gridStyle = {
    display: 'grid',
    gridTemplateColumns: '0px repeat(3, 1fr) 0px',
    gridTemplateRows: '1fr repeat(2, auto) 0px',
    gridColumnGap: 40,
    gridRowGap: 40
};

const navbarStyle = {
    gridArea: '1 / 1 / 2 / 6',
    width: '100%'
};

const thisWeekStyle = {
    gridArea: '2 / 2 / 4 / 2'
};

const annualStyle = {
    gridArea: '2 / 3 / 2 / 5'
};

const monthlyStyle = {
    gridArea: '3 / 3 / 3 / 5'
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