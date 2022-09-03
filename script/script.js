function computerPlay() {
    let random_number = Math.floor(Math.random() * 3);
    let random_rock_paper_scissor;
    if(random_number == 0) {
        random_rock_paper_scissor = 'Rock';
    }
    else if(random_number == 1) {
        random_rock_paper_scissor = 'Paper';
    }
    else if(random_number == 2) {
        random_rock_paper_scissor = 'Scissor';
    }
    else {
        console.log("Error!");
    }
    //console.log(random_rock_paper_scissor);
    return random_rock_paper_scissor;
}
function playerPlay() {
    let playerChoice = prompt("Type your choice: (rock, paper or scissor)");
    return playerChoice;
}
//computerPlay();
let playerScore = 0, computerScore = 0;
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();
    console.log(`player selection: ${playerSelection}, computer selection: ${computerSelection}`);
    //Player chose the same as computer
    if(playerSelection === computerSelection) {
        console.log("Tie");
        playRound(playerPlay(), computerPlay());
    }
    //Player chose rock
    else if(playerSelection == 'ROCK') {
        if(computerSelection == 'PAPER') {
            console.log("You lost, paper beats rock");
            computerScore++;
        }
        else if(computerSelection == 'SCISSOR') {
            console.log("You won, rock beats scissor");
            playerScore++;
        }
        else {
            console.log("Error!");
        }
    }
    //Player chose paper
    else if(playerSelection == 'PAPER') {
        if(computerSelection == 'ROCK') {
            console.log("You won, paper beats rock");
            playerScore++;
        }
        else if(computerSelection == 'SCISSOR') {
            console.log("You lost, scissor beats paper");
            computerScore++;
        }
        else {
            console.log("Error!");
        }
    }
    //Player chose scissor
    else if(playerSelection == 'SCISSOR') {
        if(computerSelection == 'ROCK') {
            console.log("You lost, rock beats scissor");
            computerScore++;
        }
        else if(computerSelection == 'PAPER') {
            console.log("You won, scissor beats paper");
            playerScore++;
        }
        else {
            console.log("Error!");
        }
    }
    //Catch errors
    else {
        console.log("Error!");
        playRound(playerPlay(), computerPlay());
    }
    return playerScore, computerScore;
}
//const playerSelection = 'rock';
//const computerSelection = computerPlay();
//playRound(playerSelection, computerSelection);
function game() {
    for(let i = 0; i < 5; i++) {
        const playerSelection = playerPlay();
        const computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
    }
    console.log(`player score: ${playerScore}, computer score: ${computerScore}`);
    if(playerScore > computerScore) {
        console.log("Congrats! You won!!");
    }
    else if(computerScore > playerScore) {
        console.log("You lost, try again!");
    }
    else {
        console.log("Error!");
    }
}
game();