const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const FormDataModel = require("./model/form");
// imports the model created

const app = express();
app.use(express.json());
app.use(cors());

// connect database
mongoose.connect("mongodb://localhost:27017/bidders");


// registering a new user
app.post("/register", (req, res) => {
  const { name, password } = req.body;
  FormDataModel.findOne({ name: name }).then((user) => {
    if (user) {
      res.json("already a bidder");
    } else {
      FormDataModel.create(req.body)
        .then((log_reg_form) => res.json(log_reg_form))
        .catch((err) => res.json(err));
    }
  });
});


// looging in when user exists
app.post("/login", (req, res) => {
  const { name, password } = req.body;
  FormDataModel.findOne({ name: name }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("success");
      } else {
        res.json("Wrong password");
      }
    } else {
      res.json("you aren't a bidder");
    }
  });
});


// running app
app.listen(3001, () => {
  console.log("server on http://127.0.0.1:3001");
});

// do you know the song "Like a prayer by Madonna", yeah, it's amazing...