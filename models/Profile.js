const mongoose = require("mongoose");

const ProfileSchema = mongoose.Schema({
  walletAddress: {
    type: String,
    required: true,
    unique: true,
  },
  username: String,
  bio: String,
  collectionIDs: [String], // New field for collection IDs
  // Add other fields as needed...
});

module.exports = mongoose.model("Profile", ProfileSchema);
