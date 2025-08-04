console.log("promises");

//practice

// const userData=fetch('https://api.github.com/users/htyagi5').then((data)=>{
//      return data.json()
// }).then((data)=>{
//     console.log(data)
// })


const promise=new Promise(function(resolve,reject){
    // let error=true
    let error=false
    // setTimeout(()=>{

        if(!error){
            resolve({username:"Harshit" ,password:"history"})
        }
        else{
            reject('Error: something went wrong');
        }
    // },1000)
})
promise.then((data)=>{
    console.log(data);
}).catch((absent)=>{
    console.log(absent)
})


//async

const promisetwo=new Promise((resolve,reject)=>{
   let error=true
   setTimeout(()=>{
       if(!error){
        resolve({lang:"javascript" ,tutor:"Hitesh sir"})
       }
       else{
        reject("Error:something went wrong")
       }

   },1000)

})
async function impdata(){
    try{
      let response=await promisetwo;
      console.log(response);
    }
    catch(error){
      console.log(error);
    }
}
 impdata();