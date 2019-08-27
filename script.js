// /* ----- Create your References to the HTML document ----- */
// const references = {
//     main: document.getElementById('mainSection'),
//     score: document.getElementById('scoreSection'),
//     button: document.getElementById('buttonSection'),
//     log: document.getElementById('logSection')
// }

// /* ----- Set default state of application ----- */
// const originalState = {
//     playerChoice: '',
//     computerChoice: '',
//     playerScore: 0,
//     computerScore: 0,
//     winner: '',
// }

// /* ----- Set your choices ----- */
// const choices = ['Rock', 'Paper', "Scissors"]

// /* ----- Create buttons in Javascript for each item in the array ----- */
// choices.forEach(function (choice) {
//     const button = document.createElement('button');
//     button.innerHTML = choice;
//     button.id = `btn-${choice}` 
//     button.addEventListener('click', handleClick)
//     references.button.appendChild(button);
// })

// /* ----- Create event handlers ----- */
// function handleClick(e) {
//     setPlayerChoice(e.target.innerHTML);
// }

// /* ----- Set Player Choice ----- */
// function setPlayerChoice(e) {
//     const logP = document.createElement('p')
//     logP.innerHTML = e.target.innerHTML
//     references.log.innerHTML = 'You Chose:';
//     references.log.appendChild(logP);
// }

// /* ----- Set Computer Choice ----- */
// function setComputerChoice() {
//     const randomNumber = Math.floor(Math.random() * 3)
//     switch (randomNumber) {
//         case 0: 
//             computerChoice = rock;
//             break;
//         case 1: 
//             computerChoice = paper;
//             break;
//         case 2: 
//             computerChoice = scissors;
//             break;
//     }
// }


// /* ----- Create your actions for player and computer ----- */
// /* ----- Create scoring function ----- */
// /* ----- Create round function ----- */
// /* ----- Create reset function ----- */
// /* ----- Create a render function that prints the changes on screen ----- */
// /* -----  ----- */