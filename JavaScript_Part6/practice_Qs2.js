// Practice Qs 2.
// Create a Function to roll a dice & and always display the value of the dice(1 to 6).

function randomDice() {
    let dice = Math.floor(Math.random() * 6) + 1;
    console.log(dice);
}
randomDice();       