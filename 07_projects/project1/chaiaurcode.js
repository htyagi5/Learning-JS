const btn=document.querySelectorAll(".button")
const bdy=document.querySelector("body")
btn.forEach(function(btn){
  // console.log(btn);
  btn.addEventListener('click',function(e)
  {
    console.log(e.target);
    if(e.target.id==="grey"){
    bdy.style.backgroundColor=e.target.id;
    } 
    if(e.target.id==="white"){
    bdy.style.backgroundColor=e.target.id;
    }
    if(e.target.id==="blue"){
    bdy.style.backgroundColor=e.target.id;
    }
    if(e.target.id==="yellow"){
    bdy.style.backgroundColor=e.target.id;
    }
    if(e.target.id==="purple"){
    bdy.style.backgroundColor=e.target.id;
    }
    if(e.target.id==="red"){
    bdy.style.backgroundColor=e.target.id;
    }
    if(e.target.id==="pink"){
    bdy.style.backgroundColor=e.target.id;
    }
  });
});
