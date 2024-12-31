// Dates

let myDate = new Date()
// console.log(myDate.toString());//give ajeeb but date and tike current
// console.log(myDate.toDateString());//give day and rate current
// console.log(myDate.toLocaleString());//give date and tike current
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)  //here noticèthe month is started with 0 index and this way we can print any date
// let myCreatedDate = new Date(2023, 0, 23, 5, 3) //date and time we can adjust this way
// let myCreatedDate = new Date("2023-01-14")  //but in any format month start with 01
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);//give time in seconds only
// console.log(myCreatedDate.getTime());//this way to get time only
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());//day batata hai no ki form me 

// `${newDate.getDay()} and the time ` //this is called string interpulation ---used for represent the time date and day in b/w string

newDate.toLocaleString('default', {
    weekday: "long",
    
})

