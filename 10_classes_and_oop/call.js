function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this,username)//without call =>When you call SetUsername(username) without .call, the SetUsername function doesn't know it should work with your createUser object 
    //in lame =>think of SetUsername as a worker. If you don't tell it whose house to clean (this), it either gets lost (undefined) or starts cleaning some random house (window). With .call, you’re giving it the right address (this is your object).
   //and impotance of this is that even it is called but after calling it get out from callstack of global execution but for holding the return from that we use this here
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123") 
console.log(chai);