// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);//if we want ki koi apni property banaye jise hum use karpaye to hume use protype me inject karna hoga let see how to do  and that property can be used by any string 
  
// aur listen array string and function all are finally gone through object  to jo property object pe acessible hai vo un teeno me bhi accessable hai but ulta true nhi hai

let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}
//way to give all object a new property now this accessible to all object array function and string
Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}
//way to give all array a new property(method) now this accessible to only arrays same can be done with string and function

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyHitesh()
// heroPower.heyHitesh()

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport//__proto__  is a property that used to link two or more objects=> __proto__ is like a "backdoor" to see or change where an object gets its inherited stuff (its prototype). Think of it as a secret connection to another object.   mean here  TASupport can also acess the things and prototype the  TeachingSupport have
}

Teacher.__proto__ = User//here  Teacher have the access of user things and propeties
//Why Avoid __proto__?
// Performance: Direct manipulation of __proto__ can hurt performance.
// Readability: It's clearer and safer to use Object.getPrototypeOf and Object.setPrototypeOf.

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)//TeachingSupport have the access of  Teacher things

//so above problem has been solved of truelength 

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){//truelength is defined here
    console.log(`${this}`);//jo bhi call(yaad) karega mujhe
    console.log(`True length is: ${this.trim().length}`);
}//now hame baar baar trim().length nhi lagana hoga

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()