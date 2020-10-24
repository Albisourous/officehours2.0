import React, { Component } from 'react'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import App from "./App";
import './App.css';

const tags = ['style check', 'bug fixing', 'part 1', 'part 2', 'part 3'];
const defaultTag = 'style check';

class Queue extends Component {
    render() {
        return (
            <div className="queue">
                <div class="text text-center">
                    <div className="square center">
                        <label>Name (first and last): <input type="text" name="name" /> </label>
                        <br />
                        <label>Tag: <Dropdown options={tags} onChange={this._onSelect} value={defaultTag} placeholder="Tag" /> </label>
                        <br />
                    </div>
                </div>
            </div>
        );
    }
}

export default Queue;
