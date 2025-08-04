// singleton  --> apni tarah ka ek hi object
// Object.create  -->this is constructor method through this the singleton object created

// object literals  -->mutiple instances hote hai it is not singleton

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])  //if variable alredy given as string as in this case so we can not retrieve it with dot operator we can only do it with square brackets 
// console.log(JsUser[mySym])  //and symbol only retrive by square bracket ,can also do but it's type is string then 
JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)  //it is used to stop some object to execute
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());