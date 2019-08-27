/* ----- references ----- */
const references = {
    main: document.getElementById('mainSection'),
    score: document.getElementById('scoreSection'),
    button: document.getElementById('buttonSection'),
    log: document.getElementById('logSection')
}

/* ----- state ----- */
const originalState = {
    playerChoice: 'Player Choice',
    computerChoice: 'Computer Choice',
    playerScore: 0,
    computerScore: 0,
    winState: false,
    winner: ''
}

let state;

/* ----- Set your choices ----- */
const choices = ['Rock', 'Paper', "Scissors"]

/* ----- Action ----- */
function onClick(e) {
    if (state.winState) return false
    setPlayerChoice(e.target.innerHTML);
    setComputerChoice();
    getWinner();
    getScore();
    render();
}

/* ----- change ----- */
function setPlayerChoice(choice) {
    state.playerChoice = choice;
}

function setComputerChoice() {
    const random = Math.floor(Math.random() * choices.length);
    state.computerChoice = choices[random];
}

function getWinner() {
    let pChoice = state.playerChoice;
    let cChoice = state.computerChoice;
    if (pChoice === cChoice) {
        state.winner = 'Draw'
    } else if (
        pChoice === 'Rock' && cChoice === 'Scissors' ||
        pChoice === 'Paper' && cChoice === 'Rock' ||
        pChoice === 'Scissors' && cChoice === 'Paper'
    ) {
        state.playerScore++
        state.winner = ''
    } else {
        state.computerScore++
        state.winner = ''
    }
}

function getScore() {
    let pScore = state.playerScore;
    let cScore = state.computerScore;
    if (pScore === 3) {
        state.winner = 'Player Wins';
        state.winState = true
    } else if (
        cScore === 3
    ) {
        state.winner = 'Computer Wins'
        state.winState = true
    }
}

/* ----- render ----- */
function render() {
    references.main.innerHTML = `${state.playerChoice} vs ${state.computerChoice}`;
    references.log.innerHTML = state.winner;
    references.score.innerHTML = `${state.playerScore} - ${state.computerScore}`;
}

/* ----- Create button in Javascript ----- */
function init() {
    state = Object.assign({}, originalState);
    references.button.innerHTML = '';
    choices.forEach(function (choice) {
        const button = document.createElement('button');
        button.innerHTML = choice;
        button.id = `btn-${choice}`
        button.addEventListener('click', onClick)
        references.button.appendChild(button);
    })
    render();
}

init();