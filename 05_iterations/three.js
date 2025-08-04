// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {  //of is very powerful operator which helps to traverse in ann array
    // console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    // if(greet==" ")
    //     break
    // console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()  //this is function 
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")
// map.set('IN', "indonesia")  //if the key is same for 2 diff values than due to uniqueness last key value will print

// console.log(typeof(map));

// console.log(map);

for (const key of map) {
    // console.log(key);   //give output  as array contain both key as well as value
}
// or
for (const value of map) {
    // console.log(value);   //give output  as array contain both key as well as value
}
for (const [key] of map) {
    // console.log(key);   //if we put them in square brackets then they only print keys and not give output as array as above
}

for (const key of map) {
    // console.log(map[key]);// it returns undefined because Map objects in JavaScript don't store their values as regular object properties. Instead, they use special methods, so you have to use map.get(key) to access the values by key.
}

for (const [value] of map) {
    // console.log(value);  //if we try to print value like this it print keys only like above
}

//so if we want only values this is correct way
for (const [key, value] of map) {
    // console.log(value);  
}
// OR
// Alternatively, if you only need the values, you could use map.values():


// for (const value of map.values()) {
//     console.log(value);
// }

for (const [key,value] of map) {
    // console.log(key,'-:',value);   //it not return output in array format
}

const myObject = {  //this is object  not function
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) 
// {
//     console.log(key, ':-', value);  //if we try iteration on object it says not iterable only done using forin loop
    
// }
