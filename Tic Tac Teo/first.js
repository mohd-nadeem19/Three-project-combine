let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turnO = true; //playerX, playerO
let gameActive = true;


const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (gameActive && box.innerText === "") {
        if(turnO) {
            //playerO
            box.innerText = "O"
            turnO = false;
        } else {
            //playerX
            box.innerText = "X";
            turnO = true;

        }

        checkWinner ();

        }
    });
});

const enableBoxes = () => {
    for( let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulation, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    gameActive = false;
}

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1vl = boxes[pattern[0]].innerText;
        let pos2vl = boxes[pattern[1]].innerText;
        let pos3vl = boxes[pattern[2]].innerText;

        if (pos1vl != "" && pos2vl != "" && pos3vl != "") {
            if (pos1vl === pos2vl && pos2vl === pos3vl) {
                showWinner(pos1vl);
            }
        }
    }
}

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);




