## Section 4 Reflection

1. How different did your workflow feel this week, considering we asked you to follow the Pomodoro technique?

I definitely was more conscious of taking breaks and felt more productive overall while using the Pomodoro technique. I have also realized that I kind of always was utilizing something similar to the technique in my academic life but it feels better having my breaks be more organized and planned. I have a hard time sitting still, so I have always been big on taking breaks every half hour to an hour.

1. Regarding the work you did around setting intentions in Step 1 of the Pomodoro technique - how did that go? Were you surprised by anything (did you find yourself way more focused than you realized, more distracted that you thought you'd be, estimating times accurately or totally off, etc)?

I definitely liked the organization that Step 1 allowed me and I feel like I was more productive because it made the content of the work more digestible. I was able to say, "time to focus on methods/functions in classes," and dedicate my learning time to that task solely and I felt like I was more focused on the task at hand because I was taking my Pom breaks intermittently. I will say that it is surprising how much time you can dedicate to one single concept, so it is very helpful to schedule breaks so that you don't work non stop on something for like 4 hours.

1. What is an Object, and how is it different from an Array in Javascript?

An object groups together a mutable set of variables and functions to create a model of something you would recognize from the real world. Arrays are different from Objects in that they store data in an ordered collection in which the data can be accessed using a numerical index versus Objects are more like unordered lists.

2. For each set of data, would an array or object be better to store it? Explain your choice.

  * List of all of the students in class - Array- because the data is only first or last name, makes sense to access via numerical index.
  * List of states and their capitals - Object- because there are 50 states and each has a capital, so makes more sense to store in an Object.
  * List of things to pack for vacation - I could see this one going either way--I initially thought an array would make more sense, because it's a list of things to pack for one vacation. I think that is probably the correct way to do it but I would personally like to use an object like cesaresVacationPacking and I would have a array of strings in each separate property that I would name clothing, beautyProducts, shoes, essentials, workStuff etc., but I am a big overpacker lol.  
  * Names of all the Instagram accounts I follow - Array because it is simply names and can be accessed easily by index value.
  * List of student names and their cohort - Object because each student's name contains their cohort information.
  * Ingredients and amount of each ingredient to bake a cake - Object because the ingredents need to contain values for a recipe.
  * All my favorite restaurants- Array because it is a simple list with no extraneous information, would be easily accessed via index value.

3. In this section, we talked about an `transaction item object`. It has keys that represent different properties an bank transaction would have, and values that store the data. In a banking app, this data would eventually be displayed in the browser for the user. Think of another Object in a web application that you use frequently. What is it? What keys might be on it? What are example values?

I pay most of my bills online, including my rent, and I could see them using keys such as 'class' RentalPayment for the class the item is in and 'new' for var payment1 = new RentalPayment();. Some example properties are: 'date', 'time', 'amount', 'previous balance', 'new balance' and their values are displayed here:

 var payment1 = new RentalPayment("08/01/21", "12:00", 2000, 2000, 0);

4. What questions do you still have about classes and/or Objects?
I've seen 2 different syntaxes for defining functions in javascript:

```
function f() {
   ...
}
```
and

```
var f = function() {
    ...
};
```

Is there a preference for one or the other in the coding world?
