let player1Score = 0;
let player2Score = 0;
let turns = 0;
let mark="X";
let block = document.querySelectorAll("section > div");
let reset = document.getElementById('play-again');
let player1ScoreArea = document.getElementById('player1')
let player2ScoreArea = document.getElementById('player2')
let characterSelector = document.getElementsByClassName('board-spot')


//Player's scores
player1ScoreArea.textContent = player1Score;
player2ScoreArea.textContent = player2Score;

//––––––––––––––– Add Event Listeners for the board –––––––––––––––

block[0].addEventListener("click", function (e) {
  if(!block[0].used){
  if(e.target.tagName.toLowerCase() == "div"){
    e.target.querySelector("span").textContent = mark;
  } else if(e.target.tagName.toLowerCase() == "span") {
  e.target.textContent = mark;
  }
  turns++;
  block[0].used = true;
  block[0].mark = mark;
  if(block[0].mark == "O"){
    e.target.querySelector('span').style.color = "var(--red)"
  } else if(block[0].mark == "X"){
    e.target.querySelector('span').style.color = "var(--blue)"
  }
  changeTurn(mark)
}
else {
  console.log('already clicked ')
}
console.log(block[0].mark)
})

block[1].addEventListener("click", function (e) {
  if(!block[1].used){
  if(e.target.tagName.toLowerCase() == "div"){
    e.target.querySelector("span").textContent = mark;
  } else if(e.target.tagName.toLowerCase() == "span") {
  e.target.textContent = mark;
  }
  turns++;
  block[1].used = true;
  block[1].mark = mark;
  if(block[1].mark == "O"){
    e.target.querySelector('span').style.color = "var(--red)"
  } else if(block[1].mark == "X"){
    e.target.querySelector('span').style.color = "var(--blue)"
  }
  changeTurn(mark)
}
else {
  console.log('already clicked ')
}
})

block[2].addEventListener("click", function (e) {
  if(!block[2].used){
  if(e.target.tagName.toLowerCase() == "div"){
    e.target.querySelector("span").textContent = mark;
  } else if(e.target.tagName.toLowerCase() == "span") {
  e.target.textContent = mark;
  }
  turns++;
  block[2].used = true;
  block[2].mark = mark;
  if(block[2].mark == "O"){
    e.target.querySelector('span').style.color = "var(--red)"
  } else if(block[2].mark == "X"){
    e.target.querySelector('span').style.color = "var(--blue)"
  }
  changeTurn(mark)
}
else {
  console.log('already clicked ')
}
})

block[3].addEventListener("click", function (e) {
  if(!block[3].used){
  if(e.target.tagName.toLowerCase() == "div"){
    e.target.querySelector("span").textContent = mark;
  } else if(e.target.tagName.toLowerCase() == "span") {
  e.target.textContent = mark;
  }
  turns++;
  block[3].used = true;
  block[3].mark = mark;
  if(block[3].mark == "O"){
    e.target.querySelector('span').style.color = "var(--red)"
  } else if(block[3].mark == "X"){
    e.target.querySelector('span').style.color = "var(--blue)"
  }
  changeTurn(mark)
}
else {
  console.log('already clicked ')
}
})

block[4].addEventListener("click", function (e) {
  if(!block[4].used){
  if(e.target.tagName.toLowerCase() == "div"){
    e.target.querySelector("span").textContent = mark;
  } else if(e.target.tagName.toLowerCase() == "span") {
  e.target.textContent = mark;
  }
  turns++;
  block[4].used = true;
  block[4].mark = mark;
  if(block[4].mark == "O"){
    e.target.querySelector('span').style.color = "var(--red)"
  } else if(block[4].mark == "X"){
    e.target.querySelector('span').style.color = "var(--blue)"
  }
  changeTurn(mark)
}
else {
  console.log('already clicked ')
}
})

block[5].addEventListener("click", function (e) {
  if(!block[5].used){
  if(e.target.tagName.toLowerCase() == "div"){
    e.target.querySelector("span").textContent = mark;
  } else if(e.target.tagName.toLowerCase() == "span") {
  e.target.textContent = mark;
  }
  turns++;
  block[5].used = true;
  block[5].mark = mark;
  if(block[5].mark == "O"){
    e.target.querySelector('span').style.color = "var(--red)"
  } else if(block[5].mark == "X"){
    e.target.querySelector('span').style.color = "var(--blue)"
  }
  changeTurn(mark)
}
else {
  console.log('already clicked ')
}
})

