
// Tic-Tac-Toe

const gameBoard = document.getElementById('gameBoard');
const resultElement = document.getElementById('result');

let currentPlayer = 'X';
let gameIsOver = false;

function createBoard() {
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener('click', handleCellClick);
        gameBoard.appendChild(cell);
    }
}

function handleCellClick(event) {
    const cell = event.target;
    if (!cell.textContent && !gameIsOver) {
        cell.textContent = currentPlayer;
        if (checkWinner()) {
            resultElement.textContent = `${currentPlayer} wins!`;
            gameIsOver = true;
        } else if (isBoardFull()) {
            resultElement.textContent = "It's a draw!";
            gameIsOver = true;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function checkWinner() {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let combination of winningCombinations) {
        if (gameBoard.children[combination[0]].textContent ===
            gameBoard.children[combination[1]].textContent &&
            gameBoard.children[combination[1]].textContent ===
            gameBoard.children[combination[2]].textContent &&
            gameBoard.children[combination[0]].textContent !== '') {
            return true;
        }
    }

    return false;
}

function isBoardFull() {
    for (let i = 0; i < gameBoard.children.length; i++) {
        if (gameBoard.children[i].textContent === '') {
            return false;
        }
    }
    return true;
}

function resetGame() {
    currentPlayer = 'X';
    gameIsOver = false;
    resultElement.textContent = '';

    for (let i = 0; i < gameBoard.children.length; i++) {
        gameBoard.children[i].textContent = '';
    }
}

const resetButton = document.createElement('button');
resetButton.textContent = 'Reset';
resetButton.addEventListener('click', resetGame);
document.body.appendChild(resetButton);

createBoard();


// End of Tic-Tac-Toe