const router = require("express").Router();
const Person = require("../models/Person");
const jwt = require("jsonwebtoken");

router.post("/", async (req, res) => {
  try {
    const personInfo = new Person({
      title: req.body.title,
      name: req.body.name,
      surname: req.body.surname,
      email: req.body.email,
      bornDate: req.body.bornDate,
      profilePhoto: req.body.profilePhoto,
      skills: req.body.skills,
      city: req.body.city,
      from: req.body.from,
      description: req.body.description,
      education: req.body.education,
      certificates: req.body.certificates,
      experience: req.body.experience,
    });
    await personInfo.save();
    res.status(200).send("Ok!");
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/", authenticateToken, async (req, res) => {
  try {
    res.status(200).json(await Person.findOne());
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    await Person.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).send("Succesfully updated!");
  } catch (error) {
    res.status(500).json(error);
  }
});

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.status(403).send("Token is null");

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.status(403).send("Token is not correct!");
    req.user = user;
    next();
  });
}

module.exports = router;
