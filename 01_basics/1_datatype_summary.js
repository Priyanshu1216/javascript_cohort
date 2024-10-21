// Datatypes are divided into two categories on the basis of how they are stored in memory and accessed from memory

// Types of datatypes


// Primitive (Call by Value)

// 7 types - String, Number, Boolean, null, undefined, Symbol, BigInt


// Non-primitive (Reference type) (Call by reference)

// Array, Object, Functions


// Examples (Primitive)

let str = "Priyanshu"
let num = 100
let num1 = 100.3
let isCorrect = false
let not_defined;
let sym = Symbol("123")
let sym_1 = Symbol("123")


console.log(typeof str);
console.log(typeof num);
console.log(typeof num1);
console.log(typeof isCorrect);
console.log(typeof not_defined);
console.log(typeof sym);
console.log(typeof sym_1);

// let sym = "21" // (Symbol is immutable string and can't be changed once assigned)

console.log(sym);


// (Non Primitive Examples)

let arr = ["priyanshu", 1, 100.3, "false"]
console.log(typeof arr);            // object


let obj = {
  name: "priyanshu",
  age: 24,
}

console.log(typeof obj);            // object


let fun = function() {
  return "Hi there!"
}

console.log(fun());
console.log((typeof fun));          // Funtion
