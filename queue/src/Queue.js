import React, { Component } from 'react';
import Select from "react-select";
// import Dropdown from 'react-dropdown';
// import 'react-dropdown/style.css';
// import App from "./App";
import fire from './Fire';
import './Queue.css';
import './App.css';

const tags = [
    { value: 'style', label: 'style check' },
    { value: 'bug', label: 'bug fixing' },
    { value: 'general', label: 'general question' }
];
const defaultTag = 'style check';

class Queue extends Component {
    // stores current values' states
    state = {
        name: "",
        time: null,
        tags: ""
    }

    // updates name state
    handleName = e => {
        this.setState({
            name: e.target.value
        })
    }

    // updates tags state
    handleTags = (values) => {
        let parsedVals = values.map((e) => e.value).sort().join(', ');
        this.setState({
            tags: parsedVals
        });
    }

    // updates firebase db w/ user's name & tags
    handleSubmit = e => {
        //let messageRef = fire.database().ref('users').orderByKey().limitToLast();
        //console.log(fire.database().ref('users').orderByKey());
        if (this.state.name.length > 0) {
            let val = {
                name: this.state.name,
                time: Date.now(),
                tags: this.state.tags
            };
            fire.database().ref('users').push(val);
            this.setState({
                name: "",
                time: null,
                tags: ""
            })
            //console.log(messageRef);
        }
    }

    // renders the submission form
    render() {
        return (
            <div className="queue">
                <div class="text text-center">
                    <div class="square center infobox">
                        <br />
                        <br />
                        <label><input type="text" class="name_data" placeholder="Name" value={this.state.name} onChange={this.handleName} /> </label>
                        <br />
                        <div class = "tags-div">
                            <Select className="tags-selector" options={tags} onChange={this.handleTags} theme={(theme) => ({
                                ...theme,
                                borderRadius: 0,
                                colors: {
                                    ...theme.colors,
                                    text: 'orangered',
                                    primary25: 'rgba(97, 198, 215)',
                                    primary: 'black',
                                },
                            })} placeholder="tags" isMulti />
                            <br />
                        </div>
                        <label><input value="Submit" type="submit" name="join_queue" class="submit_data" onClick={this.handleSubmit} /> </label>
                    </div>
                </div>
            </div>
        );
    }
}

export default Queue;
