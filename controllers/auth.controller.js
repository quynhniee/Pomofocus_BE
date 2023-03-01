const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const { v4: uuidv4 } = require("uuid");

// Create user
exports.signup = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    if (password.length < 8) {
      const error = new Error("Password must be at least 8 characters!");
      error.statusCode = 403;
      throw error;
    }

    const user = await User.findOne({ where: { email: email } });

    if (user) {
      const error = new Error("Email is existed!");
      error.statusCode = 403;
      throw error;
    }

    const hashedPw = await bcrypt.hash(password, 12);

    await User.create({
      id: uuidv4(),
      name: name,
      email: email,
      password: hashedPw,
    })
      .then(() => {
        res.status(200).json({ message: "Created successfully!" });
      })
      .catch((error) => {
        throw error;
      });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};

// Login
exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email: email } });

    if (!user) {
      const error = new Error("Email cannot be found!");
      error.statusCode = 404;
      throw error;
    }

    const isCorrectPw = await bcrypt.compare(password, user.password);

    if (isCorrectPw === false) {
      const error = new Error("Wrong password!");
      error.statusCode = 401;
      throw error;
    }

    const accessToken = jwt.sign(
      {
        userId: user.id,
        userEmail: user.email,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "2h" }
    );

    res.status(200).json({
      token: accessToken,
      message: "Login successfully",
    });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};

// Get user
exports.getUser = async (req, res, next) => {
  try {
    const { password, ...user } = req.user.dataValues;
    res.status(200).json(user);
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};