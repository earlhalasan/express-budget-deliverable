const express = require("express");
const app = require("liquid-express-views")(express());
const budget = require("./models/budget.js");

const port = 3000;

app.listen(port, () => {
  console.log("app is running on port: ", port);
});

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("hi");
});

// "Homepage"
app.get("/budgets", (req, res) => {
  res.render("index", {
    allBudgets: budget,
  });
});

// Post
app.post("/budgets", (req, res) => {
  res.send("Hi");
});

// New
app.get("/budgets/new", (req, res) => {
  res.send("Hi");
});

// Index
app.get("/budgets/:index", (req, res) => {
  res.render("show", { budgets: budget[req.params.index] });
});
