const express = require("express");
const router = express.Router({mergeParams:true});
const { getAccessToRoute } = require("../middlewares/auth/auth");
const {
  checkNFTExist,
} = require("../middlewares/database/databaseErrorHelpers");

const { addNewAnswerToQuestion,getAllAnswersByQuestion } = require("../controllers/answer");

router.post(
  "/",
  [checkNFTExist, getAccessToRoute],
  addNewAnswerToQuestion
);

router.get("/", getAllAnswersByQuestion);

module.exports = router;
