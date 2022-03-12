let fields = [];
let currentShape = 'cross';
let gameOver = false;
let winner;

function init() { //initialize
    firstPlayer();
}

function start() {
    document.getElementById('start-screen').style.display = "none";
} 

function fillShape(id) {
    if(!fields[id] && !gameOver) { // following code only gets executed when fields[i] is empty and gameOver is false
    fields[id] = currentShape; // 'cross' or 'circle' is inserted at postion 'id' in fields
    draw();
    changeShape();
    checkForWin();
    checkForEnd();
    }
}

function firstPlayer() {
    if(fields == 0) {
        document.getElementById('player-1').classList.remove('inactive');
    }
}

function changeShape() {
    if (currentShape == 'cross') {
        currentShape = 'circle';
        document.getElementById('player-2').classList.remove('inactive');
        document.getElementById('player-1').classList.add('inactive');
    } else {
        currentShape = 'cross';
        document.getElementById('player-1').classList.remove('inactive');
        document.getElementById('player-2').classList.add('inactive');
    }
}

function draw() {
    for(i = 0; i < fields.length; i++) {
        let idNr = i + 1;
        if(fields[i] == 'cross') {
            document.getElementById('cross-' + idNr).classList.remove('d-none');
        }
        if(fields[i] == 'circle') {
            document.getElementById('circle-' + idNr).classList.remove('d-none');
        }
    }
}

function checkForWin() {
    if(fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-1').style.transform = "scaleX(1)";
    }

    if(fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
        winner = fields[3];
        document.getElementById('line-2').style.transform = "scaleX(1)";
    }

    if(fields[6] == fields[7] && fields[7] == fields[8] && fields[6]) {
        winner = fields[6];
        document.getElementById('line-3').style.transform = "scaleX(1)";
    }

    if(fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-5').style.transform = " scaleX(1) rotate(90deg)";
    }

    if(fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
        winner = fields[1];
        document.getElementById('line-4').style.transform = "scaleX(1) rotate(90deg)";
    }

    if(fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
        winner = fields[2];
        document.getElementById('line-6').style.transform = "scaleX(1) rotate(90deg)";
    }

    if(fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-7').style.transform = "scaleX(1) rotate(45deg)";
    }

    if(fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
        winner = fields[2];
        document.getElementById('line-8').style.transform = "scaleX(1) rotate(-45deg)";
    }

    if(winner) {
        gameOver = true;
        showWinner();
        setTimeout(function() {
            document.getElementById('game-over').classList.remove('d-none');
            document.getElementById('button').classList.remove('d-none');
        },1000)
    }
}

function restart() {
    gameOver = false;
    fields = [];
    winner = false;
    currentShape = 'cross';
    document.getElementById('game-over').classList.add('d-none');
    document.getElementById('button').classList.add('d-none');
    document.getElementById('player-2').classList.add('inactive');
    document.getElementById('game-over').innerHTML = '';

    for(i = 1; i < 9; i++) {
        document.getElementById('line-' + i).style.transform = "scaleX(0)";
    }

    for(i = 1; i < 10; i++) {
        document.getElementById('cross-' + i).classList.add('d-none');
        document.getElementById('circle-' + i).classList.add('d-none');
    }
}

function checkForEnd() {
    if(Object.keys(fields).length == 9 && !winner) {
        document.getElementById('button').classList.remove('d-none');
    }
}

function showWinner() {
    if(winner == 'cross') {
        document.getElementById('game-over').innerHTML = '<h1 class="h2">Player 1 won!<h1>';
    } else {
        document.getElementById('game-over').innerHTML = '<h1 class="h2">Player 2 won!<h1>';
    }
}