block[6].addEventListener("click", function (e) {
  if(!block[6].used){
  if(e.target.tagName.toLowerCase() == "div"){
    e.target.querySelector("span").textContent = mark;
  } else if(e.target.tagName.toLowerCase() == "span") {
  e.target.textContent = mark;
  }
  turns++;
  block[6].used = true;
  block[6].mark = mark;
  if(block[6].mark == "O"){
    e.target.querySelector('span').style.color = "var(--red)"
  } else if(block[6].mark == "X"){
    e.target.querySelector('span').style.color = "var(--blue)"
  }
  changeTurn(mark)
}
else {
  console.log('already clicked ')
}
})

block[7].addEventListener("click", function (e) {
  if(!block[7].used){
  if(e.target.tagName.toLowerCase() == "div"){
    e.target.querySelector("span").textContent = mark;
  } else if(e.target.tagName.toLowerCase() == "span") {
  e.target.textContent = mark;
  }
  turns++;
  block[7].used = true;
  block[7].mark = mark;
  if(block[7].mark == "O"){
    e.target.querySelector('span').style.color = "var(--red)"
  } else if(block[7].mark == "X"){
    e.target.querySelector('span').style.color = "var(--blue)"
  }
  changeTurn(mark)
}
else {
  console.log('already clicked ')
}
})

block[8].addEventListener("click", function (e) {
  if(!block[8].used){
  if(e.target.tagName.toLowerCase() == "div"){
    e.target.querySelector("span").textContent = mark;
  } else if(e.target.tagName.toLowerCase() == "span") {
  e.target.textContent = mark;
  }
  turns++;
  block[8].used = true;
  block[8].mark = mark;
  if(block[8].mark == "O"){
    e.target.querySelector('span').style.color = "var(--red)"
  } else if(block[8].mark == "X"){
    e.target.querySelector('span').style.color = "var(--blue)"
  }
  changeTurn(mark)
}
else {
  console.log('already clicked ')
}
})

//––––––––––––––––––––––––– Functions –––––––––––––––––––––––––


//Reset button
reset.addEventListener("click", function (){
  for(let i=0; i < 9; i++){
    block[i].used = false;
    block[i].mark ="";
    block[i].querySelector('span').textContent = " ";
  }
  mark = "X"
})

//Keep track of turns and alternating the sign
const changeTurn = (currentSign) => {
  threeInARow()
if(currentSign == "X"){
  mark = "O"
} else if (currentSign == "O"){
  mark = "X"
}
}

//function to see if they have three in a row
const threeInARow = () => {
  if(block[0].mark == block[1].mark && block[2].mark == block[1].mark && block[0].mark == block[1].mark){
    if(block[0].used == true && block[1].used == true && block[2].used == true){
    weHaveAWinner(true)
    }
  } else if (block[0].mark == block[3].mark && block[3].mark == block[6].mark && block[0].mark == block[6].mark){
    if(block[0].used == true && block[3].used == true && block[6].used == true){
      weHaveAWinner(true)
      }
  } else if (block[0].mark == block[4].mark && block[4].mark == block[8].mark && block[0].mark == block[8].mark){
    if(block[0].used == true && block[4].used == true && block[8].used == true){
      weHaveAWinner(true)
      }
  } else if (block[2].mark == block[4].mark && block[4].mark == block[6].mark && block[2].mark == block[6].mark){
    if(block[2].used == true && block[4].used == true && block[6].used == true){
      weHaveAWinner(true)
      }
  } else if (block[3].mark == block[4].mark && block[4].mark == block[5].mark && block[3].mark == block[5].mark){
    if(block[3].used == true && block[4].used == true && block[5].used == true){
      weHaveAWinner(true)
      }
  } else if (block[6].mark == block[7].mark && block[7].mark == block[8].mark && block[6].mark == block[8].mark){
    if(block[6].used == true && block[7].used == true && block[8].used == true){
      weHaveAWinner(true)
      }
  } else if (block[1].mark == block[4].mark && block[4].mark == block[7].mark && block[1].mark == block[7].mark){
    if(block[1].used == true && block[4].used == true && block[7].used == true){
      weHaveAWinner(true)
      }
  } else if (block[2].mark == block[5].mark && block[5].mark == block[8].mark && block[2].mark == block[8].mark){
    if(block[2].used == true && block[5].used == true && block[8].used == true){
      weHaveAWinner(true)
      } 
  } else {
    weHaveAWinner(false)
  }
}

const weHaveAWinner = (win) => {
if(win){
  if(mark == "X"){
    console.log('player one is the winner')
    player1Score++;
  } else if( mark=="O"){
    console.log("player two is the winner")
    player2Score++;
  }
  block.forEach(square => {
    square.used = true
  });
  player1ScoreArea.textContent = player1Score;
  player2ScoreArea.textContent = player2Score;
}

}





