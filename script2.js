/* ----- references ----- */
// Object that refers to the id's in the DOM
const references = {
    main: document.getElementById('mainSection'),
    score: document.getElementById('scoreSection'),
    button: document.getElementById('buttonSection'),
    log: document.getElementById('logSection')
}

/* ----- state ----- */
// Object that contains the default state of the game
const originalState = { 
    playerChoice: 'Player Choice',
    computerChoice: 'Computer Choice',
    playerScore: 0,
    computerScore: 0,
    winState: false,
    winner: ''
}

// When init function runs, object assign applies
let state; 

/* ----- Set your choices ----- */
// Choices for the buttons in an array
const choices = ['Rock', 'Paper', "Scissors"]

/* ----- Action ----- */
// Function that handles which function gets called when you click a button
// Function that takes an event(click) 
function onClick(e) { 
    if (state.winState) return false // Condition in to prevent game from continuing after the player or computer wins
    // Call functions below, setPlayerChoice, setComputerChoice, getWinner, getScore, render
    setPlayerChoice(e.target.innerHTML);
    setComputerChoice();
    getWinner();
    getScore();
    render(); // call render on click so changes get printed to the screen
}

// Function that renders original state to screen
function onClickReset(e) { 
    init(); // Function called to render the original state to the DOM
}

/* ----- change ----- */
// Functions that take the changes before they are rendered to the screen
function setPlayerChoice(choice) { 
    state.playerChoice = choice;
}

function setComputerChoice() { // Function that chooses computer's choice at random
    const random = Math.floor(Math.random() * choices.length); // using Math to determine the random selection by assigning a value (.00 - .99) if the number falls in a certain range a selection is chosen for the computer 
    state.computerChoice = choices[random]; // setting the computer's choice in state to the choices array at random
}

function getWinner() { // game logic based on choice.
    if (state.playerChoice === state.computerChoice) {
        state.winner = 'Draw'
    } else if (
        state.playerChoice === 'Rock' && state.computerChoice === 'Scissors' ||
        state.playerChoice === 'Paper' && state.computerChoice === 'Rock' ||
        state.playerChoice === 'Scissors' && state.computerChoice === 'Paper'
    ) {
        state.playerScore++
        state.winner = ''
    } else {
        state.computerScore++
        state.winner = ''
    }
}

function getScore() { // create score logic up to 3, then end the game.
    if (state.playerScore === 3) {
        state.winner = 'Player Wins';
        state.winState = true
    } else if (
        state.computerScore === 3
    ) {
        state.winner = 'Computer Wins'
        state.winState = true
    }
}

/* ----- render ----- */
function render() { // render will reset your objects keys
    references.main.innerHTML = `${state.playerChoice} vs ${state.computerChoice}`;
    references.score.innerHTML = `${state.playerScore} - ${state.computerScore}`;
    references.log.innerHTML = state.winner;
}

/* ----- Create button in Javascript ----- */
function init() { // initial function that runs
    state = Object.assign({}, originalState); // assigns 'let state' to have the originalState's keys, this allows for state.blah changes.
    references.button.innerHTML = ''; // the buttons get created as empty
    choices.forEach(function (choice) { // function that creates buttons
        const button = document.createElement('button'); // create the button
        button.innerHTML = choice; // with the buttons created, assign a choice in the array to one of those buttons. 
        button.id = `btn-${choice}` // gives the created buttons an ID
        button.addEventListener('click', onClick) // attaches an eventlistiner to the newly created button
        references.button.appendChild(button); // adds button to the button section of the DOM
    })
    /* ----- Create reset functionality ----- */
    const reset = document.createElement('button'); // create button
    reset.innerHTML = 'reset'; // assign innerHTML of button to 'reset
    reset.addEventListener('click', onClickReset); // attach an eventlistiner that calls the reset function 
    references.button.appendChild(reset); // add the button to the button section of the DOM
    render(); // call render to display all of the newly created elements to the DOM

}

init(); // This function runs first to initialize the beginning and set up the game. 