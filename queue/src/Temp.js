import './Game.css'

var countClicks;
var tableDisplay;
var rows = 3;
var table = document.getElementById("minesweeperTable");
var winner = document.getElementById("winner");
startGame();

function startGame() {
    countClicks = 0;
    tableDisplay = [];
    winner.innerHTML = "";
    table.innerHTML = "";
    table.addEventListener("click", showResult);;
    for (var i = 0; i < rows; i++) {
        var row = document.createElement("tr");
        var tableRow = [];
        for (var j = 0; j < rows; j++) {
            var col = document.createElement("td");
            var btn = document.createElement("button");
            btn.classList.add("btn-user");
            btn.id = "Button_" + String(i * rows + j);
            tableRow.push("");
            col.appendChild(btn);
            row.appendChild(col);
        }
        tableDisplay.push(tableRow);
        table.appendChild(row);
    }
}


function showResult(e) {
    const isButton = e.target.nodeName === 'BUTTON';
    if (!isButton) {
        return;
    }
    var index = parseInt(e.target.id.split("_")[1]);
    var row = Math.floor(index / rows);
    var col = index % rows;
    if (tableDisplay[row][col] !== "") {
        return;
    }
    var btn = document.getElementById(e.target.id);
    var output = countClicks % 2 ? "O" : "X";
    btn.innerHTML = output;

    tableDisplay[row][col] = output;
    console.log(tableDisplay);
    countClicks++;
    var gameWinner = isWin();
    var result;
    var reset;
    if (gameWinner !== "") {
        result = document.createTextNode(gameWinner + " Wins!");
        winner.appendChild(result);
        table.removeEventListener("click", showResult);
        reset = document.createElement("button");
        reset.classList.add("btn-primary");
        reset.innerHTML = "Reset Game";
        reset.addEventListener("click", startGame);
        winner.appendChild(reset);
    } else if (countClicks === rows * rows) { //todo: ===?
        result = document.createTextNode("Tie");
        winner.appendChild(result);
        table.removeEventListener("click", showResult);
        reset = document.createElement("button");
        reset.classList.add("btn-primary");
        reset.innerHTML = "Reset Game";
        reset.addEventListener("click", startGame);
        winner.appendChild(reset);

    }
}

function isWin() {
    var matches = ["XXX", "OOO"];

    var checkRows = [
        tableDisplay[0][0] + tableDisplay[0][1] + tableDisplay[0][2],
        tableDisplay[1][0] + tableDisplay[1][1] + tableDisplay[1][2],
        tableDisplay[2][0] + tableDisplay[2][1] + tableDisplay[2][2],
        tableDisplay[0][0] + tableDisplay[1][0] + tableDisplay[2][0],
        tableDisplay[0][1] + tableDisplay[1][1] + tableDisplay[2][1],
        tableDisplay[0][2] + tableDisplay[1][2] + tableDisplay[2][2],
        tableDisplay[0][0] + tableDisplay[1][1] + tableDisplay[2][2],
        tableDisplay[2][0] + tableDisplay[1][1] + tableDisplay[0][2]
    ]

    for (let i = 0; i < checkRows.length; i++) {
        if (checkRows[i] === matches[0]) {
            return "X";
        }
        else if (checkRows[i] === matches[1]) {
            return "O";
        }
    }
    return "";
}