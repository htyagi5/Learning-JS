//by me
// const time=document.getElementById("clock")
// const date=new Date();
// let currenttime=date.toLocaleTimeString();
// time.innerHTML=`${currenttime}`
// setInterval(function(){
//     location.reload();
// }, 1000);

// by sir

const time=document.getElementById("clock")
setInterval(function(){
    let date=new Date();
    time.innerHTML=date.toLocaleTimeString();
}, 1000);