const express = require("express");
const { connectDB } = require("./config/database");
const app = express();
const User = require("./models/user");
app.post("/signup", async (req, res, next) => {
  // create a new instance of the User model
  const user = new User({
    firstName: "Virat",
    lastName: "Kohli",
    emailId: "123@gmail.com",
    password: "Password@123",
    age: 34,
    gender: "M",
  });

  try {
    await user.save();
    res.send("User created successfully");
  } catch {
    res.status(404).send("error in signup ");
  }
});

connectDB()
  .then(() => {
    console.log("connected to DB");
    app.listen(7777, () => {
      console.log("SERVER STRTED WITH PORT NUMBER 7777");
    });
  })
  .catch((err) => {
    console.log("Database connection fail");
  });
