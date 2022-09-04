const router = require("express").Router();
const Card = require("../models/Card");

router.post("/", async (req, res) => {
  try {
    const cardInfo = new Card({
      title: req.body.title,
      title2: req.body.title2,
      time: req.body.time,
      description: req.body.description,
      picture: req.body.picture,
    });
    const infos = await cardInfo.save();
    res.status(200).json(infos);
  } catch (error) {
    res.status(500).json(error);
  }
});

// router.get("/about", async (req, res) => {
//   try {
//     const infos = await About.find();
//     res.status(200).json(infos);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });

module.exports = router;
