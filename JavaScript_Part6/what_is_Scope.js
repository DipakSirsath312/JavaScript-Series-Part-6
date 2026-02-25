// Scope.
// Scope determines the accessibility of variables, objects,
// and functions from different parts of the code.

// Function
// Block
// Lexical

// 1.Function Scope.
// Variable defined inside a function are not accessible (visible) from outside the function.

let sum = 55; // Global Scope

function calSum(a, b) {
    let sum = a + b; // Function Scope
    console.log(sum);
}

calSum(10, 7);
console.log(sum);