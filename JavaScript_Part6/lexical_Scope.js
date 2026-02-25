// Lexical Scope
// a variable defined outside a function can be accessible inside another function defined after the variable declaration.

// The opposite is NOT true.

function outterFunc() {
    let x = 10;
    let y = 5;

    function innerFunc() {
        console.log(x);
        console.log(y);
        console.log(x + y);
    }

    innerFunc();
}

outterFunc();
