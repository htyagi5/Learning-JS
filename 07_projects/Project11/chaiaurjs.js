const board=document.querySelector('.board')
let key="O";

const it1=document.querySelector('.item1')
const it2=document.querySelector('.item2')
const it3=document.querySelector('.item3')
const it4=document.querySelector('.item4')
const it5=document.querySelector('.item5')
const it6=document.querySelector('.item6')
const it7=document.querySelector('.item7')
const it8=document.querySelector('.item8')
const it9=document.querySelector('.item9')

let Xsound = new Audio('Xsound.mp3'); // Replace with your sound file
let Osound = new Audio('Osound.mp3'); // Replace with your sound file

it1.addEventListener('click',(e)=>{
    // alert('clicked box1');
    key=key==="X"?"O":"X"
    if(key=='X')
    Xsound.play();
   else
   Osound.play()
    
     it1.textContent=key;  
})
it2.addEventListener('click',(e)=>{
    // alert('clicked');
    key=key==="X"?"O":"X"
    if(key=='X')
        Xsound.play();
       else
       Osound.play()
    it2.textContent=key;  
      
})
it3.addEventListener('click',(e)=>{
    // alert('clicked');
    key=key==="X"?"O":"X"
    if(key=='X')
        Xsound.play();
       else
       Osound.play()
    it3.textContent=key;  

})
it4.addEventListener('click',(e)=>{
    // alert('clicked');
    key=key==="X"?"O":"X"
    if(key=='X')
        Xsound.play();
       else
       Osound.play()
    it4.textContent=key;  

})
it5.addEventListener('click',(e)=>{
    // alert('clicked');
    key=key==="X"?"O":"X"
    if(key=='X')
        Xsound.play();
       else
       Osound.play()
    it5.textContent=key;  

})
it6.addEventListener('click',(e)=>{
    // alert('clicked');
    key=key==="X"?"O":"X"
    if(key=='X')
        Xsound.play();
       else
       Osound.play()
    it6.textContent=key;  

})
it7.addEventListener('click',(e)=>{
    // alert('clicked');
    key=key==="X"?"O":"X"
    if(key=='X')
        Xsound.play();
       else
       Osound.play()
    it7.textContent=key;  

})
it8.addEventListener('click',(e)=>{
    // alert('clicked');
    key=key==="X"?"O":"X"
    if(key=='X')
        Xsound.play();
       else
       Osound.play()
    it8.textContent=key;  

})
it9.addEventListener('click',(e)=>{
    // alert('clicked');
    key=key==="X"?"O":"X"
    if(key=='X')
        Xsound.play();
       else
       Osound.play()
    it9.textContent=key;  

})
window.onload = function () {
    let Start = new Audio("General.mp3");
    Start.play().catch(() => {
      console.log("Autoplay blocked. Click anywhere to play sound.");
      document.addEventListener("click", () => Start.play(), { once: true });
    }); 
  };

