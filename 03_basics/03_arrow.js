const user = {
    username: "hitesh",
    price: 999,
    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);  // this keyword refers to the current object (user) where the method is being called. 
        console.log(this);//this will give all the data in the object (current)  
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()  //when i call from here it will print with sam as i have changed the context now i declare  user name again  so that "this " keyword access the current object updates too  

// console.log(this);  //but this will give empty object  as here nothing present globally but if we write it on browser console the n it will give about window object that is present in browser globally

// function chai(){
//     let username = "hitesh"
//     console.log(this.username); //this  ko ham function me use nhi kar sakte only in object here it will give  undefined result
// }

// chai()

// const chai = function() {
//     let username = "hitesh"
//     console.log(this.username); //this  ko ham function me use nhi kar sakte ase bhi only in object here it will give  undefined result
// }
// chai()
  
// ++++++++++USE OF ARROW FUNCTION ++++++++++++++++
// const chai =  () => {   
//     let username = "hitesh"
//     console.log(this);  //Here still undefined as output as this is inside function
// }
// chai() 


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// or
// const addTwo = (num1, num2) => ( num1 + num2) //here no use of return explicitly

// const addTwo = (num1, num2) => ({username: "hitesh"})  //here too but ( )brackets needed to use for execute mean object can ony be return using ( )bracket


// console.log(addTwo(3, 4))


