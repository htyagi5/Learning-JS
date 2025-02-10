let ground=document.querySelector('.ground');
let snakeBody=[];
let length=1;
//SNAKE body
let createSnake=()=>{
  for(let i=1;i<=length;i++){
let div=document.createElement('div')
div.className='cobra'
div.style.width='40px'
div.style.height='30px'
div.style.position='absolute'
div.style.borderRadius='20px'
div.style.backgroundColor='white'
let addText=document.createTextNode("hello")
div.appendChild(addText) 
div.style.color='red'
div.style.display='flex'
div.style.justifyContent='center'
// document.body.appendChild(div)
ground.appendChild(div)
snakeBody.push(div);
  }
}
createSnake();

// Add only 1 segment  as createSnake se naya pat add not inc by one
let addSegment = () => {
  let div = document.createElement('div');
  div.className = 'cobra';
  div.style.width = '40px';
  div.style.height = '30px';
  div.style.position = 'absolute';
  div.style.borderRadius = '20px';
  div.style.backgroundColor = 'white';
  div.style.color = 'red';
  div.style.display = 'flex';
  div.style.justifyContent = 'center';

  // Position new segment at the last segment's position
  let lastSegment = snakeBody[snakeBody.length - 1];
  div.style.left = lastSegment.style.left;
  div.style.top = lastSegment.style.top;

  ground.appendChild(div);
  snakeBody.push(div);
};

// Game Over
let GameOver = () => {          
          // Stop ALL movement
          gsap.killTweensOf(snakeBody[0]);  // Stop head movement
          clearInterval(followInterval);   // Stop body following

          // Optionally, display a "Game Over" message
          let gameOverText = document.createElement('div');
          gameOverText.innerText = "GAME OVER";
          gameOverText.style.position = "absolute";
          gameOverText.style.top = "50%";
          gameOverText.style.left = "50%";
          gameOverText.style.transform = "translate(-50%, -50%)";
          gameOverText.style.color = "red";
          gameOverText.style.fontSize = "30px";
          gameOverText.style.fontWeight = "bold";
          ground.appendChild(gameOverText);

          return ; // Exit once collision is detected
}



