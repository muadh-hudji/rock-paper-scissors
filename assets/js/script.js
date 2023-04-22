/**
 * Declare constants that needed in the script
 */

const choices = ["rock", "paper", "scissors", "lizard", "spock"];
const buttons = document.getElementsByClassName('btn');

/**
 * Add event listener to all button choice of the game
 */

for(let button of buttons){
    button.addEventListener("click", function(){
        if(this.getAttribute("data-choice") < 5){
            let userChoice = this.getAttribute("data-choice");
            playGame(userChoice);
        }
    })
}

/**
 * The function creates a choice for the computer
 * and comparing it with the choice of the user.
 * Disabling other choices for the user except
 * playagain and reset.
 */

function playGame(userChoice) {
    let compChoice = Math.floor(Math.random() * 5);
    document.getElementsByClassName("rock").style.backgroundColor = "green";
    // Disable other choices
    for(let i = 0; i < 5; i++){
        if(i === userChoice){

            continue;
        }
        document.getElementsByClassName(choices[i]).disabled = true;
    }

}

function displayComputerChoice() {

}

function displayRoundResult() {

}

function changeScore() {
    
}

function resetGame(){

}