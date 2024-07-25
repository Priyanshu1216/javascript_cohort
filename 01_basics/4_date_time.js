const date = new Date()

console.log(date);


// methods

console.log(date.getDate());                  // gives date
console.log(date.getDay());                   // gives numeric value of day (1,2,3..) starting from monday
console.log(date.getMonth());                 // gives numeric value of month (0,1,2,3..) starting from 0 (january)


console.log(date.toDateString());             // Fri Jul 26 2024
console.log(date.toLocaleDateString());       // 7/26/2024