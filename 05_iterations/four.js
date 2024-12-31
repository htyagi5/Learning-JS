const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

for (const hello in myObject) {
    // console.log(`shortcut is for ${hello}`);  //this also give keys also as whatever we give after const it is key 
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(key); //print keys as array is also object and start from 0 not 1 as other objects
    // console.log(programming[key]);
}

const map = new Map()  //this is function
map.set('IN', "India")   //(key,value)
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(key);//forin loop function pe nhi lagta yha iterable vali problem nhi hai
}