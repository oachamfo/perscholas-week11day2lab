// Require modules
const express = require("express");

// Create the Express app
const app = express();

// Configure the app (app.set)

// Mount middleware (app.use)

// Mount routes

//greeting route
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
  const tip = total / tipPercentage;
  return tip;
};
app.get("/tip/:total/:tipPercentage/", function (req, res) {
  const tip = calculateTip(req);
  res.send(
    "Total:" +
      " " +
      "$" +
      req.params.total +
      " " +
      "Percentage: " +
      req.params.tipPercentage +
      "%" +
      "<br>" +
      "Tip: " +
      "$" +
      `${tip}` +
      "</h1>"
  );
});

// Tell the app to listen on port 3000
app.listen(3000, function () {
  console.log("Listening on port 3000");
});
