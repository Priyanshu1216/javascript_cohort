// there are two types of memory

// Stack
// Heap


// Stack memory is used with primitive datatypes where a copy of value is assigned to other variables.


// Example

let user1 = "priyanshu"
let user2 = user1

console.log(user1);
console.log(user2);


// now if i change the value in user2, it would not affect the user1 because at the time of assignment, user1's value was copied and assigned to user2 and not it's reference

user2 = "rashu"
console.log(user2);



// Heap memory is used with non-primitives datatypes where refernece is passed instead of value.

// Example

let obj1 = {
  name: "Priyanshu",
  age: 24,
}

let obj2 = obj1

console.log(obj1);
console.log(obj2);


// now if i try to change the value  in obj2, obj1 will also be maipulated because, it's  was passed when assigning to obj2


obj2.name = "rashu"

console.log(obj1);
console.log(obj2);
