// Practice Qs 5.
// Create Function that returns the sum of numbers from 1 to n.

function printNum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum = sum + i;
    }
    return sum;
}

console.log(printNum(5)); 