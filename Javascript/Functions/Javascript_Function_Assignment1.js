/** Write a program to demonstrate how a function can be passed as 
 * a parameter to another function. */


function greet(){
    return "Hello,";
}

function checkFunction(name, func){
    const greet = func();
    console.log(greet+" "+name); //Hello, Rajesh
}

checkFunction("Rajesh", greet);