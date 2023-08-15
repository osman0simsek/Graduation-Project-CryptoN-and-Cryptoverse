const express = require("express");
const router = express.Router();
const auth = require("./auth");
const nfts = require("./nfts")
const user = require("./user");
const admin = require("./admin");

router.use("/nfts", nfts);
router.use("/auth", auth);
router.use("/users",user);
router.use("/admin",admin);


module.exports = router;
