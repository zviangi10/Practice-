const express = require("express");
const sequilize = require('./config/conncection');


const app = express();
const PORT = 3001;

app.get("/pikachu", (req, res) => {
  res.json("hello world");
});

// GET, POST, PUT, DELETE

app.post()
app.put()
app.delete()

// A method is a pre-built function Made by Javascript
// What is a function?
app.listen(PORT, () => {
  console.log("I started my server!");
});

// // parameters
// const addSum = (pikachu, alex) => {
//   console.log(pikachu + alex);
// };

// addSum(6, 42);
// addSum(5, 13);
// addSum(7, 2);
