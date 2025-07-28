let value=45
let negValue=-value
//console.log(typeof negValue);
//console.log(negValue);
// how did we get the values of number and string automatically
console.log(1+"2");
console.log("2"+1);
console.log(1+2+"3");//this is primitive conversion and can be referred to as ecma script conversion
console.log("3"+1+2);//here it concatenates the string with the number
console.log(1+2+"3"+4);//here it concatenates the string with the
console.log(null==0);//this will result in false as the == operator is an equality and does not convert the value of null to 0
console.log(null<=0)// this will result in true as the <= operator converts null to 0
console.log(null<0);// all the comparison operators convert null to 0 but not the equality operator==
// similar to null undefined always converts to 0 in comparison operators and give false as the answer
// to counter this we can use the strict equality operator === which does not convert the value of null or undefined but also checks the data type as well as the value
console.log(null===0);// this will result in false as the === operator does not convert the value 



