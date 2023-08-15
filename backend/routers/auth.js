const express = require("express");
const {
  register,
  getUser,
  login,
  editDetails,
  logout,
  imageUpload,
  forgotPassword,
  resetPassword,
} = require("../controllers/auth");
const router = express.Router();
const { getAccessToRoute } = require("../middlewares/auth/auth");
const {
  profileImageUpload,
} = require("../middlewares/libraries/profileImageUpload");
// Async Handler with Callback

// const runAsyncWrapper = (callback) => {
//   return function (req, res, next) {
//     callback(req, res, next).catch(next);
//   };
// };
// router.post("/register", runAsyncWrapper(register));

router.post("/register", register);
router.get("/profile", getAccessToRoute, getUser);
router.post("/login", login);
router.get("/logout", getAccessToRoute, logout);
router.post(
  "/upload",
  [getAccessToRoute, profileImageUpload.single("profile_image")],
  imageUpload
);
router.post("/forgotpassword", forgotPassword);
router.put("/resetpassword", resetPassword);
router.put("/edit", getAccessToRoute, editDetails);
module.exports = router;
