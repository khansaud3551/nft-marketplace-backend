// controllers/nftController.js

const NFT = require("../models/NFT");

exports.createNFT = async (req, res) => {
  try {
    const nft = new NFT(req.body);
    await nft.save();
    res.status(201).json(nft);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getNFTs = async (req, res) => {
  try {
    const nfts = await NFT.find({});
    res.status(200).json(nfts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getNFTByIPFSPath = async (req, res) => {
  try {
    const nft = await NFT.findOne({ ipfsPath: req.params.ipfsPath });
    if (nft) {
      res.status(200).json(nft);
    } else {
      res.status(404).json({ message: "NFT not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
