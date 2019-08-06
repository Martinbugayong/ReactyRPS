const references = {
    main: document.getElementById('mainSection'),
    score: document.getElementById('scoreSection'),
    button: document.getElementById('buttonSection'),
    log: document.getElementById('logSection')
}

const choices = ['Rock', 'Paper', "Scissors"]

/* ----- Create buttons in Javascript for each item in the array ----- */
choices.forEach(function (choice) {
    const button = document.createElement('button');
    button.innerHTML = choice;
    button.id = `btn-${choice}` 
    button.addEventListener('click', handleClick)
    references.button.appendChild(button);
})

/* ----- Create event handlers ----- */
function handleClick(e) {
    // const log = e.target.innerHTML
    const logP = document.createElement('p')
    logP.innerHTML = e.target.innerHTML
    references.log.innerHTML = '';
    references.log.appendChild(logP);

}

// const playerChoice 
function setPlayerChoice(){
    handleClick()
}


/* ----- Set default state of application ----- */
const defaultState = {
    playerChoice: '',
    cpuChoice: '',
}

/* ----- Set Player Choice ----- */

/* ----- Create your actions for player and computer ----- */
/* ----- Create scoring function ----- */
/* ----- Create round function ----- */
/* ----- Create reset function ----- */
/* ----- Create a render function that prints the changes on screen ----- */
/* -----  ----- */