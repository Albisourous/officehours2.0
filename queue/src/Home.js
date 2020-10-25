import React, { Component } from 'react'
import './App.css';
import {
    Table,
    TableBody,
    TableFooter,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
    TextField,
    MuiThemeProvider
} from 'material-ui';
import injectTapEventPlugin from 'react-tap-event-plugin';
import fire from './Fire';
let rtdb = fire.database();

class Clock extends React.Component {
    state = { date: new Date() }
    componentDidMount() { this.timerId = setInterval(() => this.tick(), 1000); }
    componentWillUnmount() { clearInterval(this.timerId); }
    tick() { this.setState({ date: new Date() }); }
    render() { return (<h2>The current time is {this.state.date.toLocaleTimeString()}</h2>); }
}

let data = [
    {
        name: 'John Smith',
        tags: 'Employed'
    },
    {
        name: 'Randal White',
        tags: 'Unemployed'
    },
];

class Home extends Component {
    // state = {
    //     data: [
    //         {
    //             name: 'John Smith',
    //             tags: 'Employed'
    //         },
    //         {
    //             name: 'Randal White',
    //             tags: 'Unemployed'
    //         },
    //     ],
    // }

    // useEffect = e => {
    //     let val = {
    //         name: e.val().name,
    //         tags: e.val().tags
    //     }
    //     let prevData = data;
    //     const timer = setInterval(() => {
    //         this.setState({
    //             data: prevData => {
    //                 [...prevData[0]]
    //                 val
    //             }
    //         });
    //     }, 500);
    //     return () => clearInterval(timer);
    // }

    updateData() {
        console.log("INCOMING DATA ALERT *!)#^u!)*u^*)!@yu^)*!@y^");
        let users = rtdb.ref('users')
        users.orderByChild('time').on("child_added", e => {
            // console.log(e.val().name, e.val().tags);
            let val = {
                name: e.val().name,
                tags: e.val().tags
            };
            data.concat(val);
        });
        console.log(data)
    }

    render() {
        return (
            <div className="home">
                <div className="text text-center">
                    <div className="square center">
                        <h1>Welcome to Office Hours!</h1>
                        <Clock />
                        <h2>The current queue is:</h2>
                        <label><input value="Refresh Queue" type="submit" name="update_data" onClick={this.updateData} />  </label>
                        <MuiThemeProvider >
                            <Table height={"300px"} fixedHeader={true}>
                                <TableHeader>
                                    <TableRow>
                                        <TableHeaderColumn tooltip="Position"> Position </TableHeaderColumn>
                                        <TableHeaderColumn tooltip="Name"> Name </TableHeaderColumn>
                                        <TableHeaderColumn tooltip="Tags"> Tags </TableHeaderColumn>
                                    </TableRow>
                                </TableHeader>
                                <TableBody showRowHover={true}>
                                    {data.map((row, index) =>
                                        <TableRow key={index}>
                                            <TableRowColumn>{index}</TableRowColumn>
                                            <TableRowColumn>{row.name}</TableRowColumn>
                                            <TableRowColumn>{row.tags}</TableRowColumn>
                                        </TableRow>
                                    )}
                                </TableBody>
                            </Table>
                        </MuiThemeProvider>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;