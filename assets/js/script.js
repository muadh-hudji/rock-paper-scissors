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
 * The function creates a choice for the computer.
 * Disabling other choices for the user except
 * playagain and reset. Give a different color
 * for choosed button from none choosed.
 */

function playGame(userChoice) {
    let compChoice = Math.floor(Math.random() * 5);
    document.getElementById(choices[userChoice]).style.backgroundColor = "green";
    // Disable other choices
    for(let i = 0; i < 5; i++){
        if(i == userChoice){

            continue;
        }
        document.getElementById(choices[i]).disabled = true;
        document.getElementById(choices[i]).style.backgroundColor = "red";
        document.getElementById(choices[i]).style.outline = "none";
    }
    calculateResult(userChoice, compChoice);
}

function calculateResult(userChoice, compChoice) {
    let result;
    if(userChoice === compChoice){
        result = "DRAW";
        displayRoundResult(compChoice, result);
    }
    if(choices[userChoice] === "rock"){
        if(choices[compChoice] === "paper"){
            result = "LOSE";
        }
        if(choices[compChoice] === "scissors"){
            result = "WIN";
        }
        if(choices[compChoice] === "lizard"){
            result = "WIN";
        }
        if(choices[compChoice] === "spock"){
            result = "LOSE";
        }
        displayRoundResult(compChoice, result);
    }
    if(choices[userChoice] === "paper"){
        if(choices[compChoice] === "rock"){
            result = "WIN";
        }
        if(choices[compChoice] === "scissors"){
            result = "LOSE";
        }
        if(choices[compChoice] === "lizard"){
            result = "LOSE";
        }
        if(choices[compChoice] === "spock"){
            result = "WIN";
        }
        displayRoundResult(compChoice, result);
    }
    if(choices[userChoice] === "scissors"){
        if(choices[compChoice] === "paper"){
            result = "WIN";
        }
        if(choices[compChoice] === "rock"){
            result = "LOSE";
        }
        if(choices[compChoice] === "lizard"){
            result = "WIN";
        }
        if(choices[compChoice] === "spock"){
            result = "LOSE";
        }
        displayRoundResult(compChoice, result);
    }
    if(choices[userChoice] === "lizard"){
        if(choices[compChoice] === "paper"){
            result = "WIN";
        }
        if(choices[compChoice] === "rock"){
            result = "LOSE";
        }
        if(choices[compChoice] === "scissors"){
            result = "LOSE";
        }
        if(choices[compChoice] === "spock"){
            result = "WIN";
        }
        displayRoundResult(compChoice, result);
    }
    if(choices[userChoice] === "spock"){
        if(choices[compChoice] === "paper"){
            result = "LOSE";
        }
        if(choices[compChoice] === "rock"){
            result = "WIN";
        }
        if(choices[compChoice] === "scissors"){
            result = "WIN";
        }
        if(choices[compChoice] === "lizard"){
            result = "LOSE";
        }
        displayRoundResult(compChoice, result);
    }
    
}

function displayRoundResult() {

}

function changeScore() {
    
}

function playagain(){

}

function resetGame(){

}