const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("It'a about route!");
});

module.exports = router;
