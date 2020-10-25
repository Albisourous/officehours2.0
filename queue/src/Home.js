import React, { Component } from 'react'
import './App.css';
import BaseTable, { Column } from 'react-base-table'
import 'react-base-table/styles.css'

import fire from './Fire';
let rtdb = fire.database();

class Clock extends React.Component {
    state = { date: new Date() }
    componentDidMount() { this.timerId = setInterval(() => this.tick(), 1000); }
    componentWillUnmount() { clearInterval(this.timerId); }
    tick() { this.setState({ date: new Date() }); }
    render() { return (<h2>The current time is {this.state.date.toLocaleTimeString()}</h2>); }
}

const data = [
    {
        name: 'John Smith',
        tags: 'Employed'
    },
    {
        name: 'Randal White',
        status: 'Unemployed'
    },
];

class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="text text-center">
                    <div className="square center">
                        <h1>Welcome to Office Hours!</h1>
                        <Clock />
                        <h2>The current queue is:</h2>
                        <BaseTable data={data} width={930} height={400}>
                            <Column key="col0" dataKey="col0" width={100} />
                            <Column key="col1" dataKey="col1" width={100} />
                        </BaseTable>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;