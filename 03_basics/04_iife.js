// Immediately Invoked Function Expressions (IIFE)  ---->this is imp concept prevent the global variable pollution


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); //here this ; is important as it tells the function to end up now because if we not apply then nya iife function execute hi nhi ho payega 

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

