const brcypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../model/User");

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "600",
  });
};

const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);
  user.password = undefined;
  return res.status(statusCode).json({ status: "success", token, data: user });
};

exports.signup = async (req, res, next) => {
  try {
    const email = req.body.email;
    const uuser = await User.findOne({ email });
    if (uuser)
      return res
        .status(403)
        .json({ status: "failed", message: "Email already exists" });

    const newUser = await User.create({
      email: req.body.email,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm,
    });
    createSendToken(newUser, 201, res);
    return;
  } catch (err) {
    return res.status(401).json({ status: "failed", message: err.message });
  }
  next();
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  // 1) Checking email and password exist
  if (!email || !password) {
    return res
      .status(400)
      .json({ status: "failed", message: "Please enter email and password" });
  }

  // Checking user exist and password is correct
  try {
    const user = await User.findOne({ email }).select("+password");

    if (!user || !(await user.correctPassword(password, user.password))) {
      return res
        .status(401)
        .json({ status: "failed", message: "Incorrect email or password" });
    }

    createSendToken(user, 200, res);
    return;
  } catch (err) {
    return res
      .status(401)
      .json({ status: "failed", message: "Incorrect email or password" });
  }
};
