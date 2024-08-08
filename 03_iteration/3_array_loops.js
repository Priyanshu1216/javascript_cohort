// for of

// Array specific loop

const arr = [1,2,3,4,5,6]

for (const i of arr) {
  console.log(i);
}


// for in  (used with objects


const obj = {
  username: "priyanshu",
  age: 23,
  isGood: true
}

for (const key in obj) {
  console.log(obj[key]);
}


// Note: when for in is used with array, it gives keys (0,1,2)  instead of elements




// for each  (used with array)

const newArray = [1,2,3,4,5,6,"Superman", "Flash"]

newArray.forEach(element => {
  console.log(element);
});

