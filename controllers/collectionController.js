const Collection = require("../models/Collection");

exports.getCollection = async (req, res) => {
  const collection = await Collection.findOne({ name: req.params.name });
  // If collection doesn't exist, return 404
  if (!collection) {
    return res.status(404).send("Collection not found");
  }

  res.send(collection);
};

// A new function to get a user's collections
exports.getCollectionsByWallet = async (req, res) => {
  try {
    const collections = await Collection.find({
      walletAddress: req.query.walletAddress,
    });
    res.status(200).json(collections);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.createCollection = async (req, res) => {
  let collection = new Collection(req.body);
  collection = await collection.save();

  res.send(collection);
};

exports.updateCollection = async (req, res) => {
  const collection = await Collection.findOneAndUpdate(
    { name: req.params.name },
    req.body,
    { new: true }
  );
  res.send(collection);
};
