const express = require("express");
const answer = require("./answer");
const {
  createNewNFT,
  likeUndoLikeNFT,
  deleteNFT,
  editNFT,
  getSingleNFT,
  getAllNFT,
} = require("../controllers/nfts");
const router = express.Router();
const {
  getAccessToRoute,
  getNFTOwnerAccess,
} = require("../middlewares/auth/auth");
const {
  checkNFTExist,
} = require("../middlewares/database/databaseErrorHelpers");

router.post("/createNFT", getAccessToRoute, createNewNFT);
router.get("/:id", checkNFTExist, getSingleNFT);
router.get("/", getAllNFT);
router.put(
  "/edit/:id",
  [getAccessToRoute, checkNFTExist, getNFTOwnerAccess],
  editNFT
);
router.delete(
  "/delete/:id",
  [getAccessToRoute, checkNFTExist, getNFTOwnerAccess],
  deleteNFT
);
router.get(
  "/like/:id",
  [getAccessToRoute, checkNFTExist],
  likeUndoLikeNFT
);
router.use("/:question_id/answers",answer);
module.exports = router;