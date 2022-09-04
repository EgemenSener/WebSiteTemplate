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
    await personInfo.save();
    res.status(200).send("Ok!");
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const infos = await Person.findOne();
    res.status(200).json(infos);
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

module.exports = router;
