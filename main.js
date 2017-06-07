/*
Magic 8 Ball

Recreate the plastic Magic 8 Ball toy by writing an object called "eightBall".

First create an Array of Strings called "possibleResults" that contains all of the possible results our magic eightBall may give

It is certain
It is decidedly so
Without a doubt
Yes definitely
You may rely on it
As I see it, yes
Most likely
Outlook good
Yes
Signs point to yes
Reply hazy try again
Ask again later
Better not tell you now
Cannot predict now
Concentrate and ask again
Don't count on it
My reply is no
My sources say no
Outlook not so good
Very doubtful

Create an empty Object called "eightBall".

Add a key of "results" to your eightBall object and set it equal to "possibleResults".

Add a second key to "eightBall". The second key "getResult" holds a function. The function returns a randmom string from the results array.

Add a third key to "eightBall". The third key "shake" holds a function. The "shake" function takes in two arguments. A String and a Number. The String is a bit of text that will log to the console before the result of our virtual Magical 8 Ball (Example: "ShakeyShakey") The Number is how many times the String will be logged to the console before our result is logged to the console.

The result should be prepended by the String "Magic 8 Ball says:"

So executing the command:

eightBall.shake("ShakeyShakey", 3);

Could possibly log the following the console

ShakeyShakey
ShakeyShakey
ShakeyShakey
Magic 8 Ball says: "It is certain"

*/

var possibleResults = ["It is certain", "It is decidedly so", "Without a doubt",
 "Yes definitely", "You may rely on it", "As I see it, yes", "Most likely", "Outlook good",
 "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later",
 "Better not tell you now", "Cannot predict now", "Concentrate and ask again",
 "Don't count on it", "My reply is no", "My sources say no",
 "Outlook not so good", "Very doubtful"];


var eightBall = {
    results: possibleResults,
};

eightBall.getResult= function() {
  return eightBall.results[Math.floor(Math.random()*eightBall.results.length)];
};

eightBall.shake= function (str, num) {
  for(var i=0; i<num; i++){
    console.log(str);
  }
  console.log("Magic 8 Ball says: "+ eightBall.getResult.call());
};


eightBall.shake("shake in like a polaroid picture", 10);
