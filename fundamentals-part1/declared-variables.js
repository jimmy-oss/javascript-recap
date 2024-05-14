let age = 30;
age = 31;
console.log(age);

const birthYear = 1991;
console.log(birthYear);
// birthYear = 1992; it will bring an error because 
// const is not for immutable like let 

// let is used if the declared value will change which
// is around to mutate as compared to const the value which has
// been declared cannot change according to the js world
// var is a legacy world used in Es6 in the older days
// so its recommended to just stick with var or const 
// in our current generations
// Another thing never declare a variable without let or const
// for example if u declare a variable like this;
// lastName = 'Peter'; console.log(lastName) it will be executed 
// true but the js will create a global property to the object which
// was declared.