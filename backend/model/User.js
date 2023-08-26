const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please provide your email"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email!"],
  },
  password: {
    type: String,
    required: [true, "Please enter a password"],
    minlength: 8,
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, "Please confirm your password"],
    validate: {
      // This only works on create and save
      validator: function (el) {
        console.log("el");
        return el === this.password;
      },
      message: "Password are not the same!",
    },
  },
});

userSchema.pre("save", async function (next) {
  console.log(this.password);
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
