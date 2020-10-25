import React, { Component } from 'react'
import './App.css';
import './Home.css';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn, TextField, MuiThemeProvider } from 'material-ui';
import MaterialTable from 'material-table'
// import ReactTable from "react-table";
import injectTapEventPlugin from 'react-tap-event-plugin';
import $ from 'jquery';
import fire from './Fire';
let rtdb = fire.database();

class Clock extends React.Component {
    state = { date: new Date() }
    componentDidMount() { this.timerId = setInterval(() => this.tick(), 1000); }
    componentWillUnmount() { clearInterval(this.timerId); }
    tick() { this.setState({ date: new Date() }); }
    render() { return (<h2>The current time is {this.state.date.toLocaleTimeString()}</h2>); }
}

var data = [
    {
        name: "Nobody in queue",
        tags: "pogchamp",
    },
];


class Home extends Component {

    componentDidMount() {
        this.renderPosts();
    }

    renderPosts = async () => {
        try {
            rtdb.ref('users').orderByChild('time').once('value', function (snapshot) {

                if (snapshot.exists()) {
                    data = snapshot;
                    var content = "";
                    var i = 0;

                    snapshot.forEach(function (data) {
                        var pos = ++i;
                        var name = data.val().name;
                        var tags = data.val().tags;
                        content += '<tr>';
                        content += '<td>' + pos + '</td>';
                        content += '<td>' + name + '</td>';
                        content += '<td>' + tags + '</td>';
                        content += '</tr>';
                    });

                    $('#ex-table').append(content);
                    // return content;
                }
            });
        } catch (err) {
            console.log(err);
        }
    }

    render() {
        return (
            <div className="home">
                <div className="text text-center">
                    <div className="square center">
                        <h1>Welcome to Office Hours!</h1>
                        <Clock />
                        <h2>The current queue is:</h2>
                        <label><input value="Remove First" type="submit" name="update_data" onClick={this.forceUpdateHandler} />  </label>
                        {/* 
                        <div className="queueTable">
                            <MuiThemeProvider options={{ search: false }}>
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
                        </div> */}

                        <div>
                            <table class="table table-striped center" id="ex-table">
                                <thead class="thead-inverse">
                                    <tr id="header">
                                        <th>Position</th>
                                        <th>Name</th>
                                        <th>Tags</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr id="tr">
                                        <td id="pos"></td>
                                        <td id="name"></td>
                                        <td id="tags"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default Home;