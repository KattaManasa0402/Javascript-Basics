//Scope allows us to know whether a variable is accessible or not
//We have 3 types of Scope
//1. Global Scope - variables defined outside any function - in global scope
//2. Local/Function Scope - variables defined inside a function - in local scope
//3. Block Scope



//Global Scope - 
const nam="Katta Manasa";
//in global scope i can decalre once and use it anywhere in the file
//in local scope as below
const func=()=>{
    const myName="Riya";
    console.log(myName);
}
const logName=()=>{
    console.log(nam);

}
//local scope eg:
func();
logName();


//Global scope eg: - helpful but there is a disadvantage
//they remain in the memory throughout the life cycle of the application
//it can be modified from anywhere in the code

let n1="Diya";
const f1=()=>{
    console.log(n1);
    n1="Riya";
}
f1();
console.log(n1); //Riya - it is modified in the function f1


//nested functions

const functionA=()=>{
    const rollNo="202";

    const functionB=()=>{
        const age=20;
        console.log(rollNo);
        console.log(age);
    }
    functionB();
}

functionA();

//Note - 
//the variable inside the parent can be called in the child function
//But the vice versa is not possible 



//3)Block Scope

 //check this eg

 if(true){
    const city="Pune";
    console.log(city);
 }

 console.log(city); //city is not defined - error
 //but if i declare it as var city="Pune" - it will work
 //var is function scoped - it ignores block scope
 //let and const are block scoped