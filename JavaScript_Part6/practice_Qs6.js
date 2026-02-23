// Practice Qs 6.
// Create a Function returns the concatenation of all string in an array.

let str = ["One", "Piece", "is", "Real"];

function printString() {
    let allString = "";
    for (let i = 0; i < str.length; i++) {
        allString = allString + str[i];
        console.log(allString);

    }
    return allString;
}

printString();