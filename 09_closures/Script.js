//Closures

 //note- once a function is called , execution, its gone
 const Outer=()=>{
    const outerVar="Hello";

    const Inner=()=>{
        const innerVar="Hi";
        console.log(innerVar,outerVar);
    }
    return Inner;
 }

const result=Outer();// [Function: Inner]
result();
//what are closures - 
//see this code carefully

const Father=()=>{
    const name="Katta";

    const Child=()=>{
        const name2="Manasa";
        console.log(name,name2);
    }
    return Child;
}

const res=Father(); //it returns the Child function
res(); //it calls the Child function

//so basically if i defined a variable in parent function, closure will help me access it using the inner function 


//definition 
//closure gives the access to the outer function's scope from an inner function


//see this example too

const functionA=()=>{
    const key="Apple";

    const functionB=()=>{
        console.log(key);
    }

    functionB();
}

functionA();