//Single line comment
console.log("Anything that follows these two slashes is a comment and is not interpreted by js interpreter");

/*
This is a multi-line comment
*/

//Learning about data types
//1. String
const exampleString = "Hello World";
console.log(exampleString);

//String can be put within single or double quotes
//1)Single quotes
const singleQuoteString = 'Hello World';
console.log(singleQuoteString);

//2)Double quotes
const doubleQuoteString = "Hello World!!";
console.log(doubleQuoteString);

//backticks
//backsticks provide an extended functionality , they allow embedding expressions by wrapping them into ${}.
const backsticks=`Hello World!!!`;
console.log(backsticks);

//backsticks provide an extended functionality , they allow embedding expressions by wrapping them into ${}.
//for example

const name=`Manasa`;
const sentence=`Hello ${name},welcome!`;
console.log(sentence);


//Know the difference between using quotes and backticks
// const a=`2+2`;
// console.log(a); //prints 2+2

const b=`${2+2}`;
console.log(b);

//Know the data types of your variables
console.log(typeof b);


//2. Number
//javascript allows us todeclare variables conveniently 

const a=5;
const c=3.14;
console.log(a);
console.log(c);
console.log(typeof a);
console.log(typeof c);

const p=5;
const q=10;
const r=p+q;
const r2=p-q;
const r3=p*q;
console.log(r);
console.log(r2);
console.log(r3);


//what is NaN? - undefined mathematical operation
const s= "Hello";
const num=5;
const res=s/num;
console.log(typeof res);

// but this looks confusing since Nan - os a numerical datatype


//3. Boolean - true or false
//booleans represent a logical entity and can have two values:true or false

const isCool=true;
console.log(isCool);

if(isCool){
    console.log("You are cool");
}
else{
    console.log("You are not cool");
}

const age=20;
if(age>=18){
    console.log("You are eligible to vote");
}
else{
    console.log("You are not eligible to vote");
}


//4. Null and Undefined
//null is a special value that represents "no value" or "empty value"
let age2=null;
age2=20;
console.log(age2);


//Undefined
// if a variable is declared but not assigned a value, it is undefined
let x;
console.log(typeof x); // undefined
let y=null;
console.log(typeof y); // object


//we use null to assign a variable that we want to be empty
//we use undefined to check if a variable has been assigned a value or not

  