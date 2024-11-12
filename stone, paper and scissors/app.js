let userScore = 0;
let compScore = 0;
 
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const rndIdx = Math.floor(Math.random() * 3);
    return options[rndIdx];

}

const drawGame = () => {
    msg.innerText = "game was draw, play again/😜";
    msg.style.backgroundColor = "#081b31";
} 

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `you win your ${userChoice} beats ${compChoice}👏`;
        msg.style.backgroundColor = "green";

    }else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `you lose ${compChoice} beats your ${userChoice}😌`;
        msg.style.backgroundColor = "red";

    }
}

const playGame = (userChoice,) => {
    console.log("user choice = ", userChoice );
    //generate computer choices;
    const compChoice = genCompChoice();
    console.log("comp choice =", compChoice );

    if(userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            //scissors, paper
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper") {
            //rock. scissors
            userWin = compChoice === "scissors" ? false : true;
        } else if(userChoice === "scissors") {
            //rock, paper
            userWin = compChoice === "rock" ? false : true; 
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    }) 

})