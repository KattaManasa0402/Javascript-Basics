//Lecture number 4 - OBJECTS
//Builds the foundation for more complex data structures

//Objects are a collection of data
//used to group variables

const name="Manasa";
const age=20;

//in object "person" we have two properties - name and age
//it is stored in the form of key and value pair
const person={
    name:'Manasa',
    age:20,
}
//we can print the whole object
console.log(person);
//we can extract the values using dot notation
console.log(person.name);
console.log(person.age);

//an object can contain any data type

//we have different types of objects in javascript
//Array
const arr=[1,2,3,4,5]
console.log(arr);
console.log(typeof arr);
//Date object
const date=new Date();
console.log(date);
console.log(typeof date);


//2 ) Two types of languages
//Statically typed and Dynamically typed

//Statistically 
//int num=10; - in C, C++ and Java
//we have to declare the data type of the variable

//Dynamically typed- javascript is  a dynamically typed language
//we dont have to declare the data type of the variable

let mssg="Hello World";
console.log(mssg);
console.log(typeof mssg);

mssg=5;
//here we are declaring the value to be a number
console.log(mssg);
console.log(typeof mssg);

//Comparison operators -> true/false
//the return type will be a boolean value

const a =5;
const b=10;
//to check greater than
console.log(a>b); //false
//to check less than
console.log(a<b); //true
//to check greater than or equal to
console.log(a>=b); //false
//to check less than or equal to
console.log(a<=b); //true


//Equality operators
console.log(a==b); //false

//Rememebr we use one = for assignment 
//we use two == for comparison

console.log(a!=b);

//Strict equality VS Loose equality
//Strict equality checks for value and type
//Loose equality checks for value only
//Strict inequality 
console.log(a===b);
console.log(a!==b);

console.log(5===5);
console.log("Hello"==="Hello");

//see carefully 
console.log(5=="5"); // will return true since it checks for value only
console.log(5==="5"); // will return false since it checks for value and type

//Strict equality is preferred over loose equality
//it compares for both value and types
//return true only if both are same


console.log(30=="30"); // it never compares for type

//The good ones - === and !==
//the evil twins - == and !=

console.log(''=='0'); //false
console.log(0==''); //true
console.log(0=='0'); //true
console.log(false=='false'); //- this should have returned true 
//but it is returning false

//there are many examples where the evil twins give unexpected results

//conclusion - always use strict equality

//Logical operators
//AND - it checks whether all operators are true
//OR - it checks whether at least one operator is true
//NOT - it negates the value

console.log(true&&false); // will give false
console.log(true&&true); // will give true
console.log(false&&false); // will give false

//OR OPERATOR

console.log(true|| false); // will give true
console.log(false|| false); // will give false
console.log(true|| true); // will give true




