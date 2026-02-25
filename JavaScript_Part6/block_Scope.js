// Block Scope.
// Variables declared inside a {} block cannot be accessed from outside the block.

{
    let a = 10;
    const b = 20;
    var c = 40;

    console.log(a);
    console.log(b);
}

// console.log(a);
// console.log(b);
// console.log(c);

for (let i = 0; i <= 10; i++) {
    console.log(i); // block scope.

}
// console.log(i);

let age = 25;
if (age >= 18) {
    let str = "Adult";
    console.log(str);
}
