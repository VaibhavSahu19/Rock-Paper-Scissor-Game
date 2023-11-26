let score = {
  wins:0, 
  losses:0,
  draws:0
};
// let score = JSON.parse(localStorage.getItem('score')) || {
//   wins:0, 
//   losses:0,
//   draws:0
// };

/*
if(!score){
score = {
  wins:0, 
  losses:0,
  draws:0
};
}  
*/

function playGame(playerMove){
let res='';
let ans=pickComputerMove();


if(playerMove === 'Rock'){
  if(ans==='rock'){
    res='Tie';
  }else if(ans==='paper'){
    res='You Lost';
  }
  else{
    res='You won';
  }
}

else if(playerMove === 'Paper'){
  if(ans==='rock'){
    res='You Won';
  }else if(ans==='paper'){
    res='Tie';
  }
  else{
    res='You Lost';
  }
}

else{
  if(ans==='rock'){
    res='You Lost';
  }else if(ans==='paper'){
    res='You Won';
  }
  else{
    res='Tie';
  }
}

if(res ==='You Won'){
  score.wins+=1;
}else if(res ==='You Lost'){
  score.losses+=1;
}else{
  score.draws+=1;
}

localStorage.setItem('score',JSON.stringify(score));

updateScoreElement();
document.querySelector('.js-result')
.innerHTML = `${res}`;

document.querySelector('.js-move')
  .innerHTML = ` You 
<img class="move-icon" src="./Images/${playerMove}-emoji.png" alt="">
<img class="move-icon" src="./Images/${ans}-emoji.png" alt="">
Computer`;
}

function updateScoreElement(){
  document.querySelector('.js-score')
  .innerHTML = `\nWin: ${score.wins}, Losses: ${score.losses}, Ties: ${score.draws}`;
}


function pickComputerMove(){
const randomNumber=Math.random(); //this function generates a random number 'n' such that 0<= n<1
let ans='';

if(randomNumber>=0 && randomNumber<1/3){
  ans='rock';
}else if(randomNumber>=1/3 && randomNumber<=2/3){
  ans='paper';
}else{
  ans='scissor'
}
return ans;
}

let isAutoplaying = false;
let intervalID;
function autoplay(){
  if(!isAutoplaying){
      intervalID = setInterval(function(){
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);
    isAutoplaying = true;
    document.querySelector('.autoplay-btn').innerHTML = 'Stop Play';
  }
  else{
    clearInterval(intervalID);
    isAutoplaying = false;
    document.querySelector('.autoplay-btn').innerHTML = 'Auto Play';
  }
}