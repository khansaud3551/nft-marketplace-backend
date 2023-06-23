// models/NFT.js

const mongoose = require("mongoose");

const NFTSchema = new mongoose.Schema({
  ipfsPath: {
    type: String,
    required: true,
    // unique: true,
  },
  category: {
    type: String,
    required: true,
  },
  // Add any additional fields you want to store for each NFT
});

module.exports = mongoose.model("NFT", NFTSchema);
