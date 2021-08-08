// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
function buildABear(name, age, fur, clothes, specialPower) { //Create a function called buildABear and give it 5 arguments: name, age, fur, clothes, specialPowers
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`; //define greeting variable with string
  var demographics = [name, age]; //define demographics variable with name and age
  var powerSaying = "Did you know that I can " + specialPower + " ?"; //define powerSaying variable with string concatinated with specialPower variable
  var builtBear = { //declare a new varialble builtBear and assign it to an object with these key/value pairs:
    basicInfo: demographics, //basicInfo key with demographics variable as value
    clothes: clothes, //clothes key with clothes variable as value
    exterior: fur, //exterior key with fur variable as value
    cost: 49.99, //cost key with integer as value
    sayings: [greeting, powerSaying, "Goodnight my friend!"],//sayings key with an array of values including: greeting variable, powerSaying variable and a string
    isCuddly: true,//is isCuddly key with Boolean value
  };//close object

  return builtBear // return builtBear with object key/value pairs when function is called
}//close function

buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares'); //call buildABear function with 5 parameters; returns builtBear
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in'); // call buildABear function again with 5 different parameters; returns builtBear



//FizzBuzz
function fizzBuzz(num1, num2, range) {//create a function called fizzBuzz and give it three arguments: num1, num2, range
  for (var i = 0; i <= range; i++) { //create for loop using `for` keyword and insert a counter with initialization (var i = 0), condition (i < n), increment operator(i++)
    if (i % num1 === 0 && i % num2 === 0) { //create 'if' statement with condition that evaluates whether the modulo of i and num1 AND(logical AND) the modulo of i and num2 are strictly equal to 0
      console.log('fizzbuzz');//if statement evaluates true, log 'fizzbuzz'
    } else if (i % num1 === 0) {//if first statement evaluates false, create 'else if' statement with condition that evalautes whether the modulo of i and num1 are strictly equal to 0
      console.log('fizz');//if statement evaluates true, log 'fizz'
    } else if (i % num2 === 0) {//if first two statements evaluate false, create second 'else if' statement with condition that evaluates whether modulo of i and num2 are strictly equal to 0
      console.log('buzz');//if statement evaluates true, log 'buzz'
    } else {// if first 3 statements evaluate false, create `else` statement
      console.log(i);//if statement evaluates true, log 'i'
    }//close else statement
  }//close for loop
}//close function

fizzBuzz(3, 5, 100);//call function with arugments: 3, 5, 100
fizzbuzz(5, 8, 400);//call function again with new arguments: 5, 8, 400
