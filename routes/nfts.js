// routes/nfts.js

const express = require("express");
const router = express.Router();
const nftController = require("../controllers/nftController");

router.post("/", nftController.createNFT);
router.get("/", nftController.getNFTs);
router.get("/:ipfsPath", nftController.getNFTByIPFSPath);

module.exports = router;
