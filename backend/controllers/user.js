const User = require("../models/User");
const asyncErrorWrapper = require("express-async-handler");
const CustomError = require("../helpers/error/CustomError");

const getSingleUser = asyncErrorWrapper(async (req, res, next) => {
  return res.status(200).json({
    success: true,
    data: req.user,
  });
});

const getAllUsers = asyncErrorWrapper(async (req, res, next) => {
  const users = await User.find()
  return res.status(200).json({
    success: true,
    data: users,
  });
});

module.exports = {
  getSingleUser,
  getAllUsers
};
