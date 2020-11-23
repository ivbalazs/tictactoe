'use strict';

const winnerIndexes = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const boardContainer = document.querySelectorAll('.grid-item');
let counter = 0;
let wonTheGame = false;
const result = document.querySelector('.new-game');

for (let i = 0; i < boardContainer.length; i += 1) {
    boardContainer[i].addEventListener('click', () => {
        if (counter === 9 || wonTheGame === true) {
            return;
        } else {
            if (counter % 2 === 0) {
                boardContainer[i].textContent = 'X';
                counter += 1;
                if (counter > 4) {
                    analyzeTheCurrentStatus();
                }
            } else {
                boardContainer[i].textContent = 'O';
                counter += 1;
                if (counter > 4) {
                    analyzeTheCurrentStatus();
                }
            }
        }
    })
};

function analyzeTheCurrentStatus() {
    for (let i = 0; i < 8; i += 1) {
        let a = boardContainer[winnerIndexes[i][0]].textContent;
        let b = boardContainer[winnerIndexes[i][1]].textContent;
        let c = boardContainer[winnerIndexes[i][2]].textContent;
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            wonTheGame = true;
            document.querySelector('.result').textContent = a + ' játékos nyert!';
            break;
        }
    }
}

result.addEventListener('click', () => {
    document.querySelector('.result').textContent = '';
    counter = 0;
    wonTheGame = false;
    for (let i = 0; i < boardContainer.length; i += 1) {
        boardContainer[i].textContent = '';
    }
})
