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
var flag = 0;
class Clock extends React.Component {
    state = { date: new Date() }
    componentDidMount() { this.timerId = setInterval(() => this.tick(), 1000); }
    componentWillUnmount() { clearInterval(this.timerId); }
    tick() { this.setState({ date: new Date() }); }
    render() { return (<h2>The current time is {this.state.date.toLocaleTimeString()}</h2>); }
}

var data = [
    {
        name: "placeholder queue",
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

                        var name = data.val().name;
                        var tags = data.val().tags;
                        if (name != null) {
                            var pos = ++i;
                            content += '<tr>';
                            content += '<td>' + pos + '</td>';
                            content += '<td>' + name + '</td>';
                            content += '<td>' + tags + '</td>';
                            content += '</tr>';
                        }
                    });

                    $('#ex-table').append(content);
                    // return content;
                }
            });
        } catch (err) {
            console.log(err);
        }
    }

    // removes first entry from queue
    removeFirst() {
        try {
            var toBeRemoved;
            var i = 0;
            rtdb.ref('users').orderByChild('time').limitToFirst(1).on('child_added', function (usersSnapshot) {
                console.log("key=" + usersSnapshot.key);
                if (i++ == 0 && flag == 0) {
                    toBeRemoved = rtdb.ref('users/' + usersSnapshot.key).set(null);
                    flag = 1;
                }
            });
        } catch (err) {
            console.log(err);
        }
        if (flag == 1) {
            window.location.reload(false);
        }
        else {
            flag = 0;
        }
    }

    // removes all entries from queue (clears queue)
    removeAll() {
        try {
            var toBeRemoved;
            rtdb.ref('users').orderByChild('time').limitToFirst(1).on('child_added', function (usersSnapshot) {
                toBeRemoved = rtdb.ref('users/' + usersSnapshot.key).set(null);
            });
        } catch (err) {
            console.log(err);
        }
        window.location.reload();
    }

    // renders homepage (queue & other elements)
    render() {
        return (
            <div className="home">
                <div className="text text-center">
                    <div className="square center">
                        <h1>Welcome to Office Hours!</h1>
                        <Clock />
                        <h2>The current queue is:</h2>
                        <label><input value="Remove First" type="submit" name="queue_data" class="update_data" onClick={this.removeFirst} />  </label>
                        <div class="table-container">
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
                        <label><input value="Clear Queue" type="submit" name="queue_data" class="remove_data" onClick={this.removeAll} />  </label>
                    </div>
                </div>
            </div >
        );
    }
}

export default Home;