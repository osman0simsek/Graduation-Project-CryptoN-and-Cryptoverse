const User = require("../models/User");
const asyncErrorWrapper = require("express-async-handler");
const CustomError = require("../helpers/error/CustomError");

const blockUser = asyncErrorWrapper(async (req, res, next) => {
  req.user.blocked = !req.user.blocked;
  await req.user.save();
  
  return res.status(200).json({
    success: true,
    message : "Block - UnBlock Successful"
  });
});

const deleteUser = asyncErrorWrapper(async (req, res, next) => {
  await req.user.remove();
  
  return res.status(200).json({
    success: true,
    message : "Delete Operation Successful"
  });
});

module.exports = {
  blockUser,
  deleteUser
};
