// Functions in js.
// Function Definition (telling JS)

// function funcName(){
//     do something
// }

// Function Calling (Using the function)
// funcName();

function isName() {
    console.log("Hii Everyone I am Dipak");

}
isName();


function printNumbers() {
    for (let i = 1; i <= 5; i++) {
        let rows = "";
        for (let j = 1; j <= i; j++) {
            rows += "*";
        }

        console.log(rows);

    }
}
printNumbers();

function isAdult() {
    let age = 18;
    if (age <= 18) {
        console.log("Adult");

    } else {
        console.log("Not adult");

    }
}
isAdult();