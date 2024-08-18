const express = require("express");
const app = express();
const mongoose = require("mongoose");
const seedDB = require("./seed");
const cors = require('cors');

const quotesRoute = require('./apis/quoteRoutes')

// middleware
app.use(cors()); // ise sabhi ports pe open ho jayega 
// app.use(cors({ origin: ['http://localhost:5173'] })); //origin set kara hai security ke liye -> yaha sirf 5173 pe open hoga
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/quotesapp")
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log("DB not connected", err);
  });

app.get("/hello", (req, res) => {
  res.status(200).json({ msg: "hello world" });
});

// just once seed data
// seedDB()

app.use(quotesRoute);

app.listen(8080, () => {
  console.log(`Server connected at 8080`);
});
