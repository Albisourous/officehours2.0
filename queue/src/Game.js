import React, { Component } from 'react'
import './Game.css'

// class tictactoe extends Component {

// }


class Game extends Component {
    componentDidMount() {
        const script = document.createElement("script");
        script.src = "./Temp.js";
        script.async = true;
        document.body.appendChild(script);
    }

    render() {
        return (
            <div className="game">
                <div className="row">
                    <table className="center" id="minesweeperTable"></table>
                    <div id="winner">
                        <br />
                        <div id="rbutton"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Game;
