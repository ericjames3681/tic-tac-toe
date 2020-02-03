alert('JS Loaded');

/*----- constants -----*/

// 1) Win Combos - rows and cols combinations and position
// 2) Players - 

const COMBOS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const key = {
    '1': 'X',
    '-1': 'O',
    'null': ''
};
/*----- app's state (variables) -----*/
//Data that determines 
let turn, gameboard, winner;
//unitialized. returns UNDEFINED

/*----- cached element references -----*/

const messageEl = document.getElementById('message');
const squareEls = document.querySelectorAll('.square');

/*----- event listeners -----*/

document.getElementById('gameboard').addEventListener('click', handleClick);

/*----- functions -----*/

function handleClick(evt) {
    console.log(evt.target.dataset.index);
}