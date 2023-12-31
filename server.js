// require express module
const express = require("express");

// create express app
const app = express();

//generic greeting route
app.get("/greeting", function (req, res) {
  res.send("<h1>Hello World!</h1>");
});

//greeting route with name param
app.get("/greeting/:name", function (req, res) {
  res.send(
    "<h1>Hello" +
      " " +
      req.params.name +
      "." +
      " " +
      "It's so great to see you!" +
      "</h1>"
  );
});

//tip calculator
const calculateTip = (req) => {
  const total = parseInt(req.params.total);
  const tipPercentage = parseInt(req.params.tipPercentage);
  const tip = total * (tipPercentage / 100);
  return tip;
};

const calculateGrandTotal = (req) => {
  const total = parseInt(req.params.total);
  const tipPercentage = parseInt(req.params.tipPercentage);
  const tip = total * (tipPercentage / 100);
  const grandTotal = tip + total;
  return grandTotal;
};
app.get("/tip/:total/:tipPercentage/", function (req, res) {
  const tip = calculateTip(req);
  const grandTotal = calculateGrandTotal(req);
  res.send(
    "<h1>" +
      "Bill: $" +
      req.params.total +
      "<br> " +
      "Percentage: " +
      req.params.tipPercentage +
      "%" +
      "<br>" +
      "Tip: $" +
      tip +
      "<br>" +
      "Grand Total: $" +
      grandTotal +
      "</h1>"
  );
});

//Magic 8 Ball

//function to pick a random answer
const pickMagic8Ball = () => {
  const magic8ball = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful",
  ];

  //randomly pick a decimal between 0 and 1
  //0 inclusive but 1 exclusive
  let randomIndex = Math.random();
  console.log(randomIndex);
  //since randomIndex will be less than 1,
  //multiplying by length of array will never equal the length of the array
  randomIndex *= magic8ball.length;
  console.log(randomIndex);
  //use floor() method to get an integer that is less than the array length
  //but not less than 0, which is what an array index is
  randomIndex = Math.floor(randomIndex);
  console.log(randomIndex);
  let answer = magic8ball[randomIndex];
  return answer;
};

app.get("/magic/:question", function (req, res) {
  const answer = pickMagic8Ball();
  res.send(
    "<h1>" + req.params.question + "</h1>" + "<br>" + "<h1>" + answer + "</h1>"
  );
});

//makes app listen on port 3000
app.listen(3000, function () {
  console.log("Listening on port 3000");
});
