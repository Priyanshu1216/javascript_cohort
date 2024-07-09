let vrbl = 33

console.log(vrbl);
console.log(typeof vrbl);

let str_vrbl = String(vrbl)

console.log(str_vrbl);
console.log(typeof str_vrbl);

let bool_vrbl = Boolean(vrbl)

console.log(bool_vrbl);
console.log(typeof bool_vrbl);

let num_vrbl = "33abc"

console.log(num_vrbl);
console.log(typeof num_vrbl);

let some = Number(num_vrbl)
console.log(some);              // => NaN (Not a number)
console.log(typeof some);

// "" => false                  // on trying to change datatype to boolen
// "rashu" => true
// 1 => true
// 0 => false