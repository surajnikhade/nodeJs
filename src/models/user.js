const mongoose = require("mongoose");

// create Schema
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  emailId: {
    type: String,
  },
  password: {
    type: String,
  },
  age: {
    type: Number,
  },
  gender: {
    type: String,
  },
});


// create moongosee model --> while refering to model it started with cap
const User = mongoose.model('User', userSchema);

module.exports = User;