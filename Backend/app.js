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
  .connect("mongodb+srv://nauty9625ashish:MugkUoAvc1Y3vcgj@cluster0.pcgcsjc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
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
