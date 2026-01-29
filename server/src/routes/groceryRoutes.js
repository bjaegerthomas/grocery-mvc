const express = require("express");
const {
  listItems,
  addItem,
  toggleItem,
  deleteItem
} = require("../controllers/groceryController");

const router = express.Router();

router.get("/", listItems);
router.post("/", addItem);
router.patch("/:id/toggle", toggleItem);
router.delete("/:id", deleteItem);

module.exports = router;
