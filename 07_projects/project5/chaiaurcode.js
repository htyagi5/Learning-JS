let start=document.querySelector("#start")
let stop=document.querySelector("#stop")
const randomcolor=function(){
const hex="123456789ABCDEF"
let color="#"
  for(i=0;i<6;i++){
    color+=hex[Math.floor(Math.random()*16)]
  }
  return color
}
let repeat;
const bgcolor=function(){
  if(!repeat){
  repeat=setInterval(changecolor,100)
  }
 function changecolor(){
document.body.style.backgroundColor=randomcolor()
  }
}
const endbgcolor=function(){
  clearInterval(repeat)
  repeat=null;
}
start.addEventListener('click',bgcolor)
stop.addEventListener('click',endbgcolor)


//for direct change background color
// let color=document.querySelector("body");
// function changebg(){
//   color.style.backgroundColor=randomcolor();
// }
// setInterval(changebg,100)