
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

const KEY = {
    '1': 'X',
    '-1': 'O',
    'null': ''
};

let turn, gameboard, winner;



const messageEl = document.getElementById('message');
const squareEls = document.querySelectorAll('.square');


document.getElementById('gameboard').addEventListener('click', handleClick);
document.getElementById('reset').addEventListener('click', init);


init();

function init() {
    turn = 1;
    gameboard = new Array(9).fill(null);
    winner = false;
    render();
}
function render() {
    gameboard.forEach(function(element, index) {
    squareEls[index].textContent = KEY[element];
  });
    if (!winner) {
        messageEl.textContent = `${KEY[turn]}'s turn!`;
    }
    else if(winner === 'T') {
        messageEl.textContent = "It's a tie!";
    }
    else {
        messageEl.textContent = `${KEY[winner]} is a winner!`;
    }

}

function checkWinner() {

  for(let i = 0; i < COMBOS.length; i++) {
    if(Math.abs(gameboard[COMBOS[i][0]] 
              + gameboard[COMBOS[i][1]] 
              + gameboard[COMBOS[i][2]])===3) return gameboard[COMBOS[i][0]];
  }
    if (gameboard.includes(null)) return false;
  return 'T';
}

function handleClick(evt) {
    let selectedIndex = evt.target.dataset.index;
    if (winner || gameboard[selectedIndex]) return;
    gameboard[selectedIndex] = turn;
    turn *= -1;
    winner = checkWinner();
    render();
}

