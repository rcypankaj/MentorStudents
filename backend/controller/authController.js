const brcypt = require("bcryptjs");
const User = require("../model/User");

exports.signup = async (req, res, next) => {
  //   console.log(req.body);
  try {
    const newUser = await User.create({
      email: req.body.email,
      password: req.body.password,
    });
    console.log(newUser);
  } catch (err) {
    return res.status(500).json({ status: "failed", message: err });
    // console.log(err);
  }
  next();
};
