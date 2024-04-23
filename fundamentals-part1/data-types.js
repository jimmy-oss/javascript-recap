/* The 7 primitive data types

 1.Number: floating point numbers used for decimals. 
   and integers let age = 23;

 2.String: Sequence of characters used for text. 
   let firstName = "jimmy";

 3.Boolean: Logical type that can only be true or 
   false used for taking decisions.
   let fullAge = true;

 4.Undefined: Value taken by a variable that is not 
  yet defined('empty value').
  let children;

 5.Null: Also means 'empty value'.

 6.Symbol(ES2015): Value that is unique and cannot 
   be changed [Not Useful For Now].

 7.BigInt: Larger integers than the Number type can 
   hold.
  
   Javascript has dynamic typing: We do not have to 
   manually define the data type of the value stored 
   in a variable.Instead, data types are determined 
   automatically.
*/

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'jimmy');
console.log(typeof undefined);

javascriptIsFun = 'YES!';
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

// null is an object which is regarded as a bug in javascript null should return null not an object just like undefined returns undefined. 