const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const UserModel = require("./models/users");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/airbnb")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Register route
app.post('/register', (req, res) => {
  const { email, password } = req.body;
  bcrypt.hash(password, 10)
    .then(hashedPassword => UserModel.create({ email, password: hashedPassword }))
    .then(regUser => res.json(regUser))
    .catch(err => res.status(500).json({ message: "Error registering user", error: err }));
});

// Login route
app.post('/login', (req, res) => {
  const { email, password } = req.body; // Use the correct field name
  UserModel.findOne({ email: email })
    .then(user => {
      if (user) {
        if (user.password === password) { // Compare the correct password
          res.json('success');
        } else {
          res.json({ status: 'error', message: 'The password is incorrect' });
        }
      } else {
        res.json({ status: 'error', message: 'Record not found' });
      }
    })
    .catch(err => {
      res.status(500).json({ status: 'error', message: 'Server error', error: err });
    });
});


// Start the server
const port = 3001;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
