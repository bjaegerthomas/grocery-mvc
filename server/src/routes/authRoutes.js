const router = require("express").Router();
const { register, login, me } = require("../controllers/authController");
const { requireAuth } = require("../middleware/requireAuth");

router.post("/register", register);
router.post("/login", login);
router.get("/me", requireAuth, me);

module.exports = router;
