//Functions - most important part of any programming Language
//What is a function
//It is a block of code that performs a tast

//eg
console.log("Print"); //- it performs the job of printing

//Parts to remember
//A function declaration - we define a function 
//A function Call - we are calling / executing the function 
// function - is a reserved keyword in javascript
//Example - 1

//FUNCTION DECLARATION
function Square(number){ // represents the start of function
    return number*number;
}// represents the end of function


//Parameters - are passed in our function definition
//Arguments - are passed in our function call


//FUNCTION CALL - INVOKING THE FUNCTION - SYNONYMS
const result=Square(5);
console.log(result);



//DIFFERENT WAYS TO DEFINE A FUNCTION
//1)
//FUNCITON DECLARATION 
// function name1(params){
// //STATEMENTS
// //have access to "this" keyword else use Arrow function 
// }
//2)
//FUNCTION EXPRESSION
// const name1=function(params){
//     //STATEMENTS
// }

// //3)
// //ARROW FUNCTION - are the most modern way to define a function

// const name1=(params)=>{

// }




//HOW DO U INVOKE A FUNCTION
//Ex:
function sayHi(Name){
    console.log(`Hi ,${Name}`);
}


//INVOKE OUR FUNCTION
//BY PASSING NAME AS ARGUMENT
sayHi("Manasa");


// RETURN STATEMENTS IN A FUNCTION 
//Returns undefined if we dont have a return statement

function add(a,b){
    return a+b;
}

console.log(add(2,3)); //5

let add2=(a,b)=>{
    return a-b;
};

console.log(add2(5,3)); //2


//IF WE WRITE MULTIPLE RETURN STATEMENTS
//ONLY FIRST RETURN STATEMENT WILL BE EXECUTED

//ARROW FUNCTIONS
const sum=(num)=>{
    return num+2; 
}

console.log(sum(10));

//if you do not give a default value to a parameter
//it will be undefined
const add3=(num1,num2)=>{
    return num1+num2;
}

const result2=add3(2);
console.log(result2) //NaN - Not a Number


const sol=add3(0,0);
console.log(sol);

