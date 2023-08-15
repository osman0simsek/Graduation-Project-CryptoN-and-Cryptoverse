const NFT = require("../models/NFT");
const asyncErrorWrapper = require("express-async-handler");
const CustomError = require("../helpers/error/CustomError");

const createNewNFT = asyncErrorWrapper(async (req, res, next) => {
  const information = req.body;

  const nft = await NFT.create({
    ...information,
    user: req.user.id,
  });
  return res.status(200).json({
    success: true,
    data: nft,
  });
});

const getAllNFT = asyncErrorWrapper(async (req, res, next) => {
  const nfts = await NFT.find();
  return res.status(200).json({
    success: true,
    data: nfts,
  });
});

const getSingleNFT = asyncErrorWrapper(async (req, res, next) => {
  return res.status(200).json({
    success: true,
    data: req.nft,
  });
});

const editNFT = asyncErrorWrapper(async (req, res, next) => {
  const editInformation = req.body;
  const {id} = req.params

  const nft = await NFT.findByIdAndUpdate(
    id,
    editInformation,
    {
      new: true,
      runValidators: true,
    }
  );
  return res.status(200).json({
    success: true,
    data: nft,
  });
});

const deleteNFT = asyncErrorWrapper(async (req, res, next) => {
  const {id} = req.params

  await NFT.findByIdAndDelete(id);

  return res.status(200).json({
    success: true,
    message: "Delete Operation Successful",
  });
});

const likeUndoLikeNFT = asyncErrorWrapper(async (req, res, next) => {
  if (req.nft.likes.includes(req.nft.user.id.toString("hex"))) {
    const index = req.nft.likes.indexOf(req.user.id);
    req.nft.likes.splice(index, 1);
    await req.nft.save();
  } else {
    req.nft.likes.push(req.nft.user.id.toString("hex"));
    await req.nft.save();
  }

  return res.status(200).json({
    success: true,
    message: "Like-UndoLike Operation Successful",
  });
});

module.exports = {
  createNewNFT,
  likeUndoLikeNFT,
  deleteNFT,
  editNFT,
  getSingleNFT,
  getAllNFT,
};
