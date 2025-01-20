let input=document.querySelector('.input')
let number=document.querySelectorAll('.numbers')
let operator=document.querySelectorAll('.operators')
let spkeys=document.querySelectorAll('.roler')
// input.innerText='0'
let prev=0;
number.forEach((key)=>{
    // input.innerText=""
    key.addEventListener('click',(e)=>{
        // prev=input.innerText
       input.innerText+=Number(e.target.id)
    //    return prev
    })
})
operator.forEach((key)=>{
    key.addEventListener('click',(e)=>{
        if(e.target.id!='C'){
        // prev=input.innerText
       input.innerText+=e.target.id
    //    return prev
    //    console.log('click')
        }
        else{
            input.innerText=''
        }
    })
})
let result=''
spkeys.forEach((key)=>{
    key.addEventListener('click',(e)=>{
        if(e.target.id=='equal'){
        try{
            result=eval(input.innerText)
            input.innerText=`${result}`
            // console.log(result)
        }
        catch{
        input.innerText="error";
        }
    }
    else if(e.target.id=='cut'){
        input.innerText=input.innerText.slice(0,-1) || '';
    }
    // else{
    //      input.innerText=prev
    // }
    })
})

