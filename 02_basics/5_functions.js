function sum () {                               // Defining the function

}


// Rest operator

// ...num


function anyNumber (...num){
  return num                                    // it would return array
}


// we can give any number of values to rest operator


console.log(anyNumber(1,2));
console.log(anyNumber(1,2,3,4,5));



// Hoisting

// --> Calling function before declaration



// Example -

console.log(addOne(1));

function addOne(num){
  return num + 1
}
