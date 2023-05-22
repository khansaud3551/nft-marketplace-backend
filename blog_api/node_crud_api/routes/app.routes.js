const blogsController = require("../controllers/blogs.controller");
const express = require("express");
const router = express.Router();

router.post("/blogs", blogsController.create);
router.get("/blogs", blogsController.findAll);
router.get("/blogs/:id", blogsController.findOne);
router.put("/blogs/:id", blogsController.update);
router.delete("/blogs/:id", blogsController.delete);

module.exports = router;