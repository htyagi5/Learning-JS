
``` Javascript Promises ```

`//The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
A Promise is in one of these states:

pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation was completed successfully.
rejected: meaning that the operation failed`


const promiseOne = new Promise(function(resolve, reject){//resolve method  gives us the the the function being performed.  The Promise.resolve() method is a static method that creates a Promise that is resolved with a given value.
// The Promise.reject() method is the counterpart to Promise.resolve(). It is used to create a rejected Promise with a specified reason. 
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){  //It allows you to specify what should happen when a promise is resolved or fulfilled (success). Optionally, it can also handle rejections (errors).
    console.log("Promise consumed");
})

// or

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})

//we can also get an array or object etc completely
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

// or

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

 promiseFour
 .then((user) => {
    console.log(user);
    return user.username
}).then((username) => {//this is called then chaining 
    console.log(username);
}).catch(function(error){  //The catch method in JavaScript is used to handle errors or rejections in Promises. It allows you to specify a callback function to run when a promise is rejected.
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))//this is bydefault happenining function it specify that ki kuch to ho gya hai either resolve or catch


//other method to execute promise

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});


//The async keyword in JavaScript is used to define an asynchronous function. An asynchronous function is a function that always returns a promise, even if the function's code appears synchronous. It allows you to write cleaner, more readable asynchronous code using the await keyword.

// 1. An async function always returns a promise.
//     >If you explicitly return a value, it will be wrapped in a resolved promise.
//     >If an exception is thrown, it will result in a rejected promise.
// 2. You can use the await keyword inside an async function to pause execution until a promise is resolved or rejected.

async function consumePromiseFive(){
    try {//try and catch is important as is error =true then it will show the error as catch block is missing 
        const response = await promiseFive//here we use await as it not quickly give response so we have to apply await function so that it wait until response come 
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// or
//this is real application that i will use 


// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()//as response came from api in string form which is not fetch easily so we have to convert itinto json 
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()


//then method for real application
//it is very good method as we dont need ki await lagana padega because jab tak ek then() execute nhi hoga next then will not execute
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.


// The Promise.all() static method takes an iterable of promises as input and returns a single Promise. This returned promise fulfills when all of the input's promises fulfill (including when an empty iterable is passed), with an array of the fulfillment values. It rejects when any of the input's promises rejects, with this first rejection reason.

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});//output =>  Array [3, 42, "foo"]