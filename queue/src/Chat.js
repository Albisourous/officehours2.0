// Guide https://www.youtube.com/watch?v=zQyrwxMPm88&ab_channel=Fireship
import React, { Component } from 'react';
import { Launcher } from 'react-chat-window'
import './App.css';

class Chat extends Component {
    constructor() {
        super();
        this.state = {
            messageList: []
        };
    }

    _onMessageWasSent(message) {
        this.setState({
            messageList: [...this.state.messageList, message]
        })
    }

    _sendMessage(text) {
        if (text.length > 0) {
            this.setState({
                messageList: [...this.state.messageList, {
                    author: 'them',
                    type: 'text',
                    data: { text }
                }]
            })
        }
    }

    render() {
        return (<div>
            <Launcher
                agentProfile={{
                    teamName: 'Office Hours',
                    imageUrl: './reactLogo.png'
                }}
                onMessageWasSent={this._onMessageWasSent.bind(this)}
                messageList={this.state.messageList}
                showEmoji
            />
        </div>)
    }
}

export default Chat;