//Movement 
var direction;
var prevdir;
var pause=false;
document.addEventListener("keydown", (event) => {
  
  if (pause) return; // Stop movement if the game is over  
  // Kill existing animation before new movement
  gsap.killTweensOf(snakeBody[0]);

  // Prevent direct reversal of direction
  // if (
  //     (event.key === "ArrowRight" && direction !== "ArrowLeft") ||
  //     (event.key === "ArrowLeft" && direction !== "ArrowRight") ||
  //     (event.key === "ArrowUp" && direction !== "ArrowDown") ||
  //     (event.key === "ArrowDown" && direction !== "ArrowUp")
  // )
   {
      direction = event.key; // Update direction only if valid

      if((direction=="ArrowRight" && prevdir!="ArrowLeft"  && pause==false)||
      (direction=="ArrowLeft" && prevdir!="ArrowRight" && pause==false)||
      (direction=="ArrowUp" && prevdir!="ArrowDown" && pause==false)||  
      (direction=="ArrowDown" && prevdir!="ArrowUp" && pause==false)
    ){
      prevdir=direction;}
    else{
      gsap.killTweensOf(snakeBody[0]);  // Stop head movement

    }

      // Move the snake based on the new direction
      if (prevdir === "ArrowRight") {
          gsap.to(snakeBody[0], { x: "+=1500", duration: 10 });
      } else if (prevdir === "ArrowLeft") {
          gsap.to(snakeBody[0], { x: "-=1500", duration: 10 });
      } else if (prevdir === "ArrowUp") {
          gsap.to(snakeBody[0], { y: "-=1500", duration: 10 });
      } else if (prevdir === "ArrowDown") {
          gsap.to(snakeBody[0], { y: "+=1500", duration: 10 });
      }
  }
});
// Get the head's current position
let getHeadPosition = () => {
  let rect = snakeBody[0].getBoundingClientRect();
  return { x: rect.left, y: rect.top };
};

  //follow
  // Example usage
  // setInterval(() => {
    //   console.log(getHeadPosition()); // Prints the current position of the head
    // }, 2000);

    // function GameStop(){
    //   pause=true;
    //   return pause;
    // }
    let positions = []; // Store past positions of the head
    let delay = 3; // The delay between each segment following the previous one
    let followInterval=setInterval(() => {
      // GameStop()
      // console.log(pause)
      // console.log(prevdir)
        let headPos = getHeadPosition();
    
        // Store the current head position in the queue
        positions.unshift({ x: headPos.x, y: headPos.y });
        
        // Keep only necessary history to avoid excessive memory usage
        if (positions.length > snakeBody.length * delay) {
          positions.pop();
        }
        
        // Move each segment to the position of the previous one
        for (let i = 1; i < snakeBody.length; i++) {
          if (positions[i * delay]) {
                snakeBody[i].style.left = `${positions[i * delay].x}px`;
                snakeBody[i].style.top = `${positions[i * delay].y}px`;
            }
        }

  for (let i = 3; i < snakeBody.length; i++) { // Start from 1, not 0
      let rect = snakeBody[i].getBoundingClientRect();
      let bodyPos = { x: rect.left, y: rect.top };
       
      if (Math.abs(headPos.x - bodyPos.x) < 20 && Math.abs(headPos.y - bodyPos.y) < 20) {
          pause = true; // Stop the game
          console.log("Game Over!");
          GameOver();
      }
    }
    
    let head = snakeBody[0];
    let headRect = head.getBoundingClientRect();
    let groundRect = ground.getBoundingClientRect(); // Get play area bounds

    // Check if the new move will take the snake outside
    if (
        (prevdir === "ArrowRight" && headRect.right >= groundRect.right) ||
        (prevdir === "ArrowLeft" && headRect.left <= groundRect.left) ||
        (prevdir === "ArrowUp" && headRect.top <= groundRect.top) ||
        (prevdir === "ArrowDown" && headRect.bottom >= groundRect.bottom)
    ) {
      pause=true;
        GameOver(); // Stop movement if it's outside the boundary
    }

        // console.log(headPos.x,headPos.y)
    }, 20);

//     let positions = []; // Store past positions of the head
//     let delay = 3; // The delay between each segment following the previous one

//    let intervalId= setInterval(() => {
  //         // Get the head's current position
  //         let getHeadPosition = () => {
//             let rect = snakeBody[0].getBoundingClientRect();
//             return { x: rect.left, y: rect.top };
//         };
    
//         let headPos = getHeadPosition();
    
//         // Store the current head position in the queue
//         positions.unshift({ x: headPos.x, y: headPos.y });
    
//         // Keep only necessary history to avoid excessive memory usage
//         if (positions.length > snakeBody.length * delay) {
  //             positions.pop();
  //         }
  
  //         // Move each segment to the position of the previous one
  //         for (let i = 1; i < snakeBody.length; i++) {
    //             if (positions[i * delay]) {
//                 snakeBody[i].style.left = `${positions[i * delay].x}px`;
//                 snakeBody[i].style.top = `${positions[i * delay].y}px`;
//             }
//         }
//     }, 10);
    
//     document.addEventListener('keydown',(e)=>{
//       if(e.key!='ArrowUp' && e.key!='ArrowDown' && e.key!='ArrowRight' && e.key!='ArrowLeft'){
//         clearInterval(intervalId);
//       }
//     })

//FOOD
let food=()=>{
let Food=document.createElement('div')
let PrevFood=Food;
Food.className='food'
Food.style.backgroundColor='red'
Food.style.width='20px'
Food.style.height='20px'
Food.style.borderRadius="20px"

let value1=Math.round(Math.random()*1000+1);
let value2=Math.round(Math.random()*250+1);
let value3=Math.round(Math.random()*500+1);
let value4=Math.round(Math.random()*500+1);
Food.style.position="absolute"
Food.style.marginLeft=`${value1}px`
Food.style.marginRight=`${value2}px`
Food.style.marginBottom=`${value3}px`
Food.style.marginTop=`${value4}px`
ground.appendChild(Food)
return PrevFood;
}
let meal=food();

