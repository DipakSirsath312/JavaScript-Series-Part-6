// Practice Qs 4.
// Create a Function that prints the Multiplication table of a Number.

function tablePrint(num) {
    for (let i = num; i <= num * 10; i += num) {
        console.log(`${i}`);
    }
}
tablePrint(10);