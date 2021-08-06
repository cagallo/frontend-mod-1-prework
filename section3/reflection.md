## Section 3 Reflection

1. What are two points from the Growth Mindset article and/or video that either resonated with you, or were brand new to you?

Two points that resonated with me in the Growth Mindset article are:

-seeking out challenges- this tip stood out to me because I think seeking out problems that challenge you is so important to your development as a programmer and as a person in general. If you are consistently seeking out challenges, you are growing your skill set and your capicity to handle bigger problems.

-improving one's Zone of Proximal Development- this is another tip that stood out to me because it is so important to develop your current skills and I feel like Turing has done a great job building upon some basic skills we have learned in these sections by giving us slightly more challanging exercises that expand our skillset for JavaScript.

2. In which ways do you currently demonstrate a Growth Mindset? In which ways do you _not_?

I think I am a person who is not afraid of challanges and I know that I will get better at coding with more practice and study. I don't get overwhelmed when I don't understand things and I instead troubleshoot and reasearch the web. I could be better at asking questions but I actually did reach out to a cohort-mate for help in this module and I was proud that I did that. Coding is so much easier and a lot of fun when we collaborate.

3. Think of a web or mobile application you use regularly. Where is an example of a place that the developers probably use Arrays? Explain.

I read CNN and the NY Times regularly and the news feed on the front page is essentially an array or list of current news articles. This array is obviously modified constantly due to the ever-changing nature of news.

4. In your own words, explain what an Array method is.

An array method is a way that Javascript returns a new array depending on the method used: i.e. array.prototype.pop() method will remove the last element in an array and the array.prototype.push() method will add one or more elements to the array.

5. What is the purpose of a loop? When we would use a loop in conjunction with array vs. without?

The purpose of a loop is the provide the computer with a quick and easy way to repeatedly run a block of code until a certain condition is met. Loops are helping in conjunction with array when you need to run the same code for each item in the array.

6. If you had to teach a 5 year old about loops, how would you explain it?

A loop is like having 10 toys and needing to put them away, you put one toy away, you have 9 more to go. Once you get to 10 toys, you are done.

7. What questions do you still have about Arrays and loops?

One question I have is regarding for loops with arrays and it pertains to the
last exercise: 'loops-arrays'. My initial code was:

```
var ages = [17, 20, 34, 18, 16, 65, 49, 10, 22, 18];

for (var i = 0; i < ages.length; i++) {
  if (ages[i] > 17) {
  console.log("Age: " + ages[i] + ". Make sure you get out and vote!");
}else (ages[i] < 18) {
  console.log("Age: " + ages[i] + ". Oh no, you can't vote quite yet.")
}
}

```
I couldn't get my code to work until I took out the curly bracket set after else:

```
var ages = [17, 20, 34, 18, 16, 65, 49, 10, 22, 18];

for (var i = 0; i < ages.length; i++) {
  if (ages[i] > 17) {
  console.log("Age: " + ages[i] + ". Make sure you get out and vote!");
}else (ages[i] < 18)
  console.log("Age: " + ages[i] + ". Oh no, you can't vote quite yet.")
}

```

I thought that we needed the curly bracket around the code that runs if the else statement evaluates to true?