//LENGTH

setInterval(() => {
  let getFoodPosition = () => {
    let rect = meal.getBoundingClientRect();
    return { x: rect.left, y: rect.top };
  };

  let getHeadPosition = () => {
    let rect = snakeBody[0].getBoundingClientRect();
    return { x: rect.left, y: rect.top };
  };

  let foodpos = getFoodPosition();
  let headPos = getHeadPosition();

  // Check if head is close to the food (proximity check)
  if (Math.abs(headPos.x - foodpos.x) < 20 && Math.abs(headPos.y - foodpos.y) < 20) {
    length += 1;
    addSegment(); // Add a new body part

    // Move food to a new random position
    // meal.style.left = `${Math.random() * 700}px`;
    // meal.style.top = `${Math.random() * 250}px`;
    // console.table([meal.style.left,meal.style.top])
    //Removing prevfood after  eat
    meal.remove()

    //GENERATE  new food
    meal=food();
  }
  // console.log(length)
}, 50); // Check every 50ms


// //This is wrong as they rarerly match
// setInterval(()=>{
//   let getFoodPosition = () => {
//     let rect = Food.getBoundingClientRect();
//   return { x: rect.left, y: rect.top };
// };

// let foodpos = getFoodPosition();

// let getHeadPosition = () => {
//   let rect = snakeBody[0].getBoundingClientRect();
//   return { x: rect.left, y: rect.top };
// };

// let headPos = getHeadPosition();
// if(headPos.x===foodpos.x || headPos.y===foodpos.y){//This is wrong as they rarerly match
// length+=1;
// createSnake();
// }
// },50)

// let groundWidth=ground.innerWidth;
// let groundHeight=ground.innerHeigt;
// let meal =()=>{
// let FoodX=Math.random()*groundWidth;
// let FoodY=Math.random()*groundHeight;
//     gsap.set(Food,{
//         x:FoodX,
//         y:FoodY,
//         duration:0.1,
//     })
//     ground.appendChild(Food)
//     console.log(FoodX,FoodY)
// }
// meal()

// document.addEventListener('keydown',(e)=>{
//     if(e.code==="ArrowDown"){
//     gsap.to("#snake",{
//         y:565,
//         // delay:1,
//         duration:5,
//         // repeat:-1
//     });
//     }
    
// })
// document.addEventListener('keydown',(e)=>{
//     if(e.code==="ArrowRight"){
//     gsap.to("#snake",{
//         x:1100,
//         // delay:1,
//         duration:5,
//         repeat:-1
//     })
//     }
// })
// document.addEventListener('keydown',(e)=>{
//     if(e.code==="ArrowLeft"){
//     gsap.from("#snake",{
//         x:1100,
//         // delay:1,
//         duration:5,
//         // repeat:-1
//     })
//     }
    
// })
// document.addEventListener('keydown',(e)=>{
//     if(e.code==="ArrowUp"){
//     gsap.from("#snake",{
//         y:565,
//         // delay:1,
//         duration:5,
//         // repeat:-1
//     })
//     }
    
// })



// let cursor=document.querySelector('window')
// ground.addEventListener('mousemove',function(e){
//     gsap.to(cursor,{
//         x:e.x,
//         y:e.y,
//         duration:1,
//         // ease:"bounce.out",
//     })
//     console.log(e.x,e.y)
// })


//OR *******************************************************************

// let ground = document.querySelector('.ground');
// let snakeBody = [];
// let Length = 4;
// let positions = []; // Store past positions of the head
// let delay = 3; // The delay between each segment following the previous one
// let pause = false;

// // 🐍 CREATE SNAKE FUNCTION
// let createSnake = () => {
//   for (let i = 0; i < Length; i++) {
//     let div = document.createElement('div');
//     div.className = 'cobra';
//     div.style.width = '40px';
//     div.style.height = '30px';
//     div.style.position = 'absolute';
//     div.style.borderRadius = '20px';
//     div.style.backgroundColor = 'white';
//     div.style.color = 'red';
//     div.style.display = 'flex';
//     div.style.justifyContent = 'center';
//     div.style.left = `${200 - i * 40}px`;  // Each segment starts behind the head
//     div.style.top = `200px`;  
//     ground.appendChild(div);
//     snakeBody.push(div);
//   }
// };
// createSnake();

