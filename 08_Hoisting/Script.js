//Hoisting
//Tricky Concept
//Its almost never used in modern JavaScript


//Hoisting - is a default behavior of moving all the declarations at the top of the current scope (script or function)

console.log(typeof age); //undefined


//check this eg
console.log(age); //we are getting an error 

//but see this

var age=20; // now the error will be gone 
//this is because of hoisting
// so what hoisting does is 
//it declare the variable above the console statement 
// var age;
//console.log(age);
//and then it assign the value to it
//age=20;


//NOTE - HOISTING IS NOT HELPFUL SO AVOID IT
//also same as variables - functions also get hoisted at the top

//u cannot call a function before decalaration in modern JS
