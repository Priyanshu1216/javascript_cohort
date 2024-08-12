// Object -> Collection of key value pairs

// There are two ways to define Object

// 1. Object literals

const sym = Symbol("symbol");

const obj = {
  name: "Rashu",            // By default, keys will be of string type
  age: 24,
  [sym]: "symbol as key",     // symbol as key
  introduce: function(){
    console.log(`Hi this is ${this.name}`);           // here we are using string interpolation using backticks (``) and dollar sign, inside this "this" keyword is used to reference current object
  }
};

// 2. Constructor method

const obj1 = Object.create

console.log(obj);
console.log(obj1);
console.log(typeof obj[sym]);
console.log(obj[sym]);



// Notes

// We can access the elemens of object by two ways
// 1. using dot notation (.)           obj.name

// 2. using sqaure brackets            obj[name]