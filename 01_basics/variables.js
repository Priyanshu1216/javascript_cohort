const accountId = 12
let accountName =  "Priyanshu"                    // widely used and modern practice to define variables. (has local scope)
var accountEmail = "priyanshu@google.com"         // used previously but not in modern JS (ES6) (has global scope)
accountPassword = "R@shu12"                       // variables can be defined like this also
let accountState;

// accountId = 23                                 // not allowed to change constants, rest variables defined by let and var can be changed.

console.log(accountId);

console.table([accountId, accountEmail, accountName, accountPassword, accountState])        // consople.table is used to display data in tabular form.