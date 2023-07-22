const express = require("express");
const router = express.Router();

const CollectionController = require("../controllers/collectionController");

router.get("/:name", CollectionController.getCollection);
router.post("/", CollectionController.createCollection);
router.put("/:name", CollectionController.updateCollection);
router.get("/", CollectionController.getCollectionsByWallet);

module.exports = router;
