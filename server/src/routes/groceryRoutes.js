const router = require("express").Router();
const { requireAuth } = require("../middleware/requireAuth");

const {
  getAllGroceries,
  createGrocery,
  deleteGrocery,
} = require("../controllers/groceryController");

// protect everything here
router.use(requireAuth);

router.get("/", getAllGroceries);
router.post("/", createGrocery);
router.delete("/:id", deleteGrocery);

module.exports = router;
