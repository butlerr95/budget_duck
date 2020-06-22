import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';

class App extends Component {
    render() {
        return(
            <Button onClick={getExpenses}>Get Expenses</Button>
        )
    }
}

function getExpenses(e) {
    e.preventDefault();
    fetch('http://127.0.0.1:5000/expense', { method: 'get', mode: 'cors' })
        .then(response => response.json())
        .then(data => console.log(data));
}

ReactDOM.render(<App />, document.getElementById('app'));