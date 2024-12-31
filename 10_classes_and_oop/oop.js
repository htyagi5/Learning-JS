const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);//this is magic keyword ye batata hai ki kis instance ki baat ho rhi hai
        console.log(this);
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());//the ( )is important then only the function will run to give the details
// console.log(this);//print {} yes empty object aap shi samje  but in browser there is lot of global execution context material 

//if we give to many instances like here this by the  way we can give same name on both side but the argument will be pass to right one 
function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}
//THIS "new" keyword is constructor which is helpful if we like card bana rhe hai aur ek hi paramerter (function ki keys use kar rhe then "new" give each prameter a new instance)
//if too many instances are there so kaise pata chale kis instance ki baat ho rhi hai so we use "new" keyword if dont use then all values willoverwrite 
const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);//print [Function: User]
console.log(userTwo);
console.log(userOne);