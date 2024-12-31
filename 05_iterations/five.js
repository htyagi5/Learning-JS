 const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){   //as this function is callback so here function ka naam nhi dete aur parameter kuch bhi pass kar sakte hai
//     console.log(val);  
// } )

//  or

// coding.forEach( (item) => {
//     console.log(item);
// } )


// or


// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)
 

// coding.forEach( (item, index, arr)=> { 
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    // console.log(item.languageName);
} )