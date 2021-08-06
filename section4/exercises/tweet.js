/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/


class Tweet {
  constructor(author, content, timeStamp, numberOfLikes, comments) {
    this.author = author;
    this.content = content;
    this.timeStamp = timeStamp;
    this.numberOfLikes = numberOfLikes;
    this.comments = comments;
  }

  like() {
    this.numberOfLikes++;
  }

  comment() {
    this.comments++;
  }
}

var tweet1 = new Tweet("Rihanna", "Fenty Beauty", "12:31 A.M.", 120193, 6782);

console.log(tweet1.numberOfLikes); //120193
tweet1.like();
console.log(tweet1.numberOfLikes); //120194
tweet1.comment();
console.log(tweet1.comments); // 6783
tweet1.like();
tweet1.like();
console.log(tweet1.numberOfLikes); //120196
tweet1.comment();
console.log(tweet1.comments); //6784

//and so on!
