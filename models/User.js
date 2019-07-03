//this is a model for user
//for registration process..

const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  password: {
    type: String,
    required: true
  }

  //should also have date, check it later.
});
module.exports = mongoose.model("user", UserSchema);
