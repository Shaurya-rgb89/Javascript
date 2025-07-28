// In JS the data types are divided into two categories: primitive and reference data types
// Primitive data types include: number, string, boolean, null, undefined, and symbol
// Reference data types include: object, array, function, and date
// they are catagorized based on how they are stored in memory
// Primitive data types are stored in the stack memory and reference data types are stored in the heap
// Primitive data types are immutable and reference data types are mutable
// This means that primitive data types cannot be changed once they are created, while reference data types
// can be changed after they are created
// javascript is a dynamically typed language, which means that variables can hold values of any data type
const names=["John", "Jane", "Doe"];
const myObj={
    name: "John",
    age: 30,
}
const myFunc=function(){
    console.log("Hello, World!");
}
console.log(names);
console.log(myObj);
console.log(myFunc);
console.log(typeof names); // object (arrays are a type of object)
console.log(typeof myObj); // object
console.log(typeof myFunc); // function


//++++++++++++++++++++++++++++++++MEMORY MANAGEMENT++++++++++++++++++++++++++++++++++++++++++
// JavaScript uses a garbage collector to manage memory
//there are two types of memory management stack and heap
// Stack memory is used for primitive data types and function calls
// Heap memory is used for reference data types like objects and arrays
// The garbage collector automatically frees up memory that is no longer in use 
// if we change the stack memory we will get a new value or a copy of that value
// if we change the heap memory we get the reference of that value and the changes will be reflected in all references to that value or the original value
//Example of stack memory 
let a=10
 let b=a
 a=20
 console.log(a); // 20
 console.log(b); // 10 (b is a copy of a, so it remains unchanged
 
 
 
 //Example of heap memory
 let obj1={
    name: "John",
    age: 30,
 }
 let obj2=obj1
 obj2.name="Jonny"
 console.log(obj1.name); // Jonny (obj2 is a reference to obj1, so changes to obj2 affect obj1)
 console.log(obj2.name); // Jonny
 