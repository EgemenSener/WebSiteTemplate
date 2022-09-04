const router = require("express").Router();
const Person = require("../models/Person");

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
    const infos = await personInfo.save();
    res.status(200).json(infos);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
