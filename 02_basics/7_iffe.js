// Immediately invoked function execution (IIFE)

// they are normal functions which needs to be executed right after their declaration to not create problem from global pollution scope


// eg: when we want our database to get connected right after our application starts, so we write a function to connect database and execute it


// syntax 

// ({})()          // Here, first parentheses is for function declaration and second parentheses os for execution


// example-

(function connectDB () {
  console.log(`DB connected.`);
})()