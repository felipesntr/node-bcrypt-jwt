const router = require("express").Router();
const auth = require("./verify-token");

router.get("", auth, (_req, res) => {
  res.json({ posts: [{ title: "First Post" }, { title: "Second Post" }] });
});

module.exports = router;
