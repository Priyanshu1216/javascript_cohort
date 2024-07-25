// Number

console.log(Number);

const num = 100;
const num2 = new Number(101);           // more precises

console.log(num);
console.log(num2);



// Maths


// some common Math functions

const num3 = 20.23;

console.log(Math.round(num3));                      // gives round off value
console.log(Math.ceil(num3));                       // gives uppser value
console.log(Math.floor(num3));                      // gives lower value
console.log(Math.abs(-2));                          // gives absolute value


// Getting random number between given range

console.log(Math.random());                         // Always gives number between 0 and 1(including)

console.log(Math.floor((Math.random() * 10 ) + 1));


const min = 10;
const max = 25;

console.log(Math.floor((Math.random() * (max - min + 1))) + min);