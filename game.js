let boxes = document.querySelectorAll(".box");
console.log("boxes", boxes);
let reset = document.querySelector(".Reset");
console.log("reset", reset);
let newGameBtn = document.querySelector(".newgame");
let msgContainer = document.querySelector(".winner-container");
let msgWinner = document.querySelector(".msg");
let drawC = document.querySelector(".draw")
let turnO = true; 
let count = 0;
let winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked");

    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
  count++;
    let isWinner=checkWinner();
    if(count==9 && !isWinner){
        console.log("draw")
        draw();
    }
  });
});


let draw =() =>{
    msgWinner.innerText="";
    drawC.innerText=`this game is draw ${count}`
    msgContainer.classList.remove("hide");
    disableBoxes();

}

const resetbtn = () => {
   turnO = true;
   count=0;
  enableBoxes();
  msgContainer.classList.add("hide");
};
const showWinner = (winner) => {
  msgWinner.innerText = `winner is ${winner}`;
  drawC.innerText="";
    msgContainer.classList.remove("hide");
  disableBoxes();
};

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled= false;
    box.innerText = "";
  }
};
const checkWinner = () => {
  for (let patterns of winPatterns) {
    let pos1val = boxes[patterns[0]].innerText;
    let pos2val = boxes[patterns[1]].innerText;
    let pos3val = boxes[patterns[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
     
      if (pos1val === pos2val && pos2val === pos3val) {
        console.log("winner", pos1val);
        showWinner(pos1val);
        return true;
      }
    }
  }
  return false;
};
newGameBtn.addEventListener("click", resetbtn);
reset.addEventListener("click", resetbtn);
