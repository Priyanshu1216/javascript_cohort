// THis keyword

// this keyword is used for current context, used mainly with objects in Javascript


const user = {
  username: "Priyanshu",
  age: 23,

  welcomeMessage: function(){
    console.log(`${ this.username}, welcome`);
  }
}

user.welcomeMessage()
user.username = "Rashu"
user.welcomeMessage()


console.log(this);            // by default, this is empty object in node environment



// Arrow functions

const fun = (a,b) => {
  return a + b                                                 // Explicit return
}

console.log(fun(3,4))


// Other ways to declare arror functions

const fun2 = (a,b,c) => (a+b+c)                                 // Implicit return

// Note: when we are using parenthese() instead of curly braces {} we do not have to write return keyword, but when using curly braces we have to write return keyword

console.log(fun2(2,4,6));
