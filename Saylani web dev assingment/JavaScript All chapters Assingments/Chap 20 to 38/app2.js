///////////////Chapter 26-30////////////////////
// Q1. Write a program that takes a positive integer from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number
var int = parseFloat(prompt("Enter integer"));
input = false;


while (!input) {
    input = true;

    if (int < 0) {
        var int = prompt("Enter Positive integer");
        input = false;
    }
    else {
        if (input && int) {

            var x = Math.round(int);
            var y = Math.floor(int);
            var z = Math.ceil(int);
        }
    }
}
console.log("Number :" + int + "\nround off value :" + x + "\nfloor value :" + y + "\nceil value :" + z);
// Q2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number
var int = parseFloat(prompt("Enter integer"));
input = false;


while (!input) {
    input = true;

    if (int > 0) {
        var int = prompt("Enter Negative integer");
        input = false;
    }
    else {
        if (input && int) {

            var x = Math.round(-int);
            var y = Math.floor(-int);
            var z = Math.ceil(-int);
        }
    }
}
console.log("Number :" + int + "\nround off value :-" + x + "\nfloor value :-" + y + "\nceil value :-" + z);
// Q3. Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5
var num = prompt("Enter number");
var abs = Math.abs(num);
console.log("The absolute value of" + " " + num + " " + "is " + abs);
// Q4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:
function getRandomValue(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var x = getRandomValue(1, 6);
document.write("Random Dice Value :" + x);
// Q5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser
var input = prompt("Heads Or Tail");
var Dice = Math.floor(Math.random()*2);
if (Dice == 0 ){
  Dice = "Heads";
}
else{
  Dice = "Tails";
}
document.write("Random Coin Value is :"+Dice);

