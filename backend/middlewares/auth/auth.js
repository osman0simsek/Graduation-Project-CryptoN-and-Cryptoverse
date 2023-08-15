const CustomError = require("../../helpers/error/CustomError");
const jwt = require("jsonwebtoken");
const asyncErrorWrapper = require("express-async-handler");
const {
  isTokenIncluded,
  getAccessTokenFromHeader,
} = require("../../helpers/auth/tokenHelpers");

const getAccessToRoute = (req, res, next) => {
  const { JWT_SCRET_KEY } = process.env;
  if (!isTokenIncluded(req)) {
    return next(new CustomError("You are not auth to access this rout", 401));
  }
  const accessToken = getAccessTokenFromHeader(req);

  jwt.verify(accessToken, JWT_SCRET_KEY, (err, decoded) => {
    if (err) {
      return next(new CustomError("You are not auth to access this rout", 401));
    }
    req.user = {
      id: decoded.id,
      name: decoded.name,
      role: decoded.role,
    };
    next();
  });
};

const getAdminAccess = asyncErrorWrapper(async (req, res, next) => {
  if (req.user.role !== "admin") {
    return next(new CustomError("You are not auth to access this rout", 403));
  }
  next();
});

const getNFTOwnerAccess = asyncErrorWrapper(async (req, res, next) => {
  if (req.user.id !== req.question.user.id.toString("hex")) {
    return next(
      new CustomError("You are not auth to access this question", 403)
    );
  }
  next();
});

module.exports = {
  getAccessToRoute,
  getAdminAccess,
  getNFTOwnerAccess,
};
