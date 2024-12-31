function multipleBy5(num){

    return num*5
}

multipleBy5.power = 2//as function is also object toh hum function se object ki tarah .operator ke through v alues le aur de sakte hai 

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);//{} as there is nothing being inject 

function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){//we can define any of our method like and can inject it in the properties section in prototype
    this.score++  //*************************this ka matlab jisne bhi bulaya uspe appply kar duga without "this" node will confuse ki kis ko increase karu chai ki ya tea ki**************************************************
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

const chai =  createUser("chai", 25)
const tea = new createUser("tea", 250)
//impotance of why new keyword is important here 
// ******************************new connects the new object to the prototype of the constructor function. This is why the methods like increment and printMe work on tea and chai. Without new, the prototype methods wouldn't be linked to the object.****************************************
tea.printMe()
chai.printMe()
//When you use new, the constructor automatically returns the new object for you. Without it, you'd have to explicitly return an object from the function.

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/