// // 🏃 MOVEMENT
// document.addEventListener("keydown", (event) => {
//   if (pause) return; // Stop movement if game is paused

//   gsap.killTweensOf(snakeBody[0]);

//   if (event.key === "ArrowRight") {
//     gsap.to(snakeBody[0], { x: "+=1500", duration: 10 });
//   } else if (event.key === "ArrowLeft") {
//     gsap.to(snakeBody[0], { x: "-=1500", duration: 10 });
//   } else if (event.key === "ArrowUp") {
//     gsap.to(snakeBody[0], { y: "-=1500", duration: 10 });
//   } else if (event.key === "ArrowDown") {
//     gsap.to(snakeBody[0], { y: "+=1500", duration: 10 });
//   }
// });

// // 🐍 FOLLOWER MOVEMENT
// setInterval(() => {
//   if (pause) return; // Stop movement if game is paused

//   let getHeadPosition = () => {
//     let rect = snakeBody[0].getBoundingClientRect();
//     return { x: rect.left, y: rect.top };
//   };

//   let headPos = getHeadPosition();
//   positions.unshift({ x: headPos.x, y: headPos.y });

//   if (positions.length > snakeBody.length * delay) {
//     positions.pop();
//   }

//   for (let i = 1; i < snakeBody.length; i++) {
//     if (positions[i * delay]) {
//       snakeBody[i].style.left = `${positions[i * delay].x}px`;
//       snakeBody[i].style.top = `${positions[i * delay].y}px`;
//     }
//   }
// }, 10);

// // 🎯 GAME PAUSE FUNCTION
// function GameStop() {
//   pause = true;
// }

// // 🍎 FOOD CREATION
// let food = () => {
//   let Food = document.createElement('div');
//   Food.className = 'food';
//   Food.style.backgroundColor = 'red';
//   Food.style.width = '20px';
//   Food.style.height = '20px';
//   Food.style.borderRadius = "50%";
//   Food.style.position = "absolute";
//   Food.style.left = `${Math.random() * 500}px`;
//   Food.style.top = `${Math.random() * 500}px`;
//   ground.appendChild(Food);
//   return Food;
// };

// let meal = food();

// // 🐍 FOOD CONSUMPTION
// setInterval(() => {
//   if (pause) return; // Stop checking if game is paused

//   let getFoodPosition = () => {
//     let rect = meal.getBoundingClientRect();
//     return { x: rect.left, y: rect.top };
//   };

//   let getHeadPosition = () => {
//     let rect = snakeBody[0].getBoundingClientRect();
//     return { x: rect.left, y: rect.top };
//   };

//   let foodpos = getFoodPosition();
//   let headPos = getHeadPosition();

//   // ✅ Check if head is touching the food
//   if (Math.abs(headPos.x - foodpos.x) < 20 && Math.abs(headPos.y - foodpos.y) < 20) {
//     Length += 1;

//     let newSegment = document.createElement('div');
//     newSegment.className = 'cobra';
//     newSegment.style.width = '40px';
//     newSegment.style.height = '30px';
//     newSegment.style.position = 'absolute';
//     newSegment.style.borderRadius = '20px';
//     newSegment.style.backgroundColor = 'white';
    
//     let lastSegment = snakeBody[snakeBody.length - 1];
//     let lastPos = lastSegment.getBoundingClientRect();
//     newSegment.style.left = `${lastPos.left}px`;
//     newSegment.style.top = `${lastPos.top}px`;

//     ground.appendChild(newSegment);
//     snakeBody.push(newSegment); // Add to the body array

//     // ✅ Move the food to a new random position
//     meal.style.left = `${Math.random() * 500}px`;
//     meal.style.top = `${Math.random() * 500}px`;
//   }
// }, 50);
