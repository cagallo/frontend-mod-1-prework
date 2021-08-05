/*
This exercise file is a little different from the others you have seen so far. Read carefully!

Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
Spend some time changing the variables and running the file to see how the story changes.
*/

var doorChoice = 1;
var bearClothing = "";
var bearChoice = 1;

console.log("You enter a dark room with two doors. Do you go through #1 or #2?");

if (doorChoice === 1) {
  bearClothing = "hat";
} else {
  bearClothing = "scarf";
}

console.log("You see a bear putting on a " + bearClothing);
console.log("It looks like that " + bearClothing + " is too small for the bear, do you...");

console.log("1. Offer your own to the bear?");
console.log("2. Point it out to the bear?");
console.log("3. Make a dash for the next room?");

if (bearChoice === 1) {
  console.log("You offer the bear your " + bearClothing + " and the bear shows you a secret passage out!");
} else if (bearChoice === 2) {
  console.log("You tell the bear the " + bearClothing + " is too small and it starts to cry!");
} else if (bearChoice === 3) {
  console.log("You run as fast as you can into the next room. It's full of snakes!");
} else {
  console.log("You stay with the bear and become it's best friend!");
}

/*
Questions

1. In English, using technical vocabulary, describe what is happening between lines 14 and 18.
An if...else statement is used to provide two different sets of code, one that is executed if the doorChoice is 1 and
another (else) that is executed if the doorChoice is 2.
2. What variable has a new value assigned to it after the first if statement executes?
bearClothing will have a new variable: "hat".
3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
the value would be "scarf".
4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.
Between lines 27-35, there is another if...else statement to provide different code to execute depending on the input
in the bearChoice variable. It provides 4 different paths depending on the input in the bearChoice variable: 1, 2, 3
and any other numbers besides 1, 2, or 3.
5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
The final outcome would be: else if (bearChoice === 3) {
console.log("You run as fast as you can into the next room. It's full of snakes!");
}
6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
The final outcome would be: else if(bearChoice === 2) {
console.log("You tell the bear the hat is too small and it starts to cry!");
}
7. What is your favorite ending?
I liked the else or final ending ("You stay with the bear and become it's best friend") because it is silly
and ignores the objective of getting out of the room. The developer sounds like they have a good sense of humor through
all of the different options though!
*/
