const img=document.querySelector(".content img")
const baseurl='https://picsum.photos'
const btn=document.querySelector('button')
const randomno=()=>{
    let number='0123456789'
    let Random=Math.floor(Math.random(number)*1000+500)
    if(Random>900){
    return Random
    }
    else{
        Random=900
        return Random
    }
    // console.log(Random)
}
btn.addEventListener("click",()=>{
    setInterval(function(){
        img.src= `${baseurl}/${randomno()}/${randomno()}`
         console.log(img)
         },4000)
})




// const img=document.querySelector(".content")
// const baseurl='img'
// const btn=document.querySelector('button')
// const end='.jpeg'
// let i=1;
// btn.addEventListener("click",()=>{
//     setInterval(function(){
//         img.innerHTML= `<img src="${baseurl}${i}${end}" alt="img"></img>`
//         i++;
//          },1000)
// })