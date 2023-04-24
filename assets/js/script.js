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
        } else if(this.getAttribute("data-choice") == 5){
            playagain();
        } else if(this.getAttribute("data-choice") == 6){
            resetGame();
        }
    });
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
            document.getElementById(choices[i]).disabled = true;
            continue;
        }
        document.getElementById(choices[i]).disabled = true;
        document.getElementsByClassName("btn")[i].style.backgroundColor = "red";
        document.getElementById(choices[i]).classList.remove("btn--btn");
    }
    calculateResult(userChoice, compChoice);
}

/**
 * The function compare the choices and
 * produce a result.
 */

function calculateResult(userChoice, compChoice) {
    let result;
    if(userChoice == compChoice){
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

/**
 * Function to display the choice of the computer
 * and roundresult.
 */

function displayRoundResult(compChoice, result) {
    document.getElementById('computer-choice').innerHTML = `<img src="assets/images/${choices[compChoice]}-hand.png" width="110" height="80">`;

    if(result === "DRAW"){
        document.getElementById('round-result').innerHTML = `${result}`;
        document.getElementById('round-result').style.backgroundColor = "yellow";
    } else if(result === "WIN") {
        document.getElementById('round-result').innerHTML = `YOU ${result}`;
        document.getElementById('round-result').style.backgroundColor = "green";
    } else {
        document.getElementById('round-result').innerHTML = `YOU ${result}`;
        document.getElementById('round-result').style.backgroundColor = "red";
    }
    changeScore(result);
}

/**
 * Increment score for win and lose
 */

function changeScore(result) {
    if(result === "WIN") {
        let oldwin = parseInt(document.getElementById('win').innerText);
        document.getElementById('win').innerText = ++oldwin;
    }
    if(result === "LOSE") {
        let oldlose = parseInt(document.getElementById('lose').innerText);
        document.getElementById('lose').innerText = ++oldlose;
    }

}

/**
 * Reset diabled buttons and start a new round
 */

function playagain(){
    for(let i = 0; i < 5; i++) {
        document.getElementById(choices[i]).disabled = false;
        document.getElementById(choices[i]).classList.add("btn--btn");
        document.getElementsByClassName("btn")[i].style.backgroundColor = "white";
    }
    document.getElementById('computer-choice').innerHTML = `Computer Choice`;
    document.getElementById('round-result').innerHTML = `Result`;
    document.getElementById('round-result').style.backgroundColor = "#e4e4e4";
}

/**
 * Reset score and start a new game
 */

function resetGame(){
    for(let i = 0; i < 5; i++) {
        document.getElementById(choices[i]).disabled = false;
        document.getElementById(choices[i]).classList.add("btn--btn");
        document.getElementsByClassName("btn")[i].style.backgroundColor = "white";
    }
    document.getElementById('computer-choice').innerHTML = `Computer Choice`;
    document.getElementById('round-result').innerHTML = `Result`;
    document.getElementById('round-result').style.backgroundColor = "#e4e4e4";

    document.getElementById('win').innerText = 0;
    document.getElementById('lose').innerText= 0;

}