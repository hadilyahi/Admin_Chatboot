const express = require("express");
const {
  createCategory,
  getAllCategories,
} = require("./../controllers/categoryController");
const router = express.Router();

router.post("/create-category", createCategory);
router.get("/get-categories", getAllCategories);

module.exports = router;
