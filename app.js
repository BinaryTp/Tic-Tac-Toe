let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector(".reset");
let newGameBtn = document.querySelector(".newgame");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true; 

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const resetGame = () => {
  turnO = true;
  enableboxes();
  msgContainer.classList.add('hide');
};

boxes.forEach((box) => {
    box.addEventListener('click', () => {
      if (turnO) {
      box.innerText = "O";
      box.classList.add("o");
      turnO = false;
      } 
      else {
      box.innerText = "X";
      box.classList.add("x");
      turnO = true;
      }
      box.disabled = true;

      checkWinner();
    })
});


const disableboxes = () => {
  for(let box of boxes) {
    box.disabled = true;
  }
};

const enableboxes = () => {
  for(let box of boxes) {
    box.disabled = false;
    box.innerText = '';
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations! Winner is ${winner}`;
  msgContainer.classList.remove('hide');
  disableboxes();
}

const checkWinner = () => {
  for(combo of winningCombos) {
    let pos1value = boxes[combo[0]].innerText;
    let pos2value = boxes[combo[1]].innerText;
    let pos3value = boxes[combo[2]].innerText;

    if(pos1value !== '' &&  pos2value !== '' &&  pos3value !== '') {
      if(pos1value === pos2value && pos2value === pos3value) {
        showWinner(pos1value);
      }
    }
  }
};


newGameBtn.addEventListener('click', resetGame);
resetBtn.addEventListener('click', resetGame);