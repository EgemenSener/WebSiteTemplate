const router = require("express").Router();
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

//Get Token
router.post("/getToken", async (req, res) => {
  try {
    const user = { name: req.body.username };
    if (
      req.body.username == process.env.NAME &&
      req.body.password == process.env.PASS
    ) {
      const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "2h",
      });
      res.status(200).json({ accessToken: accessToken });
    } else {
      res.status(403).send("Username or password not correct!");
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
