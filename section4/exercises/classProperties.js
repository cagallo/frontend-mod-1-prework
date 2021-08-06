/*
In the exercise below, write your own code where indicated
to achieve the desired result.

Make sure to run the file with node in your command line.
*/

//-------------------
// Part 1: Syntax and Naming Conventions
//-------------------

// For each prompt:
  // Write a class skeleton
  // Create 2 object instances and store in variables
  // Log each variable to the console.
  // You do not need any proerties at this time!!

// Prompt 1: Dog
class Dog{

}

var welshTerrier = new Dog();
console.log(welshTerrier);
var goldenRetriever = new Dog();
console.log(goldenRetriever);


// Prompt 2: Snack

class Snacks {

}

var chips = new Snack();
console.log(chips);
var licorice = new Snack();
console.log(licorice);

// Prompt 3: Shirt

class Shirts {

}

var tankTop = new Shirts();
console.log(tankTop);
var blouse = new Shirts();
console.log(blouse);

//-------------------
// Part 2: Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Assign 3 properties (names and values of your choice) to each class
  // Create an object instance and store in variable
  // Log that variable to the console.

// Prompt 1: Dog

class Dog{
 constructor() {
   this.age = 5;
   this.weight = 55;
   this.color = "black";
 }
}

var borderCollie = new Dog();
console.log(borderCollie);

// Prompt 2: Snack

class Snacks {
  constructor() {
    this.costInDollars = 6;
    this.flavor = "sweet";
    this.kCal = 360;
  }
}

var boba = new Snacks();
console.log(boba);


// Prompt 3: Shirt

class Shirts {
  constructor() {
    this.size = "small";
    this.color = "black";
    this.fabric = "cotton";
  }
}

var tankTop = new Shirts();
console.log(tankTop);

//-------------------
// Part 3: Dynamic Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Declare 3 parameters in the consutructor
  // Assign 3 properties (names and values of your choice), using the parameters
  // Create 2 object instances and store in variables (passing in different arguments)
  // Log those variables to the console.

// Prompt 1: Dog

class Dog{
 constructor(age, weightInPounds, color) {
   this.age = age;
   this.weight = weightInPounds;
   this.color = color;
 }
}

var welshTerrier = new Dog(1, 22, "brown");
console.log(welshTerrier);
var goldenRetriever = new Dog(4, 47, "golden");
console.log(goldenRetriever);
var beagle = new Dog(7, 26, "multi");
console.log(beagle);

// Prompt 2: Snack
class Snacks {
  constructor(costInDollars, flavor, kCal) {
    this.cost = costInDollars;
    this.flavor = flavor;
    this.caloriesPerServing = kCal;
  }
}

var snapPeaCrisps = new Snacks(3, "salty", 130);
console.log(snapPeaCrisps);
var blueberries = new Snacks(4, "sweet", 60);
console.log(blueberries);
var brieCheese = new Snacks(10, "savory", 250);
console.log(brieCheese);

// Prompt 3: Shirt
class Shirts {
  constructor(size, color, fabric) {
    this.size = size;
    this.color = color;
    this.fabric = fabric;
  }
}

var tankTop = new Shirts("medium", "purple", "lace");
console.log(tankTop);
var buttonUp = new Shirts("large", "multi", "cotton");
console.log(buttonUp);
var blouse = new Shirts("small", "white", "silk");
console.log(blouse);
