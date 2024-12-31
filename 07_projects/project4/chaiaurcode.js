const form=document.querySelector('form');
form.addEventListener('submit',function(e){
  e.preventDefault();
  const randomno=parseInt(Math.random()*100+1)
  let input=document.getElementById('guessField').value;
  let results=document.querySelector('.result');
  let div=document.querySelector('.resultparas');
  let previous=document.querySelector('.guesses');
  let remain=document.querySelector('.lastresult');
  previous.innerHTML=`${input}`
  if(input===" "||input<0||isNaN(input)){
    results.innerHTML=` 😎please ENTER VALID VALUE ${input}`
  }
  else if(input==randomno){
    results.innerHTML=`🫣congratulations👍 <br>random no is: ${input}`
  }
  else{
    results.innerHTML=` 😊once more <br> random no is:${randomno}`
  }
});

//from project 5
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


