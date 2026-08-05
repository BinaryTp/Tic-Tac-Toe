let boxes = document.querySelectorAll('.box');
let resetBtn = document.getElementById('.reset');

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

boxes.forEach((box) => {
    box.addEventListener('click', () => {
      console.log('Box clicked');
      if(turnO) {
        box.innerText = 'O';
        turnO = false;
      } else {
        box.innerText = 'X';
        turnO = true;
      }
      box.disabled = true;

      checkWinner();
    })
});

const checkWinner = () => {
  for(combo of winningCombos) {
    console.log(combo[0], combo[1], combo[2]);
    console.log(boxes[combo[0]], boxes[combo[1]], boxes[combo[2]]);
 }}