let game=setInterval(()=>{
   if(it1.textContent=='X' && it2.textContent=='X'  && it3.textContent=='X'){
       GameOver();
    alert('Game Over X wins');
}
   if(it1.textContent=='X' && it5.textContent=='X'  && it9.textContent=='X'){
       GameOver();
    alert('Game Over X wins');
}
   if(it1.textContent=='X' && it4.textContent=='X'  && it7.textContent=='X'){
       GameOver();
    alert('Game Over X wins');
}
if(it2.textContent=='X' && it5.textContent=='X'  && it8.textContent=='X'){
    GameOver();
    alert('Game Over X wins');
}
if(it3.textContent=='X' && it6.textContent=='X'  && it9.textContent=='X'){
    GameOver();
    alert('Game Over X wins');
}
if(it4.textContent=='X' && it5.textContent=='X'  && it6.textContent=='X'){
    GameOver();
    alert('Game Over X wins');
}
if(it7.textContent=='X' && it8.textContent=='X'  && it9.textContent=='X'){
    GameOver();
    alert('Game Over');
}
if(it3.textContent=='X' && it5.textContent=='X'  && it7.textContent=='X'){
    GameOver();
    alert('Game Over X wins');
}
   if(it1.textContent=='O' && it2.textContent=='O'  && it3.textContent=='O'){
       GameOver();
    alert('Game Over O team win');

}
   if(it1.textContent=='O' && it5.textContent=='O'  && it9.textContent=='O'){
       GameOver();
    alert('Game Over O team win');

}
   if(it1.textContent=='O' && it4.textContent=='O'  && it7.textContent=='O'){
       GameOver();
    alert('Game Over O team win');

}
if(it2.textContent=='O' && it5.textContent=='O'  && it8.textContent=='O'){
    GameOver();
    alert('Game Over O team win');

}
if(it3.textContent=='O' && it6.textContent=='O'  && it9.textContent=='O'){
    GameOver();
    alert('Game Over O team win');

}
if(it4.textContent=='O' && it5.textContent=='O'  && it6.textContent=='O'){
    GameOver();
    alert('Game Over O team win');

}
if(it7.textContent=='O' && it8.textContent=='O'  && it9.textContent=='O'){
    GameOver();
    alert('Game Over O team win');

}
if(it3.textContent=='O' && it5.textContent=='O'  && it7.textContent=='O'){
    GameOver();
    alert('Game Over O team win');

}
},100)
function GameOver(){
    let gameOver = new Audio('gameOver.mp3'); // Replace with your sound file
    gameOver.play()
    
    clearInterval(game)
}

//or =>By GPT
// const board = document.querySelector('.board');
// let key = "O"; // First move will be X
// let gameEnded = false;

// const it1 = document.querySelector('.item1');
// const it2 = document.querySelector('.item2');
// const it3 = document.querySelector('.item3');
// const it4 = document.querySelector('.item4');
// const it5 = document.querySelector('.item5');
// const it6 = document.querySelector('.item6');
// const it7 = document.querySelector('.item7');
// const it8 = document.querySelector('.item8');
// const it9 = document.querySelector('.item9');

// const cells = [it1, it2, it3, it4, it5, it6, it7, it8, it9];

// let Xsound = new Audio('Xsound.mp3');
// let Osound = new Audio('Osound.mp3');
// let gameOverSound = new Audio('gameOver.mp3');
// let Start = new Audio('General.mp3');

// // Play background music on load
// window.onload = function () {
//   Start.play().catch(() => {
//     console.log("Autoplay blocked. Click to enable sound.");
//     document.addEventListener("click", () => Start.play(), { once: true });
//   });
// };

// // Handle cell clicks
// cells.forEach(cell => {
//   cell.addEventListener('click', () => {
//     if (cell.textContent !== "" || gameEnded) return;

//     key = key === "X" ? "O" : "X";
//     cell.textContent = key;
//     cell.style.color = "black";
//     cell.style.fontSize = "100px";

//     if (key === "X") {
//       Xsound.play();
//     } else {
//       Osound.play();
//     }

//     if (checkWin(key)) {
//       gameEnded = true;
//       Start.pause();
//       Start.currentTime = 0;
//       gameOverSound.play();
//       setTimeout(() => alert(`Game Over: ${key} wins!`), 100);
//     } else if (checkDraw()) {
//       gameEnded = true;
//       Start.pause();
//       Start.currentTime = 0;
//       gameOverSound.play();
//       setTimeout(() => alert("It's a draw!"), 100);
//     }
//   });
// });

// // Win check logic
// function checkWin(player) {
//   const winCombos = [
//     [it1, it2, it3],
//     [it4, it5, it6],
//     [it7, it8, it9],
//     [it1, it4, it7],
//     [it2, it5, it8],
//     [it3, it6, it9],
//     [it1, it5, it9],
//     [it3, it5, it7]
//   ];

//   return winCombos.some(combo =>
//     combo.every(cell => cell.textContent === player)
//   );
// }

// // Draw check
// function checkDraw() {
//   return cells.every(cell => cell.textContent !== "");
// }

// // Reset game state
// function resetGame() {
//   cells.forEach(cell => {
//     cell.textContent = "";
//   });
//   key = "O"; // So next turn starts with X
//   gameEnded = false;

//   Start.currentTime = 0;
//   Start.play().catch(() => {
//     document.addEventListener("click", () => Start.play(), { once: true });
//   });
// }
