// Challenge - See if you can follow the instructions and complete the exercise in under 30 minutes!

// Declare two variables - heroName AND specialAbility - set to strings

var heroName = "Superman";
var specialAbility = "flying";

// Declare two variables - greeting AND catchphrase
//   greeting should be assigned to a string that uses concatenation to include the heroName
//   catchphrase should be assigned to a string that uses interpolation to include the specialAbility

var greeting = "Hello it's me, " + heroName;
var catchphrase = "Have no fear, " + heroName + " is here!";

// Declare two variables - power AND energy - set to integers

var power = 1000;
var energy = 1000;

// Declare two variables - fullPower AND fullEnergy
//   fullPower should multiply your current power by 500
//   fullEnergy should add 150 to your current energy

var fullPower = power * 500;
var fullEnergy = power + 150;

// Declare two variables - isHuman and identityConcealed - assigned to booleans

var isHuman = false;
var identityConcealed = true;

// Declare two variables - archEnemies AND sidekicks
//   archEnemies should be an array of at least 3 different enemy strings
//   sidekicks should be an array of at least 3 different sidekick strings

var archEnemies = ["Lex Luther", "General Zod", "Brainiac"];
var sidekicks = ["Batman", "Justice League", "Krypto the Superdog"];

// Print the first sidekick to your console
console.log(sidekicks[0]);

// Print the last archEnemy to the console
console.log(archEnemy[2]);

// Write some code to add a new archEnemy to the archEnemies array
let newLength = archEnemies.push("Darkseid");

// Print the archEnemies array to console to ensure you added a new archEnemy

console.log(archEnemies);

// Remove the first sidekick from the sidekicks array

let first = sidekicks.shift([0]);

// Print the sidekicks array to console to ensure you added a new sidekick
console.log(sidekicks);

// Create a function called assessSituation that takes three arguments - dangerLevel, saveTheDay, badExcuse
//   - dangerLevel should be an integer
//   - saveTheDay should be a string a hero would say once they save the day
//   - badExcuse should be a string a hero would say if they are too afraid of the dangerLevel

function assessSituation (dangerLevel, saveTheDay, badExcuse) {
  var saveTheDay = "Crime won't stand a chance against me!";
  var badExcuse = "I'm scared, I've never gone up against this many villians";
  var dangerLevel = dangerLevel;
  if ((10 < dangerLevel) && (dangerLevel < 50)) {
      console.log(savesTheDay);
      } else if (dangerLevel > 50) {
      console.log(badExcuse);
      } else {
      console.log("Meh. Hard Pass.");
      }
    }

// Your function should include an if/else statement that meets the following criteria
//   - Danger levels that are above 50 are too scary for your hero. Any danger level that is above 50 should result in printing the badExcuse to the console
//   - Anything dangerLevel that is between 10 and 50 should result in printing the saveTheDay string to the console
//   - If the dangerLevel is below 10, it means it is not worth your time and should result in printing the string "Meh. Hard pass." to the console.

//Test Cases

function assessSituation (dangerLevel, announcement, excuse) {

  var announcement = 'Never fear, the Courageous Curly Bracket is here!';
  var excuse = 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.';
  var dangerLevel = dangerLevel;

  if ((10 < dangerLevel) && (dangerLevel < 50)) {
      console.log(announcement);
      } else if (dangerLevel > 50) {
      console.log(excuse);
      } else {
      console.log("Meh. Hard Pass.");
      }
    }

// assessSituation(99, announcement, excuse) > Should print - 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.'
//assessSituation(21, announcement, excuse) > should print - 'Never fear, the Courageous Curly Bracket is here!'
//assessSituation(3, announcement, excuse) > should print - "Meh. Hard pass."

// Declare a new variable - scaryMonster - assigned to an Object with the following key/values
//   - name (string)
//   - smell (string)
//   - weight (integer)
//   - citiesDestroyed (array)
//   - luckyNumbers (array)
//   - address (object with following key/values: number , street , state, zip)

var scaryMonster = {
  name: "Mr. Gobblin",
  smell: "musty",
  weight: 300,
  citiesDestroyed: ["Denver", "St. Louis", "Chicago"],
  luckyNumbers: [666, 420, 69],
  address: {
    number: 12110,
    street: "Devil Lane",
    state: "Colorado",
    zipCode: 80211
  }
};

// Create a new class called SuperHero
// - Your class should have the following DYNAMIC values
//   - name
//   - superpower
//   - age
// - Your class should have the following STATIC values
//   - archNemesis, assigned to "The Syntax Error"
//   - powerLevel = 100
//   - energyLevel = 50

class SuperHero {
  constructor(name, superpower, age, archNemesis, powerLevel, energyLevel) {
    this.name = name;
    this.superpower = superpower;
    this.age = age;
    this.archNemesis = "The Syntax Error";
    this.powerLevel = 100;
    this.energyLevel = 50;
  }

  sayName() {
    console.log(this.name);
  }

  maximizeEnergy() {
    this.energyLevel = 1000;
  }

  gainPower(gainPower = 20) {
    this.powerLevel += gainPower;
  }

}


// - Create the following class methods
//   - sayName, should print the hero's name to the console
//   - maximizeEnergy, should update the energyLevel to 1000
//   - gainPower, should take an argument of a number and INCREASE the powerLevel by that number

// - Create 2 instances of your SuperHero class


var superHero1 = new SuperHero("Batman", "strength", 40, "The Joker", 100, 50);
var superHero2 = new SuperHero("Wonder Woman", "agility", 32, "Cheetah", 1000, 1000);

superHero1.sayName(); //logs name
superHero1.gainPower(); //adds 20 to power
superHero2.maximizeEnergy(); //changes power to 100


// Reflection
// What parts were most difficult about this exerise?
//I had some difficulties with the if...else statement until I used a logical operator, then it was easy peasy!
// What parts felt most comfortable to you? Felt good with the functions and objects exercises.
// What skills do you need to continue to practice before starting Mod 1? I'd like to get better at for loops and
//if...else statements.
