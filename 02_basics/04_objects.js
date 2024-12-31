// const tinderUser = new Object()  //singleton object
const tinderUser = {}  //non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {               //it is possible we can define object ke ander object nestely
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}
//3 ways to add 2 or more objects
// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4) //mean {}  me sare object inject ho jayege
                   //this is target  and rest source
const obj3 = {...obj1, ...obj2}   //most efficient spread method 
// console.log(obj3);

//********* DATABASE SE JAB DATA AATA HAI TO ARRAY KE FORM ME AATA HAI*********
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

console.log(users[1].email)
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));          //give array contain keys
// console.log(Object.values(tinderUser));      //give array contain values
// console.log(Object.entries(tinderUser));    //give output as array contain key value pairs

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));   //used to check whether this thing exist or not


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor
//this is the alternate way to fetch data instead of writing  course.courseInstructor  we can give a short name to access
const {courseInstructor: instructor} = course

// console.log(courseInstructor);
// or
console.log(instructor);

//JSON (javascript object notation)  it is the way of API 
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }
  

//ARRAY method OF API
[
    {},
    {},
    {}
]

