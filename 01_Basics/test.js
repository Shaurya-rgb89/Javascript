console.log("Shaurya")
const userName="Shaurya"
const age=22
const password="123@ghgs"
console.table([userName,age,password])
const null_var=null
let und
console.log(typeof userName);
console.log(typeof age);
console.log(typeof password);
console.log(typeof null_var); // always results in "object" due to a historical bug in JavaScript
console.log(typeof und);// always results in "undefined" as it has not been assigned